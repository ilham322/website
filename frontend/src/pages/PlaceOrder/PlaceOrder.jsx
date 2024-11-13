import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './PlaceOrder.css'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='Nama Depan' />
          <input type="text" placeholder='Nama Belakang' />
        </div>
        <input type="email" placeholder='Alamat Email' />
        <input type="text" placeholder='Alamat' />
        <div className="multi-fields">
          <input type="text" placeholder='Kota' />
          <input type="text" placeholder='Provinsi' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Kode Pos' />
          <input type="text" placeholder='Negara' />
        </div>
        <input type="text" placeholder='No. Hp' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rp.{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Ongkos Kirim</p>
              <p>Rp.{getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>Rp.{getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder
