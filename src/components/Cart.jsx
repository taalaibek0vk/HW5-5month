import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from './action.jsx';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };
  return (
    <div className="cart">
      <h2>Basket</h2>
      <div className='cart-list'>
        {cartItems.map((item) => (
          <div className="cart-item" key={item._id}>
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <button onClick={() => handleRemoveFromCart(item._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Cart

