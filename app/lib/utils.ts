/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB, TB).
 * @param bytes - The size in bytes
 * @returns A formatted string with the appropriate unit
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes: string[] = ["Bytes", "KB", "MB", "GB", "TB"];
  
  // Find the appropriate unit
  const i: number = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Format with 2 decimal places
  const size = parseFloat((bytes / Math.pow(k, i)).toFixed(2));
  
  return `${size} ${sizes[i]}`;
}
