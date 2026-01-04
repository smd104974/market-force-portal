
import { Product, Order } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'S8 Ultra Smart Watch',
    price: 1850,
    originalPrice: 2500,
    stock: 45,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    category: 'Electronics',
    isTrending: true
  },
  {
    id: '2',
    name: 'Wireless Bluetooth Headset',
    price: 1200,
    originalPrice: 1800,
    stock: 12,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Men\'s Casual Premium Shirt',
    price: 950,
    originalPrice: 1400,
    stock: 120,
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c',
    category: 'Fashion',
    isTrending: true
  },
  {
    id: '4',
    name: 'Non-stick Fry Pan Set',
    price: 2800,
    originalPrice: 3500,
    stock: 8,
    image: 'https://images.unsplash.com/photo-1584946391128-f488274bb88b',
    category: 'Home',
    isTrending: false
  }
];

export const MOCK_ORDERS: Order[] = [
  {
    id: 'ORD-5542',
    productName: 'S8 Ultra Smart Watch',
    customerName: 'Rahim Ahmed',
    phone: '01711223344',
    sellingPrice: 2100,
    status: 'Shipped',
    date: '2023-11-20'
  },
  {
    id: 'ORD-5543',
    productName: 'Wireless Bluetooth Headset',
    customerName: 'Sultana Begum',
    phone: '01812345678',
    sellingPrice: 1500,
    status: 'Pending',
    date: '2023-11-21'
  }
];

export const SALES_DATA = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 2000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];
