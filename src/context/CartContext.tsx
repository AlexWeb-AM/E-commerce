import React, { createContext, useState, ReactNode, useContext } from 'react';
import { Mobile_Data_interface } from '../data/Phones_data';

interface CartItem extends Mobile_Data_interface {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Mobile_Data_interface) => void;
  removeFromCart: (item: Mobile_Data_interface) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: Mobile_Data_interface) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.name === item.name);
      if (existingItem) {
        return prevItems.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item: Mobile_Data_interface) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.name === item.name);
      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
        );
      }
      return prevItems.filter(i => i.name !== item.name);
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
