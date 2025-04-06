"use client";

import { TrackingDevice } from '@/types/vendor';

const DB_NAME = 'kt-tracking-db';
const STORE_NAME = 'tracking-devices';
const DB_VERSION = 1;

// Default images by type
const DEFAULT_IMAGES = {
  'GPS': '/images/gps-tracker.jpg',
  'Environmental': '/images/environmental-tracker.jpg',
  'Industrial': '/images/industrial-tracker.jpg',
  'Dashboard': '/images/dashboard-tracker.jpg',
  'default': '/images/default-tracker.jpg'
};

export class TrackingDB {
  private db: IDBDatabase | null = null;
  
  // Initialize the database
  async init(): Promise<void> {
    // If already initialized, return immediately
    if (this.db) return Promise.resolve();
    
    return new Promise((resolve, reject) => {
      try {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        
        request.onerror = (event) => {
          console.error('Error opening database:', event);
          reject(new Error('Could not open IndexedDB'));
        };
        
        request.onsuccess = (event) => {
          this.db = (event.target as IDBOpenDBRequest).result;
          resolve();
        };
        
        request.onupgradeneeded = (event) => {
          const db = (event.target as IDBOpenDBRequest).result;
          
          // Create object store for tracking devices
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            const store = db.createObjectStore(STORE_NAME, { keyPath: 'id' });
            store.createIndex('contentType', 'contentType', { unique: false });
            store.createIndex('type', 'type', { unique: false });
            store.createIndex('status', 'status', { unique: false });
          }
        };
      } catch (error) {
        console.error('IndexedDB initialization error:', error);
        reject(new Error('Failed to initialize IndexedDB'));
      }
    });
  }
  
  // Add a new tracking device from a deeplink
  async addDevice(device: Partial<TrackingDevice>): Promise<string> {
    try {
      if (!this.db) {
        await this.init();
      }
      
      // Double check we have required fields
      if (!device.id || !device.content) {
        throw new Error('Device must have at least id and content');
      }
      
      // Ensure required fields exist and add defaults for missing fields
      const completeDevice: TrackingDevice = {
        id: device.id,
        name: device.name || this.generateNameFromId(device.id),
        description: device.description || `Tracking for ${device.name || this.generateNameFromId(device.id)}`,
        type: device.type || this.guessTypeFromId(device.id),
        contentType: device.contentType || this.guessContentTypeFromContent(device.content),
        content: device.content,
        status: device.status || 'active',
        lastUpdated: device.lastUpdated || new Date().toISOString(),
        location: device.location,
        imageUrl: device.imageUrl || DEFAULT_IMAGES[device.type as keyof typeof DEFAULT_IMAGES] || DEFAULT_IMAGES.default,
        addedOn: device.addedOn || new Date().toISOString()
      };
      
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
          const store = transaction.objectStore(STORE_NAME);
          
          // Check if device already exists
          const getRequest = store.get(completeDevice.id);
          
          getRequest.onsuccess = () => {
            if (getRequest.result) {
              // Device already exists, update it
              const updateRequest = store.put(completeDevice);
              
              updateRequest.onsuccess = () => {
                resolve(completeDevice.id);
              };
              
              updateRequest.onerror = (event) => {
                reject(new Error('Failed to update device'));
              };
            } else {
              // Device doesn't exist, add it
              const addRequest = store.add(completeDevice);
              
              addRequest.onsuccess = () => {
                resolve(completeDevice.id);
              };
              
              addRequest.onerror = (event) => {
                reject(new Error('Failed to add device'));
              };
            }
          };
          
          getRequest.onerror = (event) => {
            reject(new Error('Failed to check if device exists'));
          };
          
          transaction.onerror = (event) => {
            reject(new Error('Transaction failed'));
          };
        } catch (error) {
          console.error('Error in transaction:', error);
          reject(new Error('Database operation failed'));
        }
      });
    } catch (error) {
      console.error('addDevice error:', error);
      return Promise.reject(error);
    }
  }
  
  // Get all tracking devices
  async getAllDevices(): Promise<TrackingDevice[]> {
    try {
      if (!this.db) {
        await this.init();
      }
      
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db!.transaction([STORE_NAME], 'readonly');
          const store = transaction.objectStore(STORE_NAME);
          const request = store.getAll();
          
          request.onsuccess = () => {
            resolve(request.result || []);
          };
          
          request.onerror = (event) => {
            reject(new Error('Failed to get devices'));
          };
        } catch (error) {
          console.error('Error getting all devices:', error);
          reject(new Error('Database operation failed'));
        }
      });
    } catch (error) {
      console.error('getAllDevices error:', error);
      return Promise.reject(error);
    }
  }
  
  // Get a specific device by ID
  async getDevice(id: string): Promise<TrackingDevice | null> {
    try {
      if (!this.db) {
        await this.init();
      }
      
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db!.transaction([STORE_NAME], 'readonly');
          const store = transaction.objectStore(STORE_NAME);
          const request = store.get(id);
          
          request.onsuccess = () => {
            resolve(request.result || null);
          };
          
          request.onerror = (event) => {
            reject(new Error('Failed to get device'));
          };
        } catch (error) {
          console.error('Error getting device:', error);
          reject(new Error('Database operation failed'));
        }
      });
    } catch (error) {
      console.error('getDevice error:', error);
      return Promise.reject(error);
    }
  }
  
  // Delete a device
  async deleteDevice(id: string): Promise<void> {
    try {
      if (!this.db) {
        await this.init();
      }
      
      return new Promise((resolve, reject) => {
        try {
          const transaction = this.db!.transaction([STORE_NAME], 'readwrite');
          const store = transaction.objectStore(STORE_NAME);
          const request = store.delete(id);
          
          request.onsuccess = () => {
            resolve();
          };
          
          request.onerror = (event) => {
            reject(new Error('Failed to delete device'));
          };
        } catch (error) {
          console.error('Error deleting device:', error);
          reject(new Error('Database operation failed'));
        }
      });
    } catch (error) {
      console.error('deleteDevice error:', error);
      return Promise.reject(error);
    }
  }
  
  // Helper methods
  private generateNameFromId(id: string): string {
    return id.split('-').map(part => 
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join(' ');
  }
  
  private guessTypeFromId(id: string): string {
    const lowerCaseId = id.toLowerCase();
    if (lowerCaseId.includes('environment') || lowerCaseId.includes('temp') || lowerCaseId.includes('humid')) {
      return 'Environmental';
    } else if (lowerCaseId.includes('production') || lowerCaseId.includes('factory')) {
      return 'Industrial';
    } else if (lowerCaseId.includes('dashboard') || lowerCaseId.includes('overview')) {
      return 'Dashboard';
    } else {
      return 'GPS';
    }
  }
  
  private guessContentTypeFromContent(content: string): 'iframe' | 'link' | 'image' | 'script' {
    if (content.startsWith('<iframe')) {
      return 'iframe';
    } else if (content.match(/\.(png|jpg|jpeg|gif|webp)$/i)) {
      return 'image';
    } else if (content.startsWith('http')) {
      return 'link';
    } else {
      return 'link'; // Default
    }
  }
}

