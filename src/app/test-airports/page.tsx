"use client";

import { useState } from 'react';
import { findNearestAirportCity } from '@/utils/airport-city';
import airports from '@nwpr/airport-codes';

export default function TestAirportsPage() {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Some example coordinates for major locations
  const examples = [
    { name: 'New York (JFK)', lat: 40.6413, lng: -73.7781 },
    { name: 'London (LHR)', lat: 51.4700, lng: -0.4543 },
    { name: 'Tokyo (HND)', lat: 35.5494, lng: 139.7798 },
    { name: 'Sydney (SYD)', lat: -33.9399, lng: 151.1753 },
    { name: 'Dubai (DXB)', lat: 25.2532, lng: 55.3657 },
    { name: 'Paris (CDG)', lat: 49.0097, lng: 2.5479 },
    { name: 'Remote Location', lat: 0.0, lng: 0.0 }, // Middle of ocean
  ];

  const findNearestAirport = () => {
    try {
      setError('');
      const lat = parseFloat(latitude);
      const lng = parseFloat(longitude);
      
      if (isNaN(lat) || isNaN(lng)) {
        setError('Please enter valid latitude and longitude values');
        return;
      }
      
      const nearest = findNearestAirportCity(lat, lng, 500); // Larger max distance for testing
      setResult(JSON.stringify(nearest, null, 2));
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  const applyExample = (lat: number, lng: number) => {
    setLatitude(lat.toString());
    setLongitude(lng.toString());
    
    // Also run the search
    try {
      setError('');
      const nearest = findNearestAirportCity(lat, lng, 500);
      setResult(JSON.stringify(nearest, null, 2));
    } catch (err) {
      setError(`Error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Airport Location Finder Test</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Latitude</label>
            <input
              type="text"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="e.g. 40.6413"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Longitude</label>
            <input
              type="text"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="e.g. -73.7781"
            />
          </div>
        </div>
        
        <button
          onClick={findNearestAirport}
          className="px-4 py-2 bg-[#1B2845] text-white rounded-md hover:bg-[#34495e] transition-colors"
        >
          Find Nearest Airport
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-medium mb-3">Database Statistics</h2>
        <p className="text-gray-700">Total airports in database: {airports.length}</p>
        <p className="text-gray-700 mt-1">Coverage: Global airport database with international and domestic airports</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-medium mb-3">Example Locations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {examples.map((example, index) => (
            <button
              key={index}
              onClick={() => applyExample(example.lat, example.lng)}
              className="px-3 py-2 text-sm bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
            >
              {example.name}
            </button>
          ))}
        </div>
      </div>
      
      {error && (
        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}
      
      {result && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-medium mb-3">Result</h2>
          <pre className="bg-gray-50 p-4 rounded-md overflow-x-auto text-sm">
            {result}
          </pre>
        </div>
      )}
    </div>
  );
} 