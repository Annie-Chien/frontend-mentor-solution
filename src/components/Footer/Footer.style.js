import styled from 'styled-components';
import { devices } from '../../shared/constants';

export const SFooter = styled.footer`
  width: 100vw;
  padding-top: 3rem;
  font-size: 1.3rem;
  text-align: center;
  color: var(--clr-white);
  background-color: var(--clr-blue-dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  a {
    color: var(--clr-primary);
    text-decoration: none;
  }

  /* @media ${devices.laptop} {
    position: fixed;
  } */
`;
