import styled from 'styled-components';
import { devices } from '../../shared/constants';

export const SCart = styled.div`
  width: 95%;
  height: 30rem;
  position: fixed;
  top: 13%;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
  background-color: var(--clr-white);
  border-radius: 1rem;
  transform: ${(props) => (props.show ? 'translateY(0)' : 'translateY(-150%)')};
  transition: transform 0.5s ease-in-out;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);

  @media ${devices.tablet} {
    left: auto;
    right: 8rem;
    max-width: 50rem;
  }

  @media ${devices.laptop} {
    top: 15%;
  }

  & > h3 {
    padding: 2rem;
    border-bottom: 0.5px solid var(--clr-blue-grayish);
  }

  & > .content {
    padding: 1rem;
    height: 23rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
  }

  & > .content > p {
    line-height: 20rem;
    text-align: center;
    color: var(--clr-blue-grayish-dark);
  }
`;

export const SCartList = styled.ul`
  margin-bottom: auto;
`;

export const SCartListItem = styled.li`
  display: flex;
  gap: 1rem;
  color: var(--clr-blue-dark-grayish);
  margin-bottom: 1rem;
  max-height: 5rem;

  h4 {
    font-weight: 400;
  }

  & > img {
    width: 5rem;
    border-radius: 0.5rem;
  }

  & > .productInfo {
    width: 100%;
    display: grid;
    align-items: center;
  }

  .totalPrice {
    color: var(--clr-blue-dark);
    font-weight: 700;
    margin-left: 1rem;
  }
`;

export const DeleteBtn = styled.button`
  width: 10%;

  & > img {
    margin: auto;
  }
`;
