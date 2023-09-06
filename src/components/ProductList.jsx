import { useDispatch } from 'react-redux';
import { addToCart } from './action.jsx';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-list">
      {products.map((product) => (
          <div className="product" key={product._id}>
            <img src={product.picture} />
            <h2>{product.name}</h2>
            <p>Price: {product.price}</p>
            <p>Color: {product.color}</p>
            <button onClick={() => handleAddToCart(product)}>Buy</button>
          </div>
      ))}
    </div>
  );
}

export default ProductList;
