import ProductItem from './product-item';
import classes from './products.module.css';

const Products = (props) => {

  const productsArray = [{
    id:'p1',
    title :'Test 1',
    price : '6',
    description : 'This is first product - amazing',   quantity : 1
  },{
    id:'p2',
    title :'Test 2',
    price : '8',
    description : 'This is second product - super',   quantity : 1
  },{
    id:'p3',
    title :'Test 3',
    price : '10',
    description : 'This is third product - good',
    quantity : 1
  }]
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          productsArray = {productsArray}
        />
      </ul>
    </section>
  );
};

export default Products;