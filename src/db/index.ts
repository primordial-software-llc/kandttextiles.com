import { neon } from '@neondatabase/serverless';

// Create a SQL query executor using Neon's serverless driver
const sql = neon(process.env.DATABASE_URL!);

// Interface for tracking data points
export interface TrackingPoint {
  id?: number;
  device_id: string;
  date_recorded: string; // Format: YYYY-MM-DD
  time_recorded: string; // Format: HH:MM:SS
  latitude: number;
  longitude: number;
  type: string;
  speed: number;
  battery_level: number;
  link: string;
  formatted_date?: string; // Format: MM/DD/YYYY
  formatted_time?: string; // Format: HH:MM:SS
  google_maps_link?: string;
}

// Get tracking data points for a device
export async function getTrackingDataForDevice(
  deviceId: string, 
  limit: number = 100, 
  offset: number = 0
): Promise<TrackingPoint[]> {
  try {
    const rows = await sql`
      SELECT 
        id,
        deviceid as device_id,
        date as date_recorded,
        time as time_recorded,
        latitude,
        longitude,
        type,
        speedmph as speed,
        "BATTERY LEVEL" as battery_level,
        link,
        TO_CHAR(date, 'MM/DD/YYYY') AS formatted_date,
        time AS formatted_time,
        CONCAT('http://maps.google.com/maps?q=', latitude, ',', longitude) AS google_maps_link
      FROM tracking_data
      WHERE deviceid = ${deviceId}
      ORDER BY date DESC, time DESC
      LIMIT ${limit} OFFSET ${offset}
    `;
    
    return rows as TrackingPoint[];
  } catch (error) {
    console.error('Database error:', error);
    return [];
  }
}
