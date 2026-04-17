/**
 * Calculate estimated reading time for content
 * @param text - HTML or plain text content
 * @returns Reading time in minutes
 */
export function calculateReadingTime(text: string): number {
  if (!text) return 1;

  // Strip HTML tags
  const plainText = text.replace(/<[^>]*>/g, '');

  // Count words (split by whitespace)
  const words = plainText.trim().split(/\s+/).length;

  // Average reading speed: 200 words per minute
  const minutes = Math.ceil(words / 200);

  // Minimum 1 minute
  return Math.max(1, minutes);
}

/**
 * Format reading time for display
 * @param minutes - Reading time in minutes
 * @returns Formatted string (e.g., "5 min read")
 */
export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}
