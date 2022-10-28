import styled from 'styled-components';

const Navbar = styled.nav`
  padding: 1.5rem 2rem;
  background-color: var(--color-element);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.1);
`;

const SwitchBtn = styled.div`
  min-width: 8rem;
  background-color: var(--color-background);
  padding: 1.2rem 1.5rem;
  border-radius: 10rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
`;

const SwitchBall = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: var(--color-element);
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  transition: all 0.5s;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  left: ${(props) => (props.isDarkMode ? '.5rem' : '4.5rem')};
`;
export { Navbar, SwitchBtn, SwitchBall };
