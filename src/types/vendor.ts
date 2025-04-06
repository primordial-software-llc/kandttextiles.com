export type DeviceType = 'iframe' | 'link' | 'script' | 'image';

export interface TrackingDevice {
  id: string;
  name: string;
  description: string;
  type?: string;
  contentType: DeviceType;
  content: string; // iframe embed code, URL, or script
  status?: 'active' | 'inactive' | 'maintenance';
  lastUpdated?: string;
  location?: string;
  imageUrl?: string;
  addedOn?: string;
}

export interface Vendor {
  id: string;
  name: string;
  email: string;
  company: string;
  devices: TrackingDevice[];
} 