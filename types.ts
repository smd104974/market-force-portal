
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  stock: number;
  image: string;
  category: string;
  isTrending?: boolean;
}

export interface Order {
  id: string;
  productName: string;
  customerName: string;
  phone: string;
  sellingPrice: number;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
}

export enum Tab {
  HOME = 'HOME',
  ORDERS = 'ORDERS',
  WALLET = 'WALLET',
  AI = 'AI'
}
