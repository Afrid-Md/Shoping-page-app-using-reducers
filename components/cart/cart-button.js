import { useSelector } from 'react-redux';
import classes from './cart-button.module.css';

const CartButton = (props) => {

  const length = useSelector((state) => state.cart.cartItems.length)
  return (
    <button className={classes.button} onClick={props.showCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{length}</span>
    </button>
  );
};

export default CartButton;