import styled from 'styled-components';
import { devices } from '../../shared/constants';

export const ProductSection = styled.section`
  padding: 3rem;
  @media ${devices.mobileL} {
    margin: auto;
    max-width: 50rem;
  }
  @media ${devices.laptop} {
    max-width: none;
    width: 90%;
    display: flex;
    align-items: center;
    margin: 6rem;
    gap: 5%;
  }
`;

export const ProductImages = styled.div`
  position: relative;
  max-width: 45rem;
  margin: auto;

  & > img {
    @media ${devices.mobileL} {
      border-radius: 1rem;
      overflow: hidden;
    }
  }
`;

export const SThumbnailImgs = styled.div`
  margin-top: 2rem;
  justify-content: space-between;
  display: none;

  @media ${devices.laptop} {
    display: flex;
  }
`;

export const SThumbnailImg = styled.div`
  width: 8rem;
  border-radius: 1rem;

  overflow: hidden;
  border: ${(props) =>
    props.active ? '2px solid var(--clr-primary)' : 'none'};
  cursor: pointer;

  &:hover > img {
    transition: all 0.25s;
    opacity: 0.6;
  }

  & > img {
    opacity: ${(props) => (props.active ? 0.6 : 1)};
  }
`;

export const ControlBtn = styled.button`
  width: 4rem;
  height: 4rem;
  margin: auto;
  background-color: var(--clr-white);
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: grid;
  place-content: center;
  cursor: ${(props) => (props.disabled ? 'default' : 'cursor')};

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }

  @media ${devices.laptop} {
    display: none;
  }
`;

export const ProductDetail = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 55rem;

  & > .company {
    font-size: 1.4rem;
    color: var(--clr-primary);
    text-transform: uppercase;
    font-weight: 700;
  }

  & > p {
    color: var(--clr-blue-dark-grayish);
  }

  @media ${devices.laptop} {
    gap: 3vw;
  }
`;

export const ProductPrice = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  & > .curPrice {
    font-size: 2.8rem;
    font-weight: 700;
  }

  & > .discountTag {
    margin-right: auto;
    padding: 0.5rem;
    display: inline-block;
    font-weight: 700;
    color: var(--clr-primary);
    background-color: var(--clr-primary-pale);
    border-radius: 0.5rem;
  }

  & > .oldPrice {
    color: var(--clr-blue-grayish);
    text-decoration: line-through;
    @media ${devices.laptop} {
      width: 100%;
    }
  }

  @media ${devices.laptop} {
    gap: 1rem;
    flex-wrap: wrap;
  }
`;

export const ProductOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${devices.laptop} {
    flex-direction: row;
  }
`;

export const NumInput = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: hsla(220, 14%, 75%, 0.2);
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  border-radius: 0.5rem;

  input {
    width: 100%;
    font-family: inherit;
    font-size: 1.6rem;
    background-color: transparent;
    text-align: center;
    border: none;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
  }
`;
