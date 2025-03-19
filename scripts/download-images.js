const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// Create directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of images to download (using Unsplash API format)
const images = [
  {
    name: 'hero.jpg',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1920&auto=format&fit=crop',
    description: 'Luxurious beauty clinic interior'
  },
  {
    name: 'facial.jpg',
    url: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=800&auto=format&fit=crop',
    description: 'Facial treatment'
  },
  {
    name: 'massage.jpg',
    url: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=800&auto=format&fit=crop',
    description: 'Relaxing massage'
  },
  {
    name: 'eyelashes.jpg',
    url: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop',
    description: 'Eyelash extensions'
  },
  {
    name: 'skincare.jpg',
    url: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?q=80&w=800&auto=format&fit=crop',
    description: 'Skincare products'
  },
  {
    name: 'team1.jpg',
    url: 'https://images.unsplash.com/photo-1535324492437-d8dea70a38a7?q=80&w=800&auto=format&fit=crop',
    description: 'Team member 1'
  },
  {
    name: 'team2.jpg',
    url: 'https://images.unsplash.com/photo-1524593689594-aae2f26b75ab?q=80&w=800&auto=format&fit=crop',
    description: 'Team member 2'
  },
  {
    name: 'clinic.jpg',
    url: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=800&auto=format&fit=crop',
    description: 'Beauty clinic exterior'
  },
];

async function downloadImages() {
  console.log('Downloading images...');
  
  for (const image of images) {
    const imagePath = path.join(imagesDir, image.name);
    
    try {
      const response = await fetch(image.url);
      if (!response.ok) {
        throw new Error(`Failed to download ${image.name}: ${response.statusText}`);
      }
      
      const buffer = await response.buffer();
      fs.writeFileSync(imagePath, buffer);
      
      console.log(`Downloaded: ${image.name}`);
    } catch (error) {
      console.error(`Error downloading ${image.name}:`, error.message);
    }
  }
  
  console.log('Image download completed!');
}

downloadImages(); 