//Styles
import {
  STopSaleList,
  STopSaleListItem,
  STopSaleSection,
} from './TopSaleSection.style';
//Data
import { PRODUCTS } from '../../shared/data';
//React Redux
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

//===========================================================//

const TopSaleSection = () => {
  const dispatch = useDispatch();

  const handleClickAdd = (id) => {
    dispatch(addToCart({ id, quantity: 1 }));
  };

  return (
    <STopSaleSection>
      <h2>Our Top Sales</h2>
      <STopSaleList>
        {PRODUCTS.filter((item) => item.id !== '000').map((item) => {
          const { id, name, price, img } = item;
          return (
            <STopSaleListItem key={id}>
              <div className="productImg">
                <img src={img} />
              </div>

              <div className="productText">
                <h4 className="name">{name}</h4>
                <span className="price">${price}</span>
                <button onClick={() => handleClickAdd(id)}>+</button>
              </div>
            </STopSaleListItem>
          );
        })}
      </STopSaleList>
    </STopSaleSection>
  );
};

export default TopSaleSection;
