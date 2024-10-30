// utils/api.js
export const getPriceSlider = async () => {
    const baseURL = process.env.BASE_URL; // Use NEXT_PUBLIC_ prefix for Next.js
    const endPoint = `${baseURL}blog/products-pricing/products-content-category-wise?category=Flash Banner Slider`;
  
    try {
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const data = await response.json();
      console.log('Fetched Data:', data); // Debugging line
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  