"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { getTrackingDB } from '@/utils/tracking-db';
import { TrackingDevice } from '@/types/vendor';

export default function AddTrackingDevice() {
  // Get params through the useParams hook
  const params = useParams();
  const encodedData = params?.data as string;
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Processing your tracking device...');
  const [device, setDevice] = useState<Partial<TrackingDevice> | null>(null);
  const router = useRouter();

  useEffect(() => {
    const addDevice = async () => {
      if (!encodedData) {
        setStatus('error');
        setMessage('No tracking code provided');
        return;
      }
    
      try {
        // Base64 decoding can fail with URL-encoded characters
        let decodedData;
        try {
          // First, ensure we handle URL encoding if present
          const cleanedData = decodeURIComponent(encodedData);
          // Replace URL-safe characters if needed
          const base64Safe = cleanedData.replace(/-/g, '+').replace(/_/g, '/');
          // Add padding if needed
          const paddedData = base64Safe.padEnd(
            base64Safe.length + (4 - (base64Safe.length % 4 || 4)) % 4, 
            '='
          );
          // Now try to decode
          decodedData = atob(paddedData);
        } catch (decodeError) {
          console.error('Error decoding base64:', decodeError);
          throw new Error('Invalid base64 encoding');
        }
        
        // Parse the JSON data
        try {
          const deviceData = JSON.parse(decodedData) as Partial<TrackingDevice>;
          console.log("Parsed device data:", deviceData);
          
          // Support both minimal format (just id and content) and full format
          if (deviceData.id && deviceData.content) {
            // Determine content type if not specified
            if (!deviceData.contentType) {
              const content = deviceData.content;
              // Auto-detect content type based on content
              if (content.startsWith('<iframe')) {
                deviceData.contentType = 'iframe';
              } else if (content.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
                deviceData.contentType = 'image';
              } else if (content.startsWith('http')) {
                deviceData.contentType = 'link';
              } else {
                deviceData.contentType = 'link'; // Default
              }
            }
            
            // Set defaults for missing fields
            if (!deviceData.name) {
              const idParts = deviceData.id.split('-');
              const formattedId = idParts.map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');
              deviceData.name = formattedId;
            }
            
            if (!deviceData.description) {
              deviceData.description = `Tracking for ${deviceData.name}`;
            }
            
            if (!deviceData.type) {
              // Try to guess type from id or default to GPS
              const lowerCaseId = deviceData.id.toLowerCase();
              if (lowerCaseId.includes('environment') || lowerCaseId.includes('temp') || lowerCaseId.includes('humid')) {
                deviceData.type = 'Environmental';
              } else if (lowerCaseId.includes('production') || lowerCaseId.includes('factory')) {
                deviceData.type = 'Industrial';
              } else if (lowerCaseId.includes('dashboard') || lowerCaseId.includes('overview')) {
                deviceData.type = 'Dashboard';
              } else {
                deviceData.type = 'GPS';
              }
            }
            
            // Save to IndexedDB
            const db = getTrackingDB();
            await db.init();
            await db.addDevice(deviceData);
            
            setDevice(deviceData);
            setStatus('success');
            setMessage('Tracking device added successfully!');
          } else {
            throw new Error('Invalid device data - missing required id or content');
          }
        } catch (e) {
          console.error('Error parsing JSON:', e);
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Error adding tracking device:', error);
        setStatus('error');
        setMessage(`Failed to add tracking device: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    addDevice();
  }, [encodedData]);

  // Redirect to dashboard after a delay on success
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => {
        router.push('/vendor/dashboard');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [status, router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#1B2845]">
          Tracking Device
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {status === 'loading' ? 'Processing your tracking device...' : ''}
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {status === 'loading' && (
            <div className="flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1B2845] mb-4"></div>
              <p className="text-gray-600">Processing your tracking device...</p>
            </div>
          )}
          
          {status === 'success' && device && (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Device Added Successfully</h3>
              <div className="mt-4 bg-gray-50 p-4 rounded-md text-left">
                <p className="text-sm font-medium text-gray-500">Device ID</p>
                <p className="mt-1 text-sm text-gray-900">{device.id}</p>
                
                {device.name && (
                  <>
                    <p className="mt-4 text-sm font-medium text-gray-500">Name</p>
                    <p className="mt-1 text-sm text-gray-900">{device.name}</p>
                  </>
                )}
                
                {device.type && (
                  <>
                    <p className="mt-4 text-sm font-medium text-gray-500">Type</p>
                    <p className="mt-1 text-sm text-gray-900">{device.type}</p>
                  </>
                )}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Redirecting to dashboard in a few seconds...
              </p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 mb-4">
                <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Error Adding Device</h3>
              <p className="mt-2 text-sm text-gray-600">{message}</p>
              <div className="mt-6">
                <button
                  onClick={() => router.push('/vendor/dashboard')}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#2d3a4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Go to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 