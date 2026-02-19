import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging Tailwind classes
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

// Format date
export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date));
};

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate phone
export const isValidPhone = (phone) => {
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone);
};

// Scroll to top
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

// Scroll to element
export const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Get reading time
export const getReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min read`;
};

// Truncate text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

// Generate slug
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
};

// Calculate EMI
export const calculateEMI = (principal, ratePercent, tenureMonths) => {
  const rate = ratePercent / (12 * 100);
  const emi = (principal * rate * Math.pow(1 + rate, tenureMonths)) / 
               (Math.pow(1 + rate, tenureMonths) - 1);
  return Math.round(emi);
};

// Calculate savings
export const calculatePetrolSavings = (kmPerDay, days = 365) => {
  const petrolPrice = 100; // per liter
  const petrolMileage = 40; // km per liter
  const electricityCost = 8; // per kWh
  const evEfficiency = 0.025; // kWh per km
  
  const totalKm = kmPerDay * days;
  const petrolCost = (totalKm / petrolMileage) * petrolPrice;
  const electricityCostTotal = totalKm * evEfficiency * electricityCost;
  const savings = petrolCost - electricityCostTotal;
  
  return {
    totalKm,
    petrolCost: Math.round(petrolCost),
    electricityCost: Math.round(electricityCostTotal),
    savings: Math.round(savings),
    savingsPercent: Math.round((savings / petrolCost) * 100)
  };
};

// Local storage helpers
export const storage = {
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  },
  get: (key) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return null;
    }
  },
  remove: (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  },
  clear: () => {
    try {
      localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
};

// Debounce function
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle function
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export default {
  formatCurrency,
  formatDate,
  isValidEmail,
  isValidPhone,
  scrollToTop,
  scrollToElement,
  getReadingTime,
  truncateText,
  generateSlug,
  calculateEMI,
  calculatePetrolSavings,
  storage,
  debounce,
  throttle
};
