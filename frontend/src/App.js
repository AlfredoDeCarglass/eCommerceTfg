import data from './data';

function App() {
  return (
    <div>
      <header className="App-header">
        <a href="/">eCommerce</a>
      </header>
      <main>
        <h1>Productos Destacados</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  {product.price} <strong>€</strong>
                </p>
                <button>Añadir al carro</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
