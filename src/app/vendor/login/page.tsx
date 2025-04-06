"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { getTrackingDB } from '../../../utils/tracking-db';

export default function VendorLogin() {
  const [deeplink, setDeeplink] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Check for existing devices on component mount
  useEffect(() => {
    const checkExistingDevices = async () => {
      try {
        const db = getTrackingDB();
        await db.init();
        const devices = await db.getAllDevices();
        
        // If there are existing devices, redirect to dashboard
        if (devices && devices.length > 0) {
          router.push('/vendor/dashboard');
        } else {
          setLoading(false);
        }
      } catch (err) {
        console.error('Error checking for existing devices:', err);
        setLoading(false);
      }
    };

    checkExistingDevices();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (!deeplink.trim()) {
        setError('Please enter a tracking device code or link');
        setLoading(false);
        return;
      }

      // Check if it's a URL
      const isUrl = deeplink.startsWith('http://') || deeplink.startsWith('https://');
      
      if (isUrl) {
        // Redirect to the URL
        window.location.href = deeplink;
      } else {
        // Assume it's a direct base64 encoded string
        router.push(`/vendor/add?code=${encodeURIComponent(deeplink)}`);
      }
    } catch (err) {
      setError('An error occurred. Please check your tracking code and try again.');
      console.error(err);
      setLoading(false);
    }
  };

  // Show loading state while checking for existing devices
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1B2845]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-[#1B2845]">
          Vendor Tracking Portal
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Access your shipment tracking visualizations
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="mb-6 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
              <svg className="w-8 h-8 text-[#1B2845]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <p className="text-gray-600 mb-4">
              Enter your tracking code or paste a tracking link provided by K&T Textiles to access your shipment tracking data.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            
            <div>
              <label htmlFor="deeplink" className="block text-sm font-medium text-gray-700">
                Tracking Code or Link
              </label>
              <div className="mt-1">
                <input
                  id="deeplink"
                  name="deeplink"
                  type="text"
                  value={deeplink}
                  onChange={(e) => setDeeplink(e.target.value)}
                  placeholder="Paste your tracking code or link here"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1B2845] hover:bg-[#2d3a4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Access Tracking'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Already have tracking devices? {' '}
              <Link href="/vendor/dashboard" className="font-medium text-[#1B2845] hover:text-blue-500">
                Go to Dashboard
              </Link>
            </p>
          </div>
        </div>
        
        <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center mb-4">
            <h3 className="text-lg font-medium text-[#1B2845]">
              Custom Logistics Tracking Software
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              K&T Textiles provides vendors with real-time tracking and monitoring solutions
            </p>
          </div>
          
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <div className="mt-1 text-green-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">No Login Required:</span> Use secure tracking codes provided by your K&T representative
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 text-green-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">Real-Time Tracking:</span> Monitor shipments across global supply chains with precision
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="mt-1 text-green-600">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-600">
                <span className="font-medium text-gray-900">Secure Access:</span> Your tracking devices are stored securely on your local device
              </p>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600">
              Need a tracking code? Contact your K&T Textiles representative or{' '}
              <Link href="/#contact" className="font-medium text-[#1B2845] hover:text-blue-500">
                request access
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 