import React, { useContext } from 'react';
import "../CSS/cart.css";
import { NavLink } from 'react-router-dom';
import{ProviderContext} from "./ContextProvider"
const Cart = () => {

const{count,increment,decrement}=useContext(ProviderContext);

const formattedcount = count < 10 ? `0${count}` : count;
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
        <div className="cartheadings">
          <div className="subheaditems">
            <div>
              <img src="" alt="" style={{ width: "60px", height: "60px" }} />&nbsp;<span>LCD Monitor</span>
            </div>
            <div className='price'>$650</div>
            <div className='quantity'>
              <div className='quaninside'>
                <div>
                {formattedcount}</div>
                <div>
                  <i class="bi bi-chevron-up upbtn" onClick={increment}></i><br />
                  <i class="bi bi-chevron-down downbtn" onClick={decrement}></i>
                </div>
              </div>
            </div>
            <div className='subtotal'>$650</div>
          </div>
        </div>
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
              <h4>Cart Total</h4>
              <div className='Cartfields'>
                <p>Subtotal:</p>
                <p>$1750</p>
              </div>
              <div className='Cartfields'>
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className='totalcart'>
                <p>Total:</p>
                <p>$1750</p>
              </div>
              <div className='processcheck'>
              <button>Proccess to checkout</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Cart
