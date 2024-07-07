import React, { useContext } from 'react';
import "../CSS/cart.css";
import { NavLink } from 'react-router-dom';
import{ProviderContext} from "./ContextProvider"
const Cart = () => {

const{count,increment,decrement,cart,total,removeFromCart, incrementQuantity, decrementQuantity}=useContext(ProviderContext);

// const formattedcount = count < 10 ? `0${count}` : count;
const handleRemoveFromCart = (item) => {
  removeFromCart(item.id);
};
const handleIncrementQuantity = (item) => {
  incrementQuantity(item.id);
};

const handleDecrementQuantity = (item) => {
  decrementQuantity(item.id);
};
let empty="";
if (cart.length === 0) {
 empty="Your Cart is Empty"
}
  return (
    <>
      <div className="page-navigation">
        <div>
          <NavLink className="home-link" to="/">Home</NavLink>/
          <NavLink className="cart-link" to="/cart">Cart</NavLink>
        </div>
      </div>
      <div className="maincart">
        <div className="cartheadings">
          <div className="subhead">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
        </div>
       <h1 className='text-center'>{empty}</h1>
        {cart.map(item=>(
        <div className="cartheadings">
          
          <div className="subheaditems" key={item.id}>
            <div style={{position:"absolute", zIndex:'1', color:"#c51919"}}>
            <i class="bi bi-x-circle-fill" onClick={()=>handleRemoveFromCart(item)}></i>
            </div>
            <div style={{position:"relative"}}>
              <img src={item.images} alt="" style={{ width: "60px", height: "60px" }} />&nbsp;<span id="ellipsis">{item.title}</span>
            </div>
            <div className='price'>{item.price}</div>
            <div className='quantity'>
              <div className='quaninside'>
                <div>
                {item.quantity}</div>
                <div>
                  <i class="bi bi-chevron-up upbtn" onClick={()=>handleIncrementQuantity(item)}></i><br />
                  <i class="bi bi-chevron-down downbtn" onClick={()=>handleDecrementQuantity(item)}></i>
                </div>
              </div>
            </div>
            <div className='subtotal'>{item.quantity*item.price}</div>
          </div>
        </div>
      ))}
        <div className='btnscart'>
          <button>Return To Shop</button>
          <button>Update Cart</button>
        </div>
      </div>
      <div className='maincheckout'>
        <div className="coupon">
          <div>
          <input type="text" placeholder='Coupon Code' />
          <button>Apply Coupon</button>
          </div>
        </div>
        <div className="proceedscheckout">
            <div className='carttotal'>
              <h4>Cart Total</h4><br />
              <div className='Cartfields'>
                <p>Subtotal:</p>
                <p>{total}</p>
              </div>
              <div className='Cartfields'>
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className='totalcart'>
                <p>Total:</p>
                <p>{total}</p>
              </div>
              <div className='processcheck'>
              <button>Proccess to checkout</button>
              </div>
            </div>
        </div>
      </div>



{/* <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.title} - {item.price}-
                <button onClick={() => removeFromCart(item)}>Remove</button>
                <img src={item.images} alt="" />
              </li>
            
            ))}
          </ul>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div> */}
    </>
  )
}

export default Cart
