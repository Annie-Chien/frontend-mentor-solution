import styled from 'styled-components';
import { devices } from '../../shared/constants';

export const STopSaleSection = styled.section`
  width: 95%;
  margin: auto;
  padding-block: 3rem;

  @media ${devices.tablet} {
    width: 100%;
  }
`;
export const STopSaleList = styled.ul`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2.5rem;
`;

export const STopSaleListItem = styled.li`
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: box-shadow 0.3s;
  display: grid;

  & > .productImg {
    max-height: 30rem;

    img {
      height: 30rem;
      width: 100%;
      object-fit: cover;
    }
  }

  & > .productText {
    padding: 2rem 1rem;
    display: grid;
    grid-template-columns: 1fr 20%;
    grid-template-rows: max-content max-content;
    row-gap: 0.5rem;

    & > .name {
      font-weight: 400;
    }

    & > .price {
      font-weight: 700;
    }

    & > button {
      font-size: 2rem;
      align-self: center;
      padding: 1rem;
      background-color: var(--clr-primary);
      grid-column: 2/3;
      grid-row: 1/-1;
      color: var(--clr-white);
      border-radius: 1rem;
    }
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
