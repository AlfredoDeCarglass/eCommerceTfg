import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import data from '../data';
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <h1>Productos Destacados</h1>
      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                {product.price} <strong>€</strong>
              </p>
              <button>Añadir al carro</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeScreen;
