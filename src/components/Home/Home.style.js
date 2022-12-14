import styled from 'styled-components';
import { devices } from '../../shared/constants';
import { herobanner, promoteLeft, promoteRight } from '../../shared/images';

export const HeroBanner = styled.header`
  margin-top: 3rem;
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.4),
      rgba(255, 255, 255, 0.2)
    ),
    url(${herobanner});
  background-position: center;
  background-size: cover;
`;

export const SPromoteSection = styled.section`
  width: 95%;
  margin: 3rem auto;
  display: flex;
  gap: 3rem;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
  }

  @media ${devices.laptop} {
    width: 100%;
  }

  & > * {
    width: 100%;
    height: 20rem;
    border-radius: 0.5rem;
    background-size: cover;
    position: relative;

    span {
      font-weight: 700;
      text-transform: uppercase;
      display: inline-block;
      position: absolute;
    }
  }

  & > .left {
    background-image: linear-gradient(
        to top,
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      url(${promoteLeft});
    background-position: center right;

    span {
      width: 20%;
      min-width: 10rem;
      font-size: 5rem;
      right: 3rem;
      top: 3rem;
      background-color: var(--clr-white);
      text-align: center;
      word-break: break-all;
    }
  }

  & > .right {
    background-image: url(${promoteRight});
    background-position: center left;

    span {
      width: 55%;
      font-size: 3rem;
      left: 3rem;
      top: 3rem;
    }

    .shopBtn {
      background-color: var(--clr-blue-dark);
      color: var(--clr-white);
      padding: 1rem;
      font-size: 1.6rem;
      text-transform: uppercase;
      border-radius: 0.5rem;
      position: absolute;
      bottom: 10%;
      left: 3rem;
    }
  }
`;
