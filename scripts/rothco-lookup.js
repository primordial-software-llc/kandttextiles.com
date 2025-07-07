#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const ROTHCO_API_BASE = 'https://www.rothco.com/';

async function saveProductJson(productData, basePath, filename) {
  return new Promise((resolve, reject) => {
    // Ensure the base directory exists
    if (!fs.existsSync(basePath)) {
      fs.mkdirSync(basePath, { recursive: true });
    }

    const filePath = path.join(basePath, filename);
    const jsonContent = JSON.stringify(productData, null, 2);

    fs.writeFile(filePath, jsonContent, 'utf8', (error) => {
      if (error) {
        reject(new Error(`Failed to save JSON: ${error.message}`));
      } else {
        console.log(`✅ Product data saved: ${filePath}`);
        resolve(filePath);
      }
    });
  });
}

async function downloadImage(imageUrl, basePath, filename) {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(basePath)) {
      fs.mkdirSync(basePath, { recursive: true });
    }

    const filePath = path.join(basePath, filename);
    const file = fs.createWriteStream(filePath);

    https.get(imageUrl, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: HTTP ${response.statusCode}`));
        return;
      }

      response.pipe(file);

      file.on('finish', () => {
        file.close();
        console.log(`✅ Image saved: ${filePath}`);
        resolve(filePath);
      });

      file.on('error', (error) => {
        fs.unlink(filePath, () => {}); // Delete the file on error
        reject(new Error(`Failed to save image: ${error.message}`));
      });
    }).on('error', (error) => {
      reject(new Error(`Failed to download image: ${error.message}`));
    });
  });
}

async function fetchRothcoApi(path, urlParams, apiKey) {
  const url = `${ROTHCO_API_BASE}${path}?format=json&key=${apiKey}${urlParams}`
  console.log(url);
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`Failed to parse JSON: ${error.message}`));
        }
      });
    }).on('error', (error) => {
      reject(new Error(`API request failed: ${error.message}`));
    });
  });
}

async function lookupByVariationId(variationId, apiKey) {
  try {
    const productResponse = await fetchRothcoApi('api/products/items', `&rothco_ids=${variationId}&fields=selection_groups,description,rating,categories,short_description,no_ratings,sort`, apiKey);
    const product = productResponse.items.length ? productResponse.items[0] : null;
    if (product) {
      const variationsResponse = await fetchRothcoApi('api/products/variations', `&item_indexes=${product.item_index}&fields=specs,price,weight,image,catalog_page,msrp,caseprice,ship_size,eta_date`, apiKey);
      const variations = variationsResponse.item_variations.length ? variationsResponse.item_variations : [];
      
      for (const variation of variations) { 
        if (variation.image_filename) {
          try {
            const imageUrl = `${ROTHCO_API_BASE}upload/product/product/large/${variation.image_filename}`;
            await downloadImage(imageUrl, `public/rothco/images`, variation.image_filename);
          } catch (imageError) {
            console.error(`❌ Failed to download image for variation ${variation.rothco_id}: ${imageError.message}`);
            variation.localImagePath = null;
          }
        }
      }
      
      product.variations = variations;
      
      try {
        const productDataPath = 'src/data/rothco/products';
        const filename = `product-${product.item_index}.json`;
        await saveProductJson(product, productDataPath, filename);
      } catch (saveError) {
        console.error(`❌ Failed to save product data for ${variationId}: ${saveError.message}`);
      }
    } else {
      console.log('❌ No product found with that variation ID');
    }
    
    console.log(product);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.log('Usage: node rothco-lookup.js <variation_ids> <api_key>');
  console.log('Example: node rothco-lookup.js 30779 your_api_key_here');
  console.log('Example: node rothco-lookup.js "30779,30780,30781" your_api_key_here');
  console.log('Example: ROTHCO_API_KEY=your_key node rothco-lookup.js 30779');
  process.exit(1);
}

const variationIds = args[0].split(',').map(id => id.trim());
const apiKey = args[1];

if (!apiKey) {
  console.error('❌ Error: API key is required. Provide it as an argument or set ROTHCO_API_KEY environment variable.');
  process.exit(1);
}

async function processAllVariations() {
  for (let i = 0; i < variationIds.length; i++) {
    const variationId = variationIds[i];
    console.log(`\n🔍 Processing variation ${i + 1}/${variationIds.length}: ${variationId}`);
    console.log('━'.repeat(50));
    
    await lookupByVariationId(variationId, apiKey);
    
    // Add a small delay between requests to be respectful to the API
    if (i < variationIds.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log(`\n✅ Completed processing ${variationIds.length} variation(s)`);
}

processAllVariations();