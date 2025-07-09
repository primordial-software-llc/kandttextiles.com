# Scripts Documentation

## Rothco Product Lookup

The `rothco-lookup.js` script fetches product data from the Rothco API and saves it locally.

### Setup

1. **Configure your API key**:
   - Copy `scripts/config.json` and replace `"your_api_key_here"` with your actual Rothco API key
   - This file is gitignored to keep your API key secure

2. **Configure product IDs**:
   - Edit `scripts/rothco-ids.txt` to include the product IDs you want to lookup (comma-separated)
   - Current IDs: `3624,1,2,3,4,5`

### Usage

Run the script using npm:

```bash
npm run rothco-lookup
```

This will:
- Read the API key from `scripts/config.json`
- Read the product IDs from `scripts/rothco-ids.txt`
- Fetch product data for each ID (note: Rothco IDs correspond to specific product variations)
- Retrieve complete product data including all variations for each product
- Save JSON data to `src/data/rothco/products/`
- Download product images to `public/rothco/images/`

### Product Variations

The script handles product lookup as follows:
- Each ID in `rothco-ids.txt` is a Rothco variation ID (not the main product ID)
- Using the variation ID, the script fetches the complete product data
- All variations of the product are retrieved and saved together
- The file is saved using the true product ID (different from the Rothco variation ID used for lookup)

### Files Created

- `scripts/config.json` - API key configuration (gitignored)
- `scripts/rothco-ids.txt` - Product IDs to lookup
- Product data saved to: `src/data/rothco/products/product-{item_index}.json`
- Product images saved to: `public/rothco/images/` 