import styled from 'styled-components';
import { devices } from '../constants';

const MainContainer = styled.main`
  width: 90%;
  margin: auto;
`;

const SearchFilterContainer = styled.div`
  margin: 3rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

// BUTTON
const Button = styled.button`
  font-size: 1.5rem;
  padding: 1rem 2rem;
  font-family: inherit;
  margin: 0.5rem 0;
  color: inherit;
  background-color: var(--color-element);
  border-radius: 0.5rem;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  opacity: ${(props) => (props.disabled ? '0' : '1')};
  transform: background-color 0.25s;

  &:hover {
    background-color: var(--color-hover);
  }
`;

const BorderBtn = styled(Button)`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

const ReturnBtn = styled(Button)`
  margin: 4rem 0;
`;

//DETAIL

const DetailContainer = styled.div`
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

const DetailImg = styled.div`
  @media ${devices.tablet} {
    width: 45%;
  }

  img {
    width: 100%;
  }
`;

const DetailText = styled.div`
  display: grid;
  gap: 2rem;
  column-gap: 3rem;

  @media ${devices.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  & > h2 {
    line-height: 1;
    @media ${devices.tablet} {
      grid-column: 1 / 3;
    }
  }

  & > * {
    line-height: 1.8;
  }
`;

const BordersContainer = styled.div`
  @media ${devices.tablet} {
    grid-column: 1 / 3;
  }
`;

//NOT FOUND PAGE
const ImgContainer = styled.div`
  margin: 3rem 0;
  img {
    max-width: 100%;
  }
`;

const Text = styled.p`
  margin: 2rem 0;
`;

export {
  MainContainer,
  SearchFilterContainer,
  Button,
  ReturnBtn,
  BorderBtn,
  DetailContainer,
  DetailImg,
  DetailText,
  BordersContainer,
  ImgContainer,
  Text,
};
