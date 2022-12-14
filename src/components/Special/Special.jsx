import { useState } from 'react';
//Images
import {
  product1,
  product2,
  product3,
  product4,
  product1Sm,
  product2Sm,
  product3Sm,
  product4Sm,
  previousIcon,
  nextIcon,
  plusIcon,
  minusIcon,
  cartWhiteIcon,
} from '../../shared/images';
//Styles
import {
  ProductSection,
  ControlBtn,
  ProductDetail,
  ProductPrice,
  NumInput,
  ProductOrder,
  ProductImages,
  SThumbnailImgs,
  SThumbnailImg,
} from './Special.style';
import { SButton } from '../../shared/GlobalStyle';
//React Redux
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

const productImgList = [product1, product2, product3, product4];
const thumbnailImgList = [product1Sm, product2Sm, product3Sm, product4Sm];

//===========================================================//

const SpecialProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [curImgIndex, setCurImgIndex] = useState(0);
  const dispatch = useDispatch();

  const handleSlideControl = (type) => {
    if (type === 'prev') {
      if (curImgIndex <= 0) return;
      setCurImgIndex((prev) => prev - 1);
    } else {
      if (curImgIndex >= productImgList.length - 1) return;
      setCurImgIndex((prev) => prev + 1);
    }
  };

  const handleClickNumBtn = (type) => {
    if (type === 'plus') {
      setQuantity((prev) => prev + 1);
    } else {
      if (quantity <= 1) return; //最小訂購數量為 1
      setQuantity((prev) => prev - 1);
    }
  };

  const handlePickThumbnail = (index) => {
    setCurImgIndex(index);
  };

  const handleOrder = () => {
    //dummy data: 因為現在只有 sneaker 一項商品
    const product = {
      id: '000',
      name: 'Autumn Limited Edition Sneakers',
      quantity: quantity,
      img: product1Sm,
      price: 125,
    };

    dispatch(addToCart(product));
    setQuantity(1); //重新設定為初始值 1
  };

  return (
    <ProductSection>
      <ProductImages>
        <img
          src={productImgList[curImgIndex]}
          alt="Fall Limited Edition Sneakers"
        />
        <ControlBtn
          className="left"
          onClick={() => handleSlideControl('prev')}
          disabled={curImgIndex <= 0}
        >
          <img src={previousIcon} alt="previous" />
        </ControlBtn>
        <ControlBtn
          className="right"
          onClick={() => handleSlideControl('next')}
          disabled={curImgIndex >= productImgList.length - 1}
        >
          <img src={nextIcon} alt="next" />
        </ControlBtn>

        <SThumbnailImgs>
          {thumbnailImgList.map((item, index) => (
            <SThumbnailImg
              key={index}
              active={index === curImgIndex}
              onClick={() => handlePickThumbnail(index)}
            >
              <img src={item} alt="" />
            </SThumbnailImg>
          ))}
        </SThumbnailImgs>
      </ProductImages>
      <ProductDetail>
        <span className="company">sneaker company</span>
        <h2 className="title">Fall Limited Edition Sneakers</h2>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <ProductPrice>
          <p className="curPrice">$125.00</p>
          <span className="discountTag">50%</span>
          <p className="oldPrice">$250.00</p>
        </ProductPrice>
        <ProductOrder>
          <NumInput>
            <button onClick={() => handleClickNumBtn('minus')}>
              <img src={minusIcon} alt="minus button" />
            </button>
            <input
              type="number"
              min="1"
              max="99"
              step="1"
              value={quantity}
              onChange={(e) => setQuantity(+e.target.value)}
            />
            <button onClick={() => handleClickNumBtn('plus')}>
              <img src={plusIcon} alt="plus button" />
            </button>
          </NumInput>
          <SButton onClick={handleOrder}>
            <img src={cartWhiteIcon} alt="" />
            <span>Add to cart</span>
          </SButton>
        </ProductOrder>
      </ProductDetail>
    </ProductSection>
  );
};

export default SpecialProduct;
