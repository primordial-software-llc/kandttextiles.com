# Favicon Generation for K&T Textiles

This project uses a globe icon as its favicon. The SVG version of the favicon is already in place, but the bitmap versions need to be generated.

## Files Already Set Up

- `public/favicon.svg` - The SVG version of the favicon
- `public/site.webmanifest` - Web app manifest file
- `src/app/layout.tsx` - Updated with favicon links

## Placeholder Files (Need to be Generated)

The following files are currently placeholders and need to be generated:

- `public/favicon.ico` - The ICO version of the favicon
- `public/apple-touch-icon.png` - 180x180 PNG for Apple devices
- `public/android-chrome-192x192.png` - 192x192 PNG for Android devices
- `public/android-chrome-512x512.png` - 512x512 PNG for Android devices

## How to Generate the Favicon Files

### Option 1: Using the Script (Recommended)

1. Install the required dependencies:
   ```
   npm install
   ```

2. Run the favicon generation script:
   ```
   npm run generate-favicons
   ```

### Option 2: Using Online Tools

You can use online tools to convert the SVG to the required formats:

1. Go to [RealFaviconGenerator](https://realfavicongenerator.net/) or [Favicon.io](https://favicon.io/favicon-converter/)
2. Upload the `public/favicon.svg` file
3. Download the generated files
4. Replace the placeholder files in the `public` directory with the generated files

## Verifying the Favicons

After generating the favicon files, run the development server to verify that they are working correctly:

```
npm run dev
```

Then open your browser and check if the favicon appears in the browser tab. 