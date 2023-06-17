import CartButton from '../cart/cart-button';
import classes from './main-header.module.css';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton showCart = {props.showCart}/>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;