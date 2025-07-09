#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

function runScript(scriptPath, scriptName) {
  return new Promise((resolve, reject) => {
    console.log(`\n🚀 Starting ${scriptName}...`);
    console.log('━'.repeat(60));
    
    const child = spawn('node', [scriptPath], {
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    child.on('close', (code) => {
      if (code === 0) {
        console.log(`✅ ${scriptName} completed successfully`);
        resolve();
      } else {
        console.error(`❌ ${scriptName} failed with exit code ${code}`);
        reject(new Error(`${scriptName} failed`));
      }
    });
    
    child.on('error', (error) => {
      console.error(`❌ Failed to start ${scriptName}:`, error.message);
      reject(error);
    });
  });
}

async function fullSync() {
  console.log('🔄 Rothco Full Sync - Load All Items & Fetch Product Data');
  console.log('═'.repeat(60));
  
  try {
    // Step 1: Populate all item numbers
    const populateScript = path.join(__dirname, 'populate-rothco-items.js');
    await runScript(populateScript, 'Populate Item Numbers');
    
    // Small delay between scripts
    console.log('\n⏳ Waiting 2 seconds before starting lookup...');
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Step 2: Lookup detailed product data
    const lookupScript = path.join(__dirname, 'rothco-lookup.js');
    await runScript(lookupScript, 'Product Data Lookup');
    
    console.log('\n🎉 Full sync completed successfully!');
    console.log('━'.repeat(60));
    console.log('✅ All Rothco item numbers populated');
    console.log('✅ All product data and images downloaded');
    console.log('📁 Product data saved to: src/data/rothco/products/');
    console.log('🖼️  Product images saved to: public/rothco/images/');
    
  } catch (error) {
    console.error('\n💥 Full sync failed:', error.message);
    console.error('━'.repeat(60));
    console.error('❌ The sync process was interrupted');
    console.error('💡 You can run individual scripts manually:');
    console.error('   • node scripts/populate-rothco-items.js');
    console.error('   • node scripts/rothco-lookup.js');
    process.exit(1);
  }
}

fullSync(); 