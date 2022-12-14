import { useEffect, useState } from 'react';
//Images
import {
  logo,
  cartIcon,
  avatarImg,
  menuIcon,
  closeIcon,
} from '../../shared/images';
import Cart from '../Cart/Cart';
//Styles
import {
  SNavbar,
  SMenu,
  SCartBtn,
  SUserBtn,
  SMenuOverlay,
} from './Navbar.style';
//React Router
import { Link, useLocation } from 'react-router-dom';
//React Redux
import { useSelector } from 'react-redux';

//===========================================================//

const Navbar = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const location = useLocation();
  const cart = useSelector((state) => state.cart.cart);
  const totalQuantity = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  //when route changes, close the cart automatically
  useEffect(() => {
    setCartIsOpen(false);
  }, [location]);

  //when menu is open, prevent scolling
  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuIsOpen]);

  return (
    <>
      <SNavbar>
        <button onClick={() => setMenuIsOpen(true)} className="toggleBtn">
          <img src={menuIcon} alt="menu" />
        </button>
        <Link to="/">
          <img src={logo} alt="logo of sneakers" />
        </Link>
        <SMenuOverlay show={menuIsOpen} onClick={() => setMenuIsOpen(false)} />
        <SMenu show={menuIsOpen}>
          <button className="closeBtn" onClick={() => setMenuIsOpen(false)}>
            <img src={closeIcon} alt="close button" />
          </button>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </SMenu>
        <SCartBtn
          onClick={() => setCartIsOpen((prev) => !prev)}
          data-num={totalQuantity}
        >
          <img src={cartIcon} alt="cart button" />
        </SCartBtn>
        <SUserBtn>
          <img src={avatarImg} alt="user's profile picture" />
        </SUserBtn>
      </SNavbar>
      <Cart isOpen={cartIsOpen} />
    </>
  );
};

export default Navbar;
