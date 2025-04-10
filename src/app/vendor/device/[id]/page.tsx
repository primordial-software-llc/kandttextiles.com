"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getTrackingDB } from '../../../../utils/tracking-db';
import { TrackingDevice } from '../../../../types/vendor';
import Image from 'next/image';
import { TrackingPoint } from '@/db';
import { getLocationString } from '@/utils/airport-city';

export default function DeviceDetail() {
  // Use the useParams hook instead of the params prop
  const params = useParams();
  // Safely access id from params - this is already the base64 encoded device data
  const paramsDeviceId = params?.id as string;
  
  const [device, setDevice] = useState<TrackingDevice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [trackingData, setTrackingData] = useState<TrackingPoint[]>([]);
  const [trackingLoading, setTrackingLoading] = useState(false);
  const [trackingError, setTrackingError] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string>('gps'); // Default filter to GPS
  const router = useRouter();
  
  useEffect(() => {
    const loadDevice = async () => {
      if (!paramsDeviceId) {
        return;
      }
      
      try {
        setTrackingLoading(true);
        setTrackingError('');    
        setLoading(true);
        const db = getTrackingDB();
        await db.init();
        const foundDevice = await db.getDevice(paramsDeviceId);
        console.log('Device from IndexedDB:', foundDevice);
        
        if (foundDevice) {
          // Create minimal device object with just id and content
          const minimalDevice = {
            id: foundDevice.id,
            content: foundDevice.content
          };
          
          // Encode the minimal device object to base64 with pretty printing (spaces)
          const jsonData = JSON.stringify(minimalDevice, null, 2)
            .replace(/\n/g, ' ')
            .replace(/\s+/g, ' ');

          // Standard base64 encoding
          let base64Data = btoa(jsonData);
          
          // Don't make any URL-safe replacements to preserve the exact same encoding
          // The add page already handles decoding correctly
          
          console.log('Encoded minimal device data:', base64Data);
          
          // Send the encoded data to the tracking API
          try {
            const response = await fetch(`/api/tracking/data`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                encodedData: base64Data
              }),
            });
            
            if (!response.ok) {
              const errorData = await response.json();
              console.error('Tracking API error:', errorData);
            } else {
              console.log('Successfully sent to tracking API');
              const data = await response.json();
              console.log('Tracking data received:', data);
              // Extract tracking array from the wrapped response
              setTrackingData(Array.isArray(data.tracking) ? data.tracking : []);
            }
          } catch (apiError) {
            console.error('Error sending to tracking API:', apiError);
          }
          
          setDevice(foundDevice);
        } else {
          setError('Device not found');
        }
      } catch (error) {
        console.error('Error loading device:', error);
        setError('Failed to load device');
        console.error('Error fetching tracking data:', error);
        setTrackingError(error instanceof Error ? error.message : 'Failed to fetch tracking data');  
        // Reset tracking data to empty array on error
        setTrackingData([]);
      } finally {
        setLoading(false);
        setTrackingLoading(false);
      }
    };

    loadDevice();
  }, [paramsDeviceId]);


  const handleBack = () => {
    router.back();
  };

  const handleDelete = async () => {
    if (!device) return;
    
    if (window.confirm('Are you sure you want to remove this tracking device? This action cannot be undone.')) {
      try {
        const db = getTrackingDB();
        await db.deleteDevice(device.id);
        router.push('/vendor/dashboard');
      } catch (error) {
        console.error('Error deleting device:', error);
        alert('Failed to delete device');
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1B2845]"></div>
      </div>
    );
  }

  if (error || !device) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Error</h2>
        <p className="text-gray-600 mb-6">{error || 'Device not found'}</p>
        <button
          onClick={handleBack}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#34495e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Return to Dashboard
        </button>
      </div>
    );
  }

  // Get a title based on device id if name is not available
  const deviceTitle = device.name || device.id.split('-').map(part => 
    part.charAt(0).toUpperCase() + part.slice(1)
  ).join(' ');

  const getStatusColor = (status: string | undefined) => {
    if (!status) return 'bg-green-100 text-green-800'; // Default to active
    
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'maintenance':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Render content based on contentType
  const renderContent = () => {
    if (!device.contentType) {
      // If no content type specified, try to determine from content
      if (device.content.startsWith('<iframe')) {
        device.contentType = 'iframe';
      } else if (device.content.startsWith('http')) {
        device.contentType = 'link';
      } else if (device.content.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
        device.contentType = 'image';
      } else {
        device.contentType = 'link'; // Default
      }
    }
    
    switch (device.contentType) {
      case 'iframe':
        return (
          <div className="w-full h-full overflow-hidden" dangerouslySetInnerHTML={{ __html: device.content }} />
        );
      case 'link':
        // Instead of linking out, display the URL in an iframe
        return (
          <div className="w-full h-full flex flex-col overflow-hidden">
            <div className="w-full h-full overflow-hidden">
              <iframe
                src={device.content}
                title={deviceTitle}
                className="w-full h-full border-0" 
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Fallback link in case the iframe doesn't work */}
            <div className="mt-2 text-center">
              <p className="text-xs text-gray-500 mb-1">If the content doesn't load properly, you can also:</p>
              <a 
                href={device.content} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm px-3 py-1 bg-[#1B2845] text-white rounded hover:bg-[#34495e] transition-colors"
              >
                Open in new tab
                <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        );
      case 'image':
        return (
          <div className="w-full flex justify-center">
            <Image 
              src={device.content} 
              alt={deviceTitle}
              width={800}
              height={600}
              className="max-w-full h-auto rounded shadow-lg"
            />
          </div>
        );
      case 'script':
        return (
          <div className="w-full">
            <p className="mb-4 text-gray-600 text-center">
              This tracking device uses a custom script that may take a moment to load.
            </p>
            <div id="script-container" className="w-full min-h-[400px] bg-gray-50 rounded-lg p-4 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1B2845]"></div>
            </div>
            <script dangerouslySetInnerHTML={{ __html: device.content }} />
          </div>
        );
      default:
        return (
          <div className="text-center p-6 text-gray-600">
            No preview available for this content type.
          </div>
        );
    }
  };

  return (
    <div className="max-w-[100vw] px-4 overflow-x-hidden">
      {/* Title Header with Device Info and Navigation Buttons */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
        <div className="p-6 pb-4">
          <div className="flex items-center mb-4">
            <button
              onClick={handleBack}
              className="mr-auto inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
            
            <h1 className="text-2xl font-bold text-[#1B2845] text-center mx-4">{deviceTitle}</h1>
            
            <button
              onClick={handleDelete}
              className="ml-auto inline-flex items-center px-3 py-2 border border-red-300 shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-lg font-medium text-[#1B2845]">Tracking for {deviceTitle}</h2>
          </div>
          <div className="px-6 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Device ID</h3>
                <p className="mt-1 text-sm text-gray-900">{device.id}</p>
              </div>
              
              {device.type && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Device Type</h3>
                  <p className="mt-1 text-sm text-gray-900">{device.type}</p>
                </div>
              )}
              
              {device.status && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Status</h3>
                  <p className="mt-1 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
                      {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                    </span>
                  </p>
                </div>
              )}
              
              {device.location && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Location</h3>
                  <p className="mt-1 text-sm text-gray-900">{device.location}</p>
                </div>
              )}
              
              {device.addedOn && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Added On</h3>
                  <p className="mt-1 text-sm text-gray-900">{new Date(device.addedOn).toLocaleString()}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Two column layout for Map and History */}
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Tracking history side - moved to top */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-full flex flex-col">
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-medium text-[#1B2845]">Tracking History</h2>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                selectedFilter === 'gps' ? 'bg-green-100 text-green-800' : 
                selectedFilter === 'wifi' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {selectedFilter === 'all' ? 'All Types' : `${selectedFilter.toUpperCase()}`}
              </span>
            </div>
            
            <div className="flex-1 overflow-auto">
              {/* Filter controls */}
              <div className="px-3 py-2 bg-gray-50 border-b border-gray-200 flex items-center flex-wrap gap-2">
                <span className="text-xs font-medium text-gray-700 mr-1">Filter:</span>
                <div className="flex flex-wrap gap-1">
                  <button
                    onClick={() => setSelectedFilter('all')}
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      selectedFilter === 'all' 
                        ? 'bg-[#1B2845] text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    All
                  </button>
                  {Array.from(new Set(trackingData.map(point => point.type))).map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedFilter(type)}
                      className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        selectedFilter === type
                          ? type === 'gps' 
                            ? 'bg-green-600 text-white' 
                            : type === 'wifi'
                              ? 'bg-blue-600 text-white'
                              : 'bg-[#1B2845] text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      {type.toUpperCase()}
                    </button>
                  ))}
                </div>
                <div className="ml-auto text-xs text-gray-500">
                  {trackingData.filter(point => selectedFilter === 'all' ? true : point.type === selectedFilter).length} of {trackingData.length}
                </div>
              </div>
              
              {/* Tracking data table */}
              <div className="overflow-y-auto max-h-[465px]">
                {trackingLoading ? (
                  <div className="flex justify-center items-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#1B2845]"></div>
                  </div>
                ) : trackingError ? (
                  <div className="text-center p-4">
                    <p className="text-red-600 text-sm">Error loading data</p>
                  </div>
                ) : trackingData.length === 0 ? (
                  <div className="text-center p-4 text-sm text-gray-600">
                    <p>No tracking data available</p>
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date/Time
                        </th>
                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Location
                        </th>
                        <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Details
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {trackingData
                        .filter(point => selectedFilter === 'all' ? true : point.type === selectedFilter)
                        .slice(0, 20) // Limit to first 20 records for performance
                        .map((point) => (
                          <tr key={point.id} className="hover:bg-gray-50">
                            <td className="px-3 py-2 text-xs text-gray-900">
                              <div>{point.formatted_date || new Date(point.date_recorded).toLocaleDateString()}</div>
                              <div className="text-gray-500">{point.formatted_time || point.time_recorded}</div>
                            </td>
                            <td className="px-3 py-2 text-xs text-gray-900 truncate max-w-[120px]">
                              {getLocationString(point.latitude, point.longitude)}
                            </td>
                            <td className="px-3 py-2 text-xs text-gray-900">
                              <div className="flex flex-col gap-1">
                                <span className={`px-1.5 inline-flex text-xs leading-4 font-semibold rounded-full ${
                                  point.type === 'gps' ? 'bg-green-100 text-green-800' : 
                                  point.type === 'wifi' ? 'bg-blue-100 text-blue-800' : 
                                  'bg-gray-100 text-gray-800'
                                }`}>
                                  {point.type}
                                </span>
                                <div className="flex items-center">
                                  <span className="text-xs">{point.speed} MPH</span>
                                  <span className="mx-1">|</span>
                                  <span className="text-xs">{point.battery_level}%</span>
                                </div>
                                <a 
                                  href={point.google_maps_link || `http://maps.google.com/maps?q=${point.latitude},${point.longitude}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-600 hover:text-blue-900 text-xs"
                                >
                                  View on map
                                </a>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Map/Visualization side - moved to bottom */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
            <div className="border-b border-gray-200 px-6 py-4">
              <h2 className="text-lg font-medium text-[#1B2845]">Tracking Map</h2>
            </div>
            <div className="p-2 h-[500px] overflow-hidden">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer disclaimer */}
      <div className="bg-gray-50 rounded-lg px-6 py-3 text-xs text-gray-500 mb-6">
        <p>This tracking visualization is for authorized vendors only. Do not share this view publicly.</p>
      </div>
    </div>
  );
} 