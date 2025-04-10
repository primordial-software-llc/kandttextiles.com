import { NextRequest, NextResponse } from 'next/server';
import { getTrackingDataForDevice } from '@/db';

// This is a dedicated API endpoint for processing encoded tracking data
export async function POST(request: NextRequest) {
  try {
    // Get the request body which should contain the encoded data
    const body = await request.json();
    const encodedData = body.encodedData;
    
    console.log('Received encoded data:', encodedData);
    
    if (!encodedData) {
      return NextResponse.json(
        { error: 'Encoded device data is required' },
        { status: 400 }
      );
    }
    
    // Get query parameters for pagination if provided
    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || body.limit || '1000', 10);
    const offset = parseInt(url.searchParams.get('offset') || body.offset || '0', 10);
    
    // Use the encoded data directly as the device ID
    console.log('Using encoded data directly as device ID:', encodedData);
    
    // Fetch tracking data with the encoded data as the deviceId
    const trackingData = await getTrackingDataForDevice(encodedData, limit, offset);
    console.log(`Found ${trackingData.length} tracking points`);
    
    if (trackingData.length === 0) {
      return NextResponse.json(
        { error: 'No tracking data found for the device' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      tracking: trackingData,
      count: trackingData.length,
      limit,
      offset
    });
  } catch (error) {
    console.error('Error processing tracking request:', error);
    return NextResponse.json(
      { error: 'Failed to process tracking request', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 