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

async function fetchRothcoApi(path, urlParams, apiKey) {
  const url = `${ROTHCO_API_BASE}${path}?format=json&key=${apiKey}${urlParams}`;
  console.log(`🔗 Fetching: ${url}`);
  
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

async function getAllRothcoItems(apiKey) {
  const allItems = [];
  let page = 1;
  const itemsPerPage = 100; // Adjust this based on API limits
  
  console.log('🚀 Starting to fetch all Rothco items...');
  
  while (true) {
    try {
      console.log(`\n📄 Fetching page ${page}...`);
      
      const response = await fetchRothcoApi(
        'api/products/items', 
        `&page=${page}&number=${itemsPerPage}`, 
        apiKey
      );
      
      if (!response.items || response.items.length === 0) {
        console.log(`✅ No more items found on page ${page}. Stopping pagination.`);
        break;
      }
      
      console.log(`📦 Found ${response.items.length} items on page ${page}`);
      
      // Extract item indexes from the response
      response.items.forEach(item => {
        if (item.item_index) {
          allItems.push(item.item_index);
        }
      });
      
      // Check if we've reached the end
      if (response.items.length < itemsPerPage) {
        console.log(`✅ Received fewer items than requested (${response.items.length} < ${itemsPerPage}). This was the last page.`);
        break;
      }
      
      page++;
      
      // Add a small delay between requests to be respectful to the API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
    } catch (error) {
      console.error(`❌ Error fetching page ${page}: ${error.message}`);
      break;
    }
  }
  
  return allItems;
}

async function writeItemsToFile(items) {
  const filePath = path.join(__dirname, 'rothco-item-indexes.txt');
  const uniqueItems = [...new Set(items)];
  const content = uniqueItems.join('\n');
  
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf8', (error) => {
      if (error) {
        reject(new Error(`Failed to write file: ${error.message}`));
      } else {
        console.log(`✅ Successfully wrote ${uniqueItems.length} unique item indexes to ${filePath}`);
        resolve(filePath);
      }
    });
  });
}

async function main() {
  try {
    // Read configuration
    const config = readConfig();
    const apiKey = config.rothco_api_key;
    
    if (!apiKey || apiKey === 'your_api_key_here') {
      console.error('❌ Error: Please set your API key in scripts/config.json');
      process.exit(1);
    }
    
    console.log('🔑 API key loaded successfully');
    
    // Fetch all items
    const allItems = await getAllRothcoItems(apiKey);
    
    if (allItems.length === 0) {
      console.log('❌ No items found');
      return;
    }
    
    console.log(`\n📊 Total items collected: ${allItems.length}`);
    
    // Write to file
    await writeItemsToFile(allItems);
    
    console.log('\n🎉 Successfully populated rothco-item-indexes.txt!');
    
  } catch (error) {
    console.error('❌ Script failed:', error.message);
    process.exit(1);
  }
}

main(); 