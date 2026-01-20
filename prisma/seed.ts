import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products = [
  {
    name: 'Lenovo Ideapad Core i5 8th Gen 8GB RAM 256GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'lenovo-ideapad-i5-8th-8gb-256gb',
    description: 'Reliable daily laptop with fast SSD storage and solid performance for work and school.',
    price: 26000,
    salePrice: 24000,
    currency: 'KES',
    category: 'Laptops',
    brand: 'Lenovo',
    condition: 'Refurbished (Ex-UK)',
    images: [
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8'
    ],
    specs: {
      Processor: 'Intel Core i5 8th Gen',
      RAM: '8GB',
      Storage: '256GB SSD',
      Display: '14-inch',
      Graphics: 'Intel UHD',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 7,
    featured: false,
    ratingAvg: 4.4,
    reviewCount: 3
  },
  {
    name: 'Lenovo L13 Yoga Core i5 10th Gen 8GB RAM 256GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'lenovo-l13-yoga-i5-10th-8gb-256gb',
    description: 'Convertible touch laptop with flexible 2-in-1 design for productivity on the go.',
    price: 30000,
    salePrice: 27900,
    currency: 'KES',
    category: 'Laptops',
    brand: 'Lenovo',
    condition: 'Refurbished (Ex-UK)',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f'
    ],
    specs: {
      Processor: 'Intel Core i5 10th Gen',
      RAM: '8GB',
      Storage: '256GB SSD',
      Display: '13.3-inch Touch',
      Graphics: 'Intel UHD',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 5,
    featured: false,
    ratingAvg: 4.5,
    reviewCount: 4
  },
  {
    name: 'Lenovo E14 Core i5 10th Gen 16GB RAM 512GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'lenovo-e14-i5-10th-16gb-512gb',
    description: 'Business laptop with upgraded RAM and storage for demanding workflows.',
    price: 32000,
    currency: 'KES',
    category: 'Laptops',
    brand: 'Lenovo',
    condition: 'Refurbished (Ex-UK)',
    images: ['https://images.unsplash.com/photo-1527430253228-e93688616381'],
    specs: {
      Processor: 'Intel Core i5 10th Gen',
      RAM: '16GB',
      Storage: '512GB SSD',
      Display: '14-inch',
      Graphics: 'Intel UHD',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 6,
    featured: false,
    ratingAvg: 4.3,
    reviewCount: 2
  },
  {
    name: 'Dell Latitude 3490 Core i3 8th Gen 8GB RAM 256GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'dell-latitude-3490-i3-8th-8gb-256gb',
    description: 'Budget-friendly laptop with dependable performance for everyday tasks.',
    price: 18000,
    salePrice: 17000,
    currency: 'KES',
    category: 'Laptops',
    brand: 'Dell',
    condition: 'Refurbished (Ex-UK)',
    images: ['https://images.unsplash.com/photo-1515879218367-8466d910aaa4'],
    specs: {
      Processor: 'Intel Core i3 8th Gen',
      RAM: '8GB',
      Storage: '256GB SSD',
      Display: '14-inch',
      Graphics: 'Intel UHD',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 9,
    featured: false,
    ratingAvg: 4.2,
    reviewCount: 2
  },
  {
    name: 'Dell Latitude 5300 Core i5 8th Gen 8GB RAM 256GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'dell-latitude-5300-i5-8th-8gb-256gb',
    description: 'Compact business laptop with strong battery life and fast boot times.',
    price: 27000,
    currency: 'KES',
    category: 'Laptops',
    brand: 'Dell',
    condition: 'Refurbished (Ex-UK)',
    images: ['https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'],
    specs: {
      Processor: 'Intel Core i5 8th Gen',
      RAM: '8GB',
      Storage: '256GB SSD',
      Display: '13.3-inch',
      Graphics: 'Intel UHD',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 8,
    featured: false,
    ratingAvg: 4.4,
    reviewCount: 3
  },
  {
    name: 'HP ProBook 440 G2 Core i3 4th Gen 8GB RAM 500GB HDD Refurbished (Ex-UK) Price in Kenya',
    slug: 'hp-probook-440-g2-i3-4th-8gb-500gb',
    description: 'Affordable laptop with large storage for documents and media.',
    price: 16000,
    currency: 'KES',
    category: 'Laptops',
    brand: 'HP',
    condition: 'Refurbished (Ex-UK)',
    images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30'],
    specs: {
      Processor: 'Intel Core i3 4th Gen',
      RAM: '8GB',
      Storage: '500GB HDD',
      Display: '14-inch',
      Graphics: 'Intel HD',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 10,
    featured: false,
    ratingAvg: 4.1,
    reviewCount: 2
  },
  {
    name: 'HP EliteBook 840 G1 Core i5 4th Gen 8GB RAM 256GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'hp-elitebook-840-g1-i5-4th-8gb-256gb',
    description: 'Sturdy EliteBook with SSD speed for efficient multitasking.',
    price: 22000,
    currency: 'KES',
    category: 'Laptops',
    brand: 'HP',
    condition: 'Refurbished (Ex-UK)',
    images: ['https://images.unsplash.com/photo-1460925895917-afdab827c52f'],
    specs: {
      Processor: 'Intel Core i5 4th Gen',
      RAM: '8GB',
      Storage: '256GB SSD',
      Display: '14-inch',
      Graphics: 'Intel HD',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 6,
    featured: false,
    ratingAvg: 4.2,
    reviewCount: 2
  },
  {
    name: 'HP EliteBook 840 G2 Core i5 6th Gen 8GB RAM 256GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'hp-elitebook-840-g2-i5-6th-8gb-256gb',
    description: 'Slim professional laptop with reliable performance and SSD storage.',
    price: 24000,
    salePrice: 22500,
    currency: 'KES',
    category: 'Laptops',
    brand: 'HP',
    condition: 'Refurbished (Ex-UK)',
    images: ['https://images.unsplash.com/photo-1498050108023-c5249f4df085'],
    specs: {
      Processor: 'Intel Core i5 6th Gen',
      RAM: '8GB',
      Storage: '256GB SSD',
      Display: '14-inch',
      Graphics: 'Intel HD',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 7,
    featured: false,
    ratingAvg: 4.4,
    reviewCount: 3
  },
  {
    name: 'HP EliteBook 745 G6 Ryzen 5 16GB RAM 512GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'hp-elitebook-745-g6-ryzen5-16gb-512gb',
    description: 'Fast AMD Ryzen-powered EliteBook with ample memory for multitasking.',
    price: 31000,
    currency: 'KES',
    category: 'Laptops',
    brand: 'HP',
    condition: 'Refurbished (Ex-UK)',
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d'],
    specs: {
      Processor: 'AMD Ryzen 5',
      RAM: '16GB',
      Storage: '512GB SSD',
      Display: '14-inch',
      Graphics: 'Radeon Vega',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 4,
    featured: false,
    ratingAvg: 4.5,
    reviewCount: 3
  },
  {
    name: 'HP ZBook FireFly 14 G7 Core i7 10th Gen 16GB RAM 512GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'hp-zbook-firefly-14-g7-i7-10th-16gb-512gb',
    description: 'Premium mobile workstation for creators with powerful 10th Gen performance.',
    price: 62000,
    salePrice: 58000,
    currency: 'KES',
    category: 'Laptops',
    brand: 'HP',
    condition: 'Refurbished (Ex-UK)',
    images: ['https://images.unsplash.com/photo-1504384308090-c894fdcc538d'],
    specs: {
      Processor: 'Intel Core i7 10th Gen',
      RAM: '16GB',
      Storage: '512GB SSD',
      Display: '14-inch',
      Graphics: 'NVIDIA Quadro',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 3,
    featured: true,
    ratingAvg: 4.8,
    reviewCount: 5
  },
  {
    name: 'HP ZBook FireFly 14 G8 Core i7 11th Gen 16GB RAM 512GB SSD Refurbished (Ex-UK) Price in Kenya',
    slug: 'hp-zbook-firefly-14-g8-i7-11th-16gb-512gb',
    description: 'Next-gen ZBook workstation with 11th Gen power and sleek design.',
    price: 72000,
    salePrice: 68000,
    currency: 'KES',
    category: 'Laptops',
    brand: 'HP',
    condition: 'Refurbished (Ex-UK)',
    images: ['https://images.unsplash.com/photo-1522075469751-3a6694fb2f61'],
    specs: {
      Processor: 'Intel Core i7 11th Gen',
      RAM: '16GB',
      Storage: '512GB SSD',
      Display: '14-inch',
      Graphics: 'Intel Iris Xe',
      Condition: 'Refurbished (Ex-UK)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Laptop + Charger'
    },
    stockQty: 2,
    featured: true,
    ratingAvg: 4.9,
    reviewCount: 4
  },
  {
    name: 'Epson L3210 EcoTank 3-in-1 Brand New Price in Kenya',
    slug: 'epson-l3210-ecotank',
    description: 'All-in-one EcoTank printer for affordable home and office printing.',
    price: 24500,
    salePrice: 23000,
    currency: 'KES',
    category: 'Printers',
    brand: 'Epson',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04'],
    specs: {
      Type: '3-in-1 Print/Scan/Copy',
      Ink: 'EcoTank',
      Connectivity: 'USB',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Printer + Power Cable'
    },
    stockQty: 12,
    featured: true,
    ratingAvg: 4.7,
    reviewCount: 5
  },
  {
    name: 'Epson L14150 EcoTank A3 Brand New Price in Kenya',
    slug: 'epson-l14150-ecotank-a3',
    description: 'High-volume A3 printer ideal for offices needing wide-format printing.',
    price: 110000,
    currency: 'KES',
    category: 'Printers',
    brand: 'Epson',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04'],
    specs: {
      Type: 'A3 Print/Scan/Copy',
      Ink: 'EcoTank',
      Connectivity: 'USB/Wi-Fi',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Printer + Power Cable'
    },
    stockQty: 4,
    featured: false,
    ratingAvg: 4.6,
    reviewCount: 2
  },
  {
    name: 'Epson LX-350 Dot Matrix Brand New Price in Kenya',
    slug: 'epson-lx-350-dot-matrix',
    description: 'Durable dot matrix printer suited for continuous forms and receipts.',
    price: 42000,
    currency: 'KES',
    category: 'Printers',
    brand: 'Epson',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04'],
    specs: {
      Type: 'Dot Matrix',
      Speed: 'High-speed draft',
      Connectivity: 'USB/Parallel',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Printer + Power Cable'
    },
    stockQty: 5,
    featured: false,
    ratingAvg: 4.3,
    reviewCount: 1
  },
  {
    name: 'HP M236sdw LaserJet Brand New Price in Kenya',
    slug: 'hp-m236sdw-laserjet',
    description: 'Fast mono laser printer with duplex and wireless connectivity.',
    price: 33000,
    salePrice: 31000,
    currency: 'KES',
    category: 'Printers',
    brand: 'HP',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04'],
    specs: {
      Type: 'Mono Laser',
      Speed: '29 ppm',
      Connectivity: 'Wi-Fi',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Printer + Power Cable'
    },
    stockQty: 6,
    featured: true,
    ratingAvg: 4.6,
    reviewCount: 4
  },
  {
    name: 'HP M611dn Enterprise Laser Brand New Price in Kenya',
    slug: 'hp-m611dn-enterprise-laser',
    description: 'Enterprise-grade laser printer built for high-volume output.',
    price: 98000,
    currency: 'KES',
    category: 'Printers',
    brand: 'HP',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04'],
    specs: {
      Type: 'Enterprise Laser',
      Speed: '65 ppm',
      Connectivity: 'Ethernet',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Printer + Power Cable'
    },
    stockQty: 3,
    featured: false,
    ratingAvg: 4.5,
    reviewCount: 2
  },
  {
    name: 'HP DeskJet 2320 Brand New Price in Kenya',
    slug: 'hp-deskjet-2320',
    description: 'Compact budget printer for everyday printing and scanning.',
    price: 8500,
    currency: 'KES',
    category: 'Printers',
    brand: 'HP',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04'],
    specs: {
      Type: 'Inkjet',
      Connectivity: 'USB',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Printer + Power Cable'
    },
    stockQty: 11,
    featured: false,
    ratingAvg: 4.1,
    reviewCount: 2
  },
  {
    name: 'Transcend External HDD 1TB Brand New Price in Kenya',
    slug: 'transcend-external-hdd-1tb',
    description: 'Portable 1TB storage for backups and media on the go.',
    price: 8000,
    currency: 'KES',
    category: 'Storage',
    brand: 'Transcend',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475'],
    specs: {
      Capacity: '1TB',
      Interface: 'USB 3.0',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Drive + USB Cable'
    },
    stockQty: 10,
    featured: false,
    ratingAvg: 4.4,
    reviewCount: 2
  },
  {
    name: 'Transcend External HDD 2TB Brand New Price in Kenya',
    slug: 'transcend-external-hdd-2tb',
    description: '2TB external drive for large backups and media libraries.',
    price: 12500,
    currency: 'KES',
    category: 'Storage',
    brand: 'Transcend',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475'],
    specs: {
      Capacity: '2TB',
      Interface: 'USB 3.0',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Drive + USB Cable'
    },
    stockQty: 9,
    featured: false,
    ratingAvg: 4.5,
    reviewCount: 2
  },
  {
    name: 'Transcend External HDD 4TB Brand New Price in Kenya',
    slug: 'transcend-external-hdd-4tb',
    description: 'Massive 4TB storage for professionals and studios.',
    price: 21000,
    salePrice: 19500,
    currency: 'KES',
    category: 'Storage',
    brand: 'Transcend',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475'],
    specs: {
      Capacity: '4TB',
      Interface: 'USB 3.0',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Drive + USB Cable'
    },
    stockQty: 6,
    featured: false,
    ratingAvg: 4.6,
    reviewCount: 3
  },
  {
    name: 'Transcend ESD270C Portable SSD 500GB Brand New Price in Kenya',
    slug: 'transcend-esd270c-500gb',
    description: 'Ultra-fast portable SSD with USB-C connectivity.',
    price: 12500,
    salePrice: 11500,
    currency: 'KES',
    category: 'Storage',
    brand: 'Transcend',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475'],
    specs: {
      Capacity: '500GB',
      Interface: 'USB-C',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'SSD + USB-C Cable'
    },
    stockQty: 8,
    featured: true,
    ratingAvg: 4.7,
    reviewCount: 4
  },
  {
    name: 'Transcend ESD270C Portable SSD 1TB Brand New Price in Kenya',
    slug: 'transcend-esd270c-1tb',
    description: '1TB USB-C portable SSD for speedy file transfers.',
    price: 19000,
    currency: 'KES',
    category: 'Storage',
    brand: 'Transcend',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475'],
    specs: {
      Capacity: '1TB',
      Interface: 'USB-C',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'SSD + USB-C Cable'
    },
    stockQty: 7,
    featured: false,
    ratingAvg: 4.6,
    reviewCount: 3
  },
  {
    name: 'Infinix Smart 10 4GB RAM 64GB Storage 4G Brand New Price in Kenya',
    slug: 'infinix-smart-10-4gb-64gb',
    description: 'Affordable smartphone with long-lasting battery and roomy storage.',
    price: 12500,
    currency: 'KES',
    category: 'Smartphones',
    brand: 'Infinix',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'],
    specs: {
      Processor: 'Octa-core',
      RAM: '4GB',
      Storage: '64GB',
      Display: '6.6-inch',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Phone + Charger'
    },
    stockQty: 12,
    featured: false,
    ratingAvg: 4.3,
    reviewCount: 3
  },
  {
    name: 'Infinix Hot 60 Pro 8GB RAM 128GB Storage Brand New Price in Kenya',
    slug: 'infinix-hot-60-pro-8gb-128gb',
    description: 'Performance-focused phone with large display and fast charging.',
    price: 23000,
    currency: 'KES',
    category: 'Smartphones',
    brand: 'Infinix',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'],
    specs: {
      Processor: 'Octa-core',
      RAM: '8GB',
      Storage: '128GB',
      Display: '6.8-inch',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Phone + Charger'
    },
    stockQty: 9,
    featured: false,
    ratingAvg: 4.4,
    reviewCount: 2
  },
  {
    name: 'Infinix Hot 60 Pro+ 8GB RAM 128GB Storage Brand New Price in Kenya',
    slug: 'infinix-hot-60-pro-plus-8gb-128gb',
    description: 'Premium Hot series phone with improved camera and sleek design.',
    price: 26500,
    currency: 'KES',
    category: 'Smartphones',
    brand: 'Infinix',
    condition: 'Brand New',
    images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'],
    specs: {
      Processor: 'Octa-core',
      RAM: '8GB',
      Storage: '128GB',
      Display: '6.8-inch',
      Condition: 'Brand New',
      Warranty: '12 Months Warranty',
      'In the Box': 'Phone + Charger'
    },
    stockQty: 8,
    featured: false,
    ratingAvg: 4.5,
    reviewCount: 2
  },
  {
    name: 'Apple iPhone 11 128GB Storage Refurbished (Ex-US) Price in Kenya',
    slug: 'apple-iphone-11-128gb',
    description: 'Refurbished iPhone 11 with crisp display and smooth performance.',
    price: 42000,
    salePrice: 39500,
    currency: 'KES',
    category: 'Smartphones',
    brand: 'Apple',
    condition: 'Refurbished (Ex-US)',
    images: ['https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5'],
    specs: {
      Processor: 'Apple A13 Bionic',
      RAM: '4GB',
      Storage: '128GB',
      Display: '6.1-inch',
      Condition: 'Refurbished (Ex-US)',
      Warranty: '30 Days Shop Warranty',
      'In the Box': 'Phone + Charger'
    },
    stockQty: 4,
    featured: true,
    ratingAvg: 4.7,
    reviewCount: 4
  }
];

const featuredReviews = [
  {
    name: 'James W.',
    rating: 5,
    comment: 'Fast delivery and the laptop looks brand new.'
  },
  {
    name: 'Mary A.',
    rating: 4,
    comment: 'Great value for money and friendly customer care.'
  },
  {
    name: 'Kelvin M.',
    rating: 5,
    comment: 'Perfect for my design work. Highly recommend.'
  },
  {
    name: 'Brenda K.',
    rating: 5,
    comment: 'Printer setup was easy and prints are sharp.'
  },
  {
    name: 'Ali H.',
    rating: 4,
    comment: 'Storage SSD is super fast and compact.'
  }
];

async function main() {
  await prisma.review.deleteMany();
  await prisma.product.deleteMany();

  for (const product of products) {
    const created = await prisma.product.create({ data: product });

    if (product.featured) {
      const reviews = featuredReviews
        .slice(0, Math.max(1, Math.min(5, Math.round(product.reviewCount / 2))))
        .map((review) => ({ ...review, productId: created.id }));
      await prisma.review.createMany({ data: reviews });
    }
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
