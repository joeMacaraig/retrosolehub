interface Images {
  small: string;
  regular: string;
  thumbnail: string;
}

interface ProductSneaker {
  tags: string[]; // Assuming tags can be an array of strings
  _id: string; // MongoDB ObjectId as a string
  id: string; // Custom ID
  __v: number; // Version key from MongoDB
  brand: string; // Brand name
  category: string; // Product category
  colorway: string; // Colorway description
  description: string; // Product description
  featured: boolean; // Featured status
  images: Images; // Images object
  marketPrice: string; // Market price as a string
  name: string; // Product name
  price: string; // Retail price as a string
  releaseDate: string; // Release date in YYYY-MM-DD format
  shoeType: string; // Type of shoe
  showInCatalog: boolean; // Visibility in catalog
  sourceID: string; // Source identifier
  visible: boolean; // Visibility status
}

interface SneakerProps {
  _id: string;
  id: string;
  brand: string;
  category: string;
  colorway: string;
  description: string;
  featured: boolean;
  images: {
    small: string;
    regular: string;
    thumbnail: string;
  };
  marketPrice: string;
  name: string;
  price: string;
  releaseDate: string;
  shoeType: string;
  showInCatalog: boolean;
  sourceID: string;
  visible: boolean;
}
