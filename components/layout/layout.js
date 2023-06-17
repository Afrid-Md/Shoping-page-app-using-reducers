import { Fragment } from 'react';
import MainHeader from './main-header';

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader showCart={props.showCart}/>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;