// Singleton instance
let trackingDB: TrackingDB | null = null;

export const getTrackingDB = (): TrackingDB => {
  if (!trackingDB) {
    trackingDB = new TrackingDB();
  }
  return trackingDB;
};

// Parse a deeplink to extract device data
export const parseTrackingDeeplink = (url: string): Partial<TrackingDevice> | null => {
  try {
    // Example format: https://track.kandttextiles.com/?data=BASE64_ENCODED_DATA
    const urlObj = new URL(url);
    
    if (!urlObj.searchParams.has('data')) {
      return null;
    }
    
    const encodedData = urlObj.searchParams.get('data');
    if (!encodedData) return null;
    
    try {
      // Decode the base64 data - handle URL safe base64
      const base64Safe = encodedData.replace(/-/g, '+').replace(/_/g, '/');
      const paddedData = base64Safe.padEnd(
        base64Safe.length + (4 - (base64Safe.length % 4 || 4)) % 4, 
        '='
      );
      const jsonData = atob(paddedData);
      const deviceData = JSON.parse(jsonData) as Partial<TrackingDevice>;
      
      // Minimal requirement: id and content
      if (!deviceData.id || !deviceData.content) {
        return null;
      }
      
      return deviceData;
    } catch (e) {
      console.error('Base64 decoding or JSON parsing error:', e);
      return null;
    }
  } catch (error) {
    console.error('Error parsing tracking deeplink:', error);
    return null;
  }
}; 