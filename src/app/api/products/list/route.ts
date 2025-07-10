import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const productsDir = path.join(process.cwd(), 'src/data/rothco/products');
    const files = fs.readdirSync(productsDir);
    
    // Filter for JSON files only
    const jsonFiles = files.filter(file => 
      file.endsWith('.json') && file.startsWith('product-')
    );
    
    return NextResponse.json({ 
      success: true, 
      files: jsonFiles,
      count: jsonFiles.length 
    });
    
  } catch (error) {
    console.error('Error reading products directory:', error);
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to read products directory',
      files: [],
      count: 0
    }, { status: 500 });
  }
} 