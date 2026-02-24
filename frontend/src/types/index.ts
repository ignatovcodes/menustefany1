export interface MenuItem {
  id: number;
  category: string;
  name: string;
  description: string;
  weight: string;
  price: number;
  image: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface BookingForm {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  notes: string;
}

export interface WaiterForm {
  tableNumber: string;
  comment: string;
}
