import { products } from "./mock/products"
import { Link } from 'react-router-dom';

function Products() {

  return (
    <div>
      <div>
        <h1 className="mb-6 text-2xl font-bold">
            Каталог
        </h1>
        <div className="grid gap-4 grid-cols-3">
            {
                products.map((product) => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.price}</p>
                        <p>{product.desc}</p>
                        <Link to={`/products/${product.id}`}>Learn more</Link>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default Products;