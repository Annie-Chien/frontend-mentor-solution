import styled from 'styled-components';
import { devices } from '../../shared/constants';

export const SNavbar = styled.nav`
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 3rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--clr-white);

  & > .toggleBtn {
    transition: transform 0.25s;

    &:hover {
      transform: scale(1.2);
    }

    @media ${devices.laptop} {
      display: none;
    }
  }

  @media ${devices.laptop} {
    border-bottom: 1px solid var(--clr-blue-grayish);
  }
`;

export const SMenuOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.show ? 'block' : 'none')};
`;

export const SMenu = styled.div`
  width: 50%;
  padding: 8rem 2rem;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 100;
  background-color: var(--clr-white);
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in;

  @media ${devices.laptop} {
    padding: 0;
    position: static;
    transform: translateX(0);
  }

  & > .closeBtn {
    position: absolute;
    top: 2rem;
    left: 2rem;
    transition: transform 0.25s;

    &:hover {
      transform: scale(1.2);
    }

    @media ${devices.laptop} {
      display: none;
    }
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media ${devices.laptop} {
      flex-direction: row;
    }
  }

  & > ul > li {
    font-weight: 700;
    padding: 1rem;
    transition: border 0.3s;
    cursor: pointer;
    position: relative;

    @media ${devices.laptop} {
      font-weight: 400;
      padding-left: 0;
      color: var(--clr-blue-dark-grayish);
    }

    &::after {
      content: '';
      width: 0%;
      position: absolute;
      bottom: 0rem;
      left: 1rem;
      right: 0rem;
      transition: all 0.25s;
      height: 3px;
      background-color: var(--clr-primary);
      border-radius: 5rem;

      @media ${devices.laptop} {
        left: 0rem;
        bottom: -2.5rem;
      }
    }

    &:hover::after {
      width: 70%;

      @media ${devices.laptop} {
        width: 100%;
      }
    }
  }

  @media ${devices.tablet} {
    margin-right: auto;
    flex-direction: row;
  }
`;

export const SCartBtn = styled.button`
  position: relative;
  margin-left: auto;

  &::before {
    content: attr(data-num);
    padding-inline: 1rem;
    position: absolute;
    top: -1.4rem;
    right: -1.4rem;
    color: var(--clr-white);
    background-color: var(--clr-primary);
    border-radius: 5rem;
  }

  & > img {
    width: 2.5rem;
  }
`;

export const SUserBtn = styled.button`
  width: 5rem;
  border-radius: 50%;

  transition: border 0.3s;

  &:hover {
    border: 2px solid var(--clr-primary);
  }
`;
