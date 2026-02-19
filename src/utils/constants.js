// Site Information
export const SITE_NAME = 'CDEV';
export const SITE_DESCRIPTION = 'Leading the electric revolution in India with sustainable and innovative electric scooters';
export const SITE_URL = 'https://blueev.com';

// Contact Information
export const CONTACT_EMAIL = 'info@blueev.com';
export const SUPPORT_EMAIL = 'support@blueev.com';
export const CONTACT_PHONE = '+91 1800-123-4567';
export const CONTACT_PHONE_ALT = '+91 98765-43210';
export const CONTACT_ADDRESS = '123 Green Street, Mumbai, Maharashtra 400001';

// Social Media
export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/blueev',
  twitter: 'https://twitter.com/blueev',
  instagram: 'https://instagram.com/blueev',
  youtube: 'https://youtube.com/blueev',
  linkedin: 'https://linkedin.com/company/blueev'
};

// Business Hours
export const BUSINESS_HOURS = {
  weekdays: 'Mon - Sat: 9:00 AM - 7:00 PM',
  sunday: 'Sunday: 10:00 AM - 5:00 PM'
};

// Features
export const KEY_FEATURES = [
  'Zero Emissions',
  'Low Maintenance',
  'Smart Connectivity',
  'Fast Charging',
  '5 Year Warranty',
  '24/7 Support'
];

// Stats
export const COMPANY_STATS = {
  customers: '50,000+',
  cities: '15+',
  serviceCenters: '100+',
  warranty: '5 Years'
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Models', path: '/models' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' }
];

// Footer Links
export const FOOTER_LINKS = {
  quickLinks: [
    { name: 'About Us', path: '/about' },
    { name: 'Our Models', path: '/models' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' }
  ],
  support: [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Warranty', path: '#' },
    { name: 'Service Centers', path: '#' }
  ]
};

// API Endpoints (for future use)
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/api';
export const API_ENDPOINTS = {
  contact: '/contact',
  testRide: '/test-ride',
  newsletter: '/newsletter',
  service: '/service'
};

export default {
  SITE_NAME,
  SITE_DESCRIPTION,
  SITE_URL,
  CONTACT_EMAIL,
  SUPPORT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_ALT,
  CONTACT_ADDRESS,
  SOCIAL_LINKS,
  BUSINESS_HOURS,
  KEY_FEATURES,
  COMPANY_STATS,
  NAV_LINKS,
  FOOTER_LINKS,
  API_BASE_URL,
  API_ENDPOINTS
};
