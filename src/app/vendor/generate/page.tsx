"use client";

import { useState } from 'react';
import { TrackingDevice } from '@/types/vendor';

export default function GenerateDeeplink() {
  const [id, setId] = useState('shipment-name-and-date');
  const [content, setContent] = useState('https://www.kandttextiles.com/deep-link-url');
  const [generatedLink, setGeneratedLink] = useState('');
  const [copied, setCopied] = useState(false);

  const generateLink = () => {
    // Validate required fields
    if (!id || !content) {
      alert('Please provide both ID and content URL');
      return;
    }

    try {
      // Create minimal device object
      const deviceData = { id, content };
      
      // Convert to JSON and then to URL-safe base64
      const jsonData = JSON.stringify(deviceData);
      let base64Data = btoa(jsonData);
      
      // Make base64 URL safe
      base64Data = base64Data.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      
      // Generate the link using current domain with query parameter
      const host = window.location.origin;
      const link = `${host}/vendor/add?code=${encodeURIComponent(base64Data)}`;
      
      setGeneratedLink(link);
    } catch (error) {
      console.error('Error generating link:', error);
      alert('Error generating link. Check console for details.');
    }
  };

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(generatedLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      alert('Failed to copy to clipboard');
    }
  };

  const copyJustCode = () => {
    try {
      // Create minimal device object
      const deviceData = { id, content };
      
      // Convert to JSON and then to URL-safe base64
      const jsonData = JSON.stringify(deviceData);
      let base64Data = btoa(jsonData);
      
      // Make base64 URL safe
      base64Data = base64Data.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
      
      navigator.clipboard.writeText(base64Data);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      alert('Failed to copy to clipboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-[#1B2845] mb-6">Generate Tracking Deeplink</h1>
          
          <div className="mb-8">
            <p className="text-sm text-red-600 mb-4">
              <strong>ADMIN TOOL:</strong> Generate tracking deeplinks for vendors.
            </p>
          </div>
          
          <div className="space-y-6">
            <div>
              <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
                Device ID *
              </label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="gloves-2025-march"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                A unique identifier for this tracking device.
              </p>
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content URL/Embed *
              </label>
              <input
                type="text"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://app.tracki.com/public-map?token=yourtoken"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                The tracking URL or embed code to display.
              </p>
            </div>
            
            <div className="pt-4">
              <button
                onClick={generateLink}
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#2d3a4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Generate Deeplink
              </button>
            </div>
          </div>
          
          {generatedLink && (
            <div className="mt-8 p-4 bg-gray-50 rounded-md">
              <h2 className="text-lg font-medium text-[#1B2845] mb-2">Generated Deeplink</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full URL for Vendor
                </label>
                <div className="flex">
                  <input
                    type="text"
                    readOnly
                    value={generatedLink}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-100 focus:outline-none font-mono text-sm"
                  />
                  <button
                    onClick={copyToClipboard}
                    className="px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#2d3a4f] focus:outline-none"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <p className="mt-1 text-xs text-gray-500">
                  Send this full URL to vendors to add this tracking device to their dashboard.
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Code Only (for direct entry)
                </label>
                <button
                  onClick={copyJustCode}
                  className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#2d3a4f] focus:outline-none"
                >
                  Copy Code Only
                </button>
                <p className="mt-1 text-xs text-gray-500">
                  Vendors can also enter this code directly in their Add Device dialog.
                </p>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 text-blue-700 rounded-md text-sm">
                <p><strong>Note:</strong> The generated deeplink works with the most minimal format possible - just an ID and content URL.</p>
                <p className="mt-2">All other fields (name, description, type, etc.) will be automatically generated based on the ID.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 