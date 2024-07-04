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
const[count,setCount]=useState(0);
const increment= ()=>setCount(count+1);
const decrement= ()=>{
  if(count>0){
  setCount(count-1);
}
}

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

const addToCart = (item) => {
  setCart((prevCart) => [...prevCart, item]);
};

  return (
<<<<<<< HEAD
    <ProviderContext.Provider value={{time, products , loading, cart, addToCart}}>
=======
    <ProviderContext.Provider value={{time, products , loading,count,increment,decrement}}>
>>>>>>> e1334f32bd7818b97ab886fd8048a150c41eb87d
      {children}
    </ProviderContext.Provider>
  )
}

export {ContextProvider, ProviderContext}
