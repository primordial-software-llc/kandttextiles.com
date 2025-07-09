#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const ROTHCO_API_BASE = 'https://www.rothco.com/';

// Function to read API key from config file
function readConfig() {
  try {
    const configPath = path.join(__dirname, 'config.json');
    const configData = fs.readFileSync(configPath, 'utf8');
    return JSON.parse(configData);
  } catch (error) {
    console.error('❌ Error reading config file:', error.message);
    console.error('Please ensure scripts/config.json exists with your API key');
    process.exit(1);
  }
}

// Function to read product IDs from file
function readRothcoItemIndexes() {
  try {
    const idsPath = path.join(__dirname, 'rothco-item-indexes.txt');
    const idsData = fs.readFileSync(idsPath, 'utf8');
    return idsData.trim().split('\n').map(id => id.trim()).filter(id => id);
  } catch (error) {
    console.error('❌ Error reading product IDs file:', error.message);
    console.error('Please ensure scripts/rothco-item-indexes.txt exists with your product IDs');
    process.exit(1);
  }
}

async function saveProductJson(productData, basePath, filename) {
  return new Promise((resolve, reject) => {

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

async function syncProduct(rothcoId, apiKey) {
  try {
    const products = await fetchRothcoApi('api/products/items', `&item_indexes=${rothcoId}&fields=selection_groups,description,rating,categories,short_description,no_ratings,sort`, apiKey);
    if (products && products.items && products.items.length) {
      const product = products.items[0];
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
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

const config = readConfig();
const rothcoItemIndexes = readRothcoItemIndexes();
const apiKey = config.rothco_api_key;

if (!apiKey || apiKey === 'your_api_key_here') {
  console.error('❌ Error: Please set your API key in scripts/config.json');
  process.exit(1);
}

console.log(`📋 Processing ${rothcoItemIndexes.length} product IDs: ${rothcoItemIndexes.join(', ')}`);

async function processAllVariations() {
  for (let i = 0; i < rothcoItemIndexes.length; i++) {
    const rothcoItemIndex = rothcoItemIndexes[i];
    console.log(`\n🔍 Processing variation ${i + 1}/${rothcoItemIndexes.length}: ${rothcoItemIndex}`);
    console.log('━'.repeat(50));
    
    await syncProduct(rothcoItemIndex, apiKey);
    
    // Add a small delay between requests to be respectful to the API
    if (i < rothcoItemIndexes.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  console.log(`\n✅ Completed processing ${rothcoItemIndexes.length} variation(s)`);
}

processAllVariations();

