// Proven fileToBase64 function for reliable file-to-base64 conversion
// Used for Power Automate integration to send files as base64 strings
export function fileToBase64(file: File): Promise<{ base64: string; dataUrl: string }> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = () => {
      // reader.result contains the data URL format:
      // Example: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD..."
      const dataUrl = reader.result as string

      // Extract just the base64 string (remove the prefix)
      // Split by comma and take the second part (index 1)
      const base64 = dataUrl.split(",")[1]

      // Return both formats:
      // - dataUrl: Full data URL with prefix
      // - base64: Raw base64 string for Power Automate
      resolve({ base64, dataUrl })
    }

    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
