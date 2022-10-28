import styled from 'styled-components';
import { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  margin: 3rem auto;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: conic-gradient(
    black 6deg,
    grey 6deg 45deg,
    grey 45deg 110deg,
    black 110deg 200deg
  );
  position: relative;
  animation: ${rotate} 2s linear infinite;

  &::after {
    content: '';
    width: 3rem;
    height: 3rem;
    background-color: var(--color-background);
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
export { Spinner };
