import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to construct absolute URLs based on environment
export function absoluteUrl(path: string) {
  // If in browser environment
  if (typeof window !== "undefined") return path;
  
  // If VERCEL_URL environment variable is set
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`;
  
  // Default to localhost URL if is in development
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}
