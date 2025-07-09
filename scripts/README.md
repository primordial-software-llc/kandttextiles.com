# Scripts Documentation

## Rothco Product Scripts

### 1. Populate Item Numbers (`populate-rothco-items.js`)

This script fetches all available product item numbers from the Rothco API using pagination and populates the `rothco-item-numbers.txt` file.

#### Setup

1. **Configure your API key**:
   - Copy `scripts/config.json.template` to `scripts/config.json`
   - Replace `"your_api_key_here"` with your actual Rothco API key
   - This file is gitignored to keep your API key secure

#### Usage

```bash
node scripts/populate-rothco-items.js
```

This will:
- Read the API key from `scripts/config.json`
- Fetch all product items from the Rothco API using pagination
- Extract item numbers/IDs from all pages
- Write all unique item numbers to `scripts/rothco-item-numbers.txt`

### 2. Product Lookup (`rothco-lookup.js`)

The `rothco-lookup.js` script fetches detailed product data from the Rothco API and saves it locally.

#### Setup

Same API key setup as above.

#### Usage

Run the script using npm:

```bash
npm run rothco-lookup
```

This will:
- Read the API key from `scripts/config.json`
- Read the product IDs from `scripts/rothco-item-numbers.txt`
- Fetch product data for each ID (note: Rothco IDs correspond to specific product variations)
- Retrieve complete product data including all variations for each product
- Save JSON data to `src/data/rothco/products/`
- Download product images to `public/rothco/images/`

### Product Variations

The lookup script handles product variations as follows:
- Each ID in `rothco-item-numbers.txt` is a Rothco variation ID (not the main product ID)
- Using the variation ID, the script fetches the complete product data
- All variations of the product are retrieved and saved together
- The file is saved using the true product ID (different from the Rothco variation ID used for lookup)

### Files Created

- `scripts/config.json` - API key configuration (gitignored)
- `scripts/rothco-item-numbers.txt` - Product IDs to lookup
- Product data saved to: `src/data/rothco/products/product-{item_index}.json`
- Product images saved to: `public/rothco/images/`

### 3. Full Sync (`rothco-full-sync.js`)

A convenience script that runs both the populate and lookup scripts in sequence for a complete data sync.

#### Usage

```bash
npm run rothco-full-sync
```

This will:
1. Run the populate script to fetch all item numbers
2. Wait 2 seconds 
3. Run the lookup script to fetch detailed product data
4. Provide comprehensive progress reporting

### Available NPM Scripts

- `npm run rothco-populate` - Fetch all item numbers only
- `npm run rothco-lookup` - Fetch detailed product data (requires existing item numbers)
- `npm run rothco-full-sync` - Complete sync: populate + lookup

### Workflow Options

**Option 1: Full Sync (Recommended)**
```bash
npm run rothco-full-sync
```

**Option 2: Manual Steps**
1. `npm run rothco-populate` to get all available item numbers
2. `npm run rothco-lookup` to fetch detailed product data for those items 