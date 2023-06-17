import { useDispatch, useSelector } from 'react-redux';
import classes from './cart-item.module.css';
import React from 'react';
import { cartActions } from '../store';

const CartItem = (props) => {
  
  const cartProducts = useSelector((state)=> state.cart.cartItems);

  const dispatch  =useDispatch();

  const increseHandler = (product) =>{
      dispatch(cartActions.addItemToCart({item : product}));
      console.log('increasing qunatity')
  }

  const removeItemFromCartHandler=(id)=>{
    dispatch(cartActions.removeItemFromCart({id : id}));
  }

  return (
    <React.Fragment>
    {cartProducts.map((product) => (<li className={classes.item} key={product.title}>
      <header>
        <h3>{product.title}</h3>
        <div className={classes.price}>
          ${product.price * product.quantity}{' '}
          <span className={classes.itemprice}>(${product.price}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{product.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=> removeItemFromCartHandler(product.id)}>-</button>
          <button onClick={() => increseHandler(product)}>+</button>
        </div>
      </div>
    </li>))}
    </React.Fragment>
  );
};

export default CartItem;