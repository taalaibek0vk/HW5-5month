import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className="navbar">
      <h1>STORE</h1>
      <div className="cart-count">Basket ({cartItems.length})</div>
    </div>
  );
}

export default Navbar;
