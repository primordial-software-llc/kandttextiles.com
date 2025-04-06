"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getTrackingDB } from '../../../../utils/tracking-db';
import { TrackingDevice } from '../../../../types/vendor';
import Image from 'next/image';

export default function DeviceDetail() {
  // Use the useParams hook instead of the params prop
  const params = useParams();
  // Safely access id from params
  const deviceId = params?.id as string;
  
  const [device, setDevice] = useState<TrackingDevice | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loadDevice = async () => {
      if (!deviceId) {
        setError('No device ID provided');
        setLoading(false);
        return;
      }
      
      try {
        const db = getTrackingDB();
        await db.init();
        const foundDevice = await db.getDevice(deviceId);
        
        if (foundDevice) {
          setDevice(foundDevice);
        } else {
          setError('Device not found');
        }
      } catch (error) {
        console.error('Error loading device:', error);
        setError('Failed to load device');
      } finally {
        setLoading(false);
      }
    };

    loadDevice();
  }, [deviceId]);

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
          <div className="w-full h-[500px] overflow-hidden" dangerouslySetInnerHTML={{ __html: device.content }} />
        );
      case 'link':
        // Instead of linking out, display the URL in an iframe
        return (
          <div className="w-full h-[700px] flex flex-col overflow-hidden">
            <div className="w-full h-full overflow-hidden">
              <iframe
                src={device.content}
                title={deviceTitle}
                className="w-full h-[calc(100%+60px)] border-0 -mt-[60px]" /* 60px is the estimated height to trim from the top */
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
    <div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={handleBack}
          className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
        
        <button
          onClick={handleDelete}
          className="inline-flex items-center px-3 py-2 border border-red-300 shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Remove
        </button>
      </div>

      {/* Desktop: side-by-side layout, Mobile: stacked layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Device Info Panel */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden lg:w-1/3">
          <div className="p-6">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <h1 className="text-2xl font-bold text-[#1B2845] mb-2 sm:mb-0 flex-1">{deviceTitle}</h1>
              {device.status && (
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
                  {device.status.charAt(0).toUpperCase() + device.status.slice(1)}
                </span>
              )}
            </div>
            
            {device.description && (
              <p className="text-gray-600 mb-6">{device.description}</p>
            )}
            
            <div className="grid grid-cols-1 gap-4 mb-6">
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

        {/* Tracking Visualization Panel */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden lg:w-2/3">
          <div className="border-b border-gray-200 px-6 py-4">
            <h2 className="text-lg font-medium text-[#1B2845]">Tracking Visualization</h2>
          </div>
          
          <div className="p-6">
            {/* The tracking content wrapper with K&T Textiles branding */}
            <div className="border border-gray-200 rounded-lg">
              <div className="bg-[#1B2845] text-white px-4 py-3 flex items-center">
                <div className="font-bold">K&T Textiles Tracking</div>
                <div className="ml-auto text-sm text-gray-300">Live Data</div>
              </div>
              
              <div className="bg-white p-2">
                {renderContent()}
              </div>
            </div>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>This tracking visualization is for authorized vendors only. Do not share this view publicly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 