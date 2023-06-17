import React from "react";
import Card from "../ui/card";
import classes from "./product-item.module.css";
import { cartActions } from "../store";
import {useDispatch} from 'react-redux';

const ProductItem = (props) => {
  const productsArray = props.productsArray;

  const dispatch = useDispatch();
  const addToCartItemHandler=(product)=>{
    dispatch(cartActions.addItemToCart({item : product}))
  }

  return (
    <React.Fragment>
      {productsArray.map((product) => (
        <li className={classes.item} key={product.id}>
          <Card>
            <header>
              <h3>{product.title}</h3>
              <div className={classes.price}>${product.price}</div>
            </header>
            <p>{product.description}</p>
            <div className={classes.actions}>
              <button onClick={()=>addToCartItemHandler(product)}>Add to Cart</button>
            </div>
          </Card>
        </li>
      ))}
    </React.Fragment>
  );
};

export default ProductItem;
