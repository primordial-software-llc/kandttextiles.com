"use client";

import airports from '@nwpr/airport-codes';

// Our internal Airport interface
export interface Airport {
  name: string;
  city: string;
  country: string;
  iata: string;
  latitude: number;
  longitude: number;
}

// Airport type from the @nwpr/airport-codes package
interface NwprAirport {
  id: number;
  name?: string;
  city?: string;
  country?: string;
  iata?: string;
  icao?: string;
  latitude?: number;
  longitude?: number;
  altitude?: number;
  timezone?: number;
  dst?: string;
  tz?: string;
  type?: string;
  source?: string;
}

/**
 * Calculate the distance between two lat/long points using the Haversine formula
 * @param lat1 Latitude of first point
 * @param lon1 Longitude of first point
 * @param lat2 Latitude of second point
 * @param lon2 Longitude of second point
 * @returns Distance in kilometers
 */
function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Convert degrees to radians
 */
function deg2rad(deg: number): number {
  return deg * (Math.PI / 180);
}

/**
 * Find the nearest major airport city to a given latitude and longitude
 * @param latitude Latitude coordinate
 * @param longitude Longitude coordinate
 * @param maxDistance Maximum distance in kilometers (optional, defaults to 100)
 * @returns Object containing airport information and distance
 */
export function findNearestAirportCity(latitude: number, longitude: number, maxDistance: number = 100): {
  airport: Airport | null;
  distance: number;
  locationString: string;
} {
  if (!airports || !airports.length) {
    return {
      airport: null,
      distance: -1,
      locationString: `${latitude}, ${longitude}`
    };
  }

  let closestAirport: Airport | null = null;
  let closestDistance = Number.MAX_VALUE;

  // Find the closest airport
  for (const airportData of airports) {
    // Skip airports without coordinates
    if (typeof airportData.latitude !== 'number' || typeof airportData.longitude !== 'number') continue;

    const distance = getDistanceFromLatLonInKm(
      latitude,
      longitude,
      airportData.latitude,
      airportData.longitude
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      // Map to our Airport interface
      closestAirport = {
        name: airportData.name || '',
        city: airportData.city || airportData.name || '',
        country: airportData.country || '',
        iata: airportData.iata || '',
        latitude: airportData.latitude,
        longitude: airportData.longitude
      };
    }
  }

  // If no airport was found within the maximum distance, return the raw coordinates
  if (!closestAirport || closestDistance > maxDistance) {
    return {
      airport: null,
      distance: -1,
      locationString: `${latitude}, ${longitude}`
    };
  }

  // Format the location string with the city, country, and approximate distance
  const cityName = closestAirport.city || closestAirport.name;
  const locationString = `${cityName}, ${closestAirport.country} (${Math.round(closestDistance)} km from ${closestAirport.name})`;

  return {
    airport: closestAirport,
    distance: closestDistance,
    locationString
  };
}

/**
 * Simplified function that returns just the formatted location string
 */
export function getLocationString(latitude: number, longitude: number): string {
  const result = findNearestAirportCity(latitude, longitude);
  return result.locationString;
} 