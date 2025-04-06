"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TrackingDevice } from '../../../types/vendor';
import { getTrackingDB } from '../../../utils/tracking-db';

export default function VendorDashboard() {
  const [devices, setDevices] = useState<TrackingDevice[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [deeplink, setDeeplink] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loadDevices = async () => {
      try {
        const db = getTrackingDB();
        await db.init();
        const allDevices = await db.getAllDevices();
        setDevices(allDevices);
      } catch (error) {
        console.error('Error loading devices:', error);
      } finally {
        setLoading(false);
      }
    };

    loadDevices();
  }, []);

  const handleAddDeeplink = async () => {
    if (!deeplink.trim()) return;
    
    try {
      // Check if it's a URL
      const isUrl = deeplink.startsWith('http://') || deeplink.startsWith('https://');
      
      if (isUrl) {
        // Redirect to the add page
        window.location.href = deeplink;
      } else {
        // Assume it's a direct base64 encoded string
        window.location.href = `/vendor/add/${deeplink}`;
      }
    } catch (error) {
      console.error('Error adding deeplink:', error);
    }
  };

  const navigateToDevice = (deviceId: string) => {
    router.push(`/vendor/device/${deviceId}`);
  };

  const getStatusColor = (status: string | undefined) => {
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1B2845]"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-[#1B2845]">Tracking Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome to your vendor tracking dashboard. View and manage all your tracking devices.
          </p>
        </div>
        <button
          onClick={() => setShowAddDialog(true)}
          className="bg-[#1B2845] text-white px-4 py-2 rounded-lg hover:bg-[#2d3a4f] transition-colors flex items-center"
        >
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add Device
        </button>
      </div>

      {devices.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="mb-4">
            <svg className="w-12 h-12 text-gray-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">No Tracking Devices</h2>
          <p className="text-gray-600 mb-6">
            You don't have any tracking devices added yet. Use the Add Device button to add a device using a secure deeplink provided by K&T Textiles.
          </p>
          <button
            onClick={() => setShowAddDialog(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#2d3a4f] focus:outline-none"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add Your First Device
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {devices.map((device) => (
            <div 
              key={device.id} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 h-full cursor-pointer"
              onClick={() => navigateToDevice(device.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-[#1B2845] break-words flex-1">
                  {device.name}
                </h2>
                <span className={`ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(device.status)}`}>
                  {device.status ? device.status.charAt(0).toUpperCase() + device.status.slice(1) : 'Active'}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 text-sm">
                {device.description}
              </p>
              
              <div className="mb-2 text-xs font-medium text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                {device.type}
              </div>
              
              {device.location && (
                <div className="mb-2 text-xs font-medium text-gray-500 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {device.location}
                </div>
              )}
              
              <div className="text-xs font-medium text-gray-500 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Last updated: {device.lastUpdated ? new Date(device.lastUpdated).toLocaleString() : 'Unknown'}
              </div>
              
              <div className="mt-6 flex justify-end">
                <span className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium text-[#1B2845] bg-blue-50">
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Device Dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-medium text-[#1B2845]">Add Tracking Device</h3>
              <button 
                onClick={() => setShowAddDialog(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              Enter the tracking device deeplink provided by K&T Textiles. This link securely contains all the information needed to access your tracking data.
            </p>
            
            <div className="mb-4">
              <label htmlFor="deeplink" className="block text-sm font-medium text-gray-700 mb-1">
                Deeplink or Code
              </label>
              <input
                type="text"
                id="deeplink"
                value={deeplink}
                onChange={(e) => setDeeplink(e.target.value)}
                placeholder="Paste tracking deeplink or code here"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowAddDialog(false)}
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDeeplink}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#2d3a4f] focus:outline-none"
              >
                Add Device
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 