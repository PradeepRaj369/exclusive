import axios from 'axios';
import React, { children, createContext, useEffect, useState } from 'react'

const ProviderContext=createContext();
const ContextProvider = ({children}) => {
// --------------Hover Add to Cart---------
// const [isHovered, setIsHovered]=useState(false);

// ----------- Timer -------------

    const initialDays = `0${3}`;
  const initialHours = 24;
  const initialMinutes = 60;
  const initialSeconds = 30;
// -----------count Quantity cart page-------


  const [time, setTime] = useState({
    days: initialDays,
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;

        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
          return prevTime;
        }

        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;
        let newDays = days;

        if (newSeconds < 0) {
          if(newSeconds<10){
          newSeconds = `${59}`;
          newMinutes -= 1;
          }
        }

        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        if (newHours < 0) {
          newHours = 23;
          newDays -= 1;
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

// ------------- Fetch Products------------

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(products)
  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products?limit=10')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

// ---------Cart Items----------
const [cart, setCart] = useState([]);
const [total,setTotal]=useState(0)

const addToCart = (product) => {
  setCart(prevCart => {
      const isProductInCart = prevCart.find(cartItem => cartItem.id === product.id);
      if (isProductInCart) {
          return prevCart;
      }
      const updatedCart = [...prevCart, { ...product, quantity: 1 }];
      updateTotal(updatedCart);
      return updatedCart;
  });
};

const updateTotal = (updatedCart) => {
  const newTotal = updatedCart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  setTotal(newTotal);
};

const getCartCount = () => {
  return cart.length;
};


const removeFromCart = (itemId) => {
  setCart(prevCart => {
      const updatedCart = prevCart.filter(item => item.id !== itemId);
      updateTotal(updatedCart);
      return updatedCart;
  });
};

const incrementQuantity = (itemId) => {
  setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      updateTotal(updatedCart);
      return updatedCart;
  });
};

const decrementQuantity = (itemId) => {
  setCart(prevCart => {
      const updatedCart = prevCart.map(item =>
          item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      );
      updateTotal(updatedCart);
      return updatedCart;
  });
};


// -----product Details------
const [selectedProduct, setSelectedProduct] = useState(null);


  return (
    <ProviderContext.Provider value={{total,time, products , loading, cart, addToCart , getCartCount,selectedProduct, setSelectedProduct, removeFromCart,incrementQuantity,decrementQuantity}}>
      {children}
    </ProviderContext.Provider>
  )
}

export {ContextProvider, ProviderContext}
