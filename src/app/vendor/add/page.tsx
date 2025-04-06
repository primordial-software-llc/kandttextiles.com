"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getTrackingDB } from '@/utils/tracking-db';
import { TrackingDevice } from '@/types/vendor';

export default function AddTrackingDevice() {
  const [device, setDevice] = useState<Partial<TrackingDevice> | null>(null);
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Check for code in search params
  useEffect(() => {
    const codeParam = searchParams.get('code');
    if (codeParam) {
      setCode(codeParam);
      handleAddDevice(codeParam);
    }
  }, [searchParams]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code) {
      setStatus('error');
      setMessage('Please enter a tracking code');
      return;
    }
    handleAddDevice(code);
  };

  const handleAddDevice = async (codeToProcess: string) => {
    setStatus('loading');
    setMessage('Processing your tracking device...');

    try {
      // Process base64 code
      let decodedData;
      try {
        // Replace URL-safe characters if needed
        const base64Safe = codeToProcess.replace(/-/g, '+').replace(/_/g, '/');
        // Add padding if needed
        const paddedData = base64Safe.padEnd(
          base64Safe.length + (4 - (base64Safe.length % 4 || 4)) % 4, 
          '='
        );
        // Decode
        decodedData = atob(paddedData);
      } catch (decodeError) {
        console.error('Error decoding base64:', decodeError);
        throw new Error('Invalid tracking code format');
      }
      
      // Parse the JSON data
      try {
        const deviceData = JSON.parse(decodedData) as Partial<TrackingDevice>;
        console.log("Parsed device data:", deviceData);
        
        // Validate minimal required fields
        if (!deviceData.id || !deviceData.content) {
          throw new Error('Invalid device data - missing required ID or content');
        }
        
        // Save to IndexedDB
        const db = getTrackingDB();
        await db.init();
        await db.addDevice(deviceData);
        
        setDevice(deviceData);
        setStatus('success');
        setMessage('Tracking device added successfully!');
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
          Add Tracking Device
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Enter your tracking code to add a device to your dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {status === 'idle' && (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                  Tracking Code
                </label>
                <div className="mt-1">
                  <input
                    id="code"
                    name="code"
                    type="text"
                    value={code}
                    onChange={handleCodeChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Paste your tracking code here"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#2d3a4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Device
                </button>
              </div>
            </form>
          )}

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
                  onClick={() => setStatus('idle')}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#2d3a4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 