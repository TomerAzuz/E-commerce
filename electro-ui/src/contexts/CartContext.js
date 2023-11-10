import React, { createContext, useState, useEffect, useContext } from 'react';
import { toast } from 'react-hot-toast';

import { AuthContext } from './AuthContext';
import axiosInstance from '../axiosInterceptor'; 

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemQuantity, setItemQuantity] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(total);
      
  }, [cart]);

  useEffect(() => {
    if (cart)   {
      const quantity = cart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
      setItemQuantity(quantity);
    }
  }, [cart]);

  const handleCheckout = async() => {
    if (user) {
      if (loading)  {
        return;
      }
      setLoading(true);
      const orderData = {
        items: cart.map(item => ({
          productId: item.id,
          quantity: item.quantity
        })),
        username: user.username
      };

      try {
        const response = await axiosInstance.post('/orders', orderData);
        if (response && response.status === 200)  {
          toast.success('Order Submitted Successfully');
          // redirect to confirmation page
        }
        clearCart();
      } catch (error) {
        toast.error(`Error submitting order: ${error.message}`);
      } finally {
        setLoading(false);
      }
    } else   {
      toast.error('Please Sign In');
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const newItem = {...product, quantity: 1};
    const cartItem = cart.find(item => {
      return item.id === product.id;
    });

    if (cartItem)   {
      const newCart = [...cart].map(item => {
        if (item.id === product.id) {
          if (item.quantity > 2)  {
            toast.error('You cannot order more than 3 items');
            return item;
          } else  {
            toast.success('Item added to cart');
            return {...item, quantity: cartItem.quantity + 1};
          }
        } 
        return item;
      });
      setCart(newCart);
    } else  {
      toast.success('Item added to cart');
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseQuantity = (id) => {
    const item = cart.find(item => item.id === id);
    addToCart(item, id);
  };

  const decreaseQuantity = (id) => {
    const item = cart.find((cartItem) => cartItem.id === id);
    if (item) {
      let newCart;
      if (item.quantity > 1) {
        newCart = cart.map((cartItem) => {
          return cartItem.id === id ? 
            { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem;
        });
      } else {
        newCart = cart.filter((cartItem) => cartItem.id !== id);
      }
      setCart(newCart);
    }
  };

  return <CartContext.Provider value={{ cart,
    itemQuantity,
    total,
    loading,
    addToCart, 
    removeFromCart, 
    clearCart,
    increaseQuantity, 
    decreaseQuantity,
    handleCheckout
  }}>{children}</CartContext.Provider>;
};

export default CartProvider;