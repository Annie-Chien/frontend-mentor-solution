//Styles
import { DeleteBtn, SCart, SCartList, SCartListItem } from './Cart.style';
import { useSelector } from 'react-redux';
//Images
import { deleteIcon } from '../../shared/images';
import { removeItem } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';
import { SButton } from '../../shared/GlobalStyle';
//Data
import { PRODUCTS } from '../../shared/data';

//===========================================================//
const Cart = ({ isOpen }) => {
  //使用 useSelector 來取得儲存在 store 裡面的 state
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <SCart show={isOpen}>
      <h3>Cart</h3>
      <div className="content">
        {!cart.length ? <p>Your cart is empty.</p> : ''}
        <SCartList>
          {cart.map((item) => {
            const { id, quantity } = item;
            const { img, name, price } = PRODUCTS.find((p) => p.id === id);
            const total = price * quantity;

            return (
              <SCartListItem key={id}>
                <img src={img} alt="" />
                <div className="productInfo">
                  <h4>{name}</h4>
                  <p>
                    ${price} x {quantity}
                    <span className="totalPrice">${total}</span>
                  </p>
                </div>
                <DeleteBtn onClick={() => handleDelete(id)}>
                  <img src={deleteIcon} alt="delete button" />
                </DeleteBtn>
              </SCartListItem>
            );
          })}
        </SCartList>
        {!cart.length ? null : <SButton>Checkout</SButton>}
      </div>
    </SCart>
  );
};

export default Cart;
