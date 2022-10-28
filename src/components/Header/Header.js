// Styled Components
import { Navbar, SwitchBtn, SwitchBall } from './HeaderStyle';

const Header = ({ switchToDarkMode, isDarkMode }) => {
  return (
    <header>
      <Navbar>
        <h1>Where in the world?</h1>
        <SwitchBtn onClick={switchToDarkMode}>
          <i className="fa-regular fa-sun"></i>
          <i className="fa-regular fa-moon"></i>
          <SwitchBall isDarkMode={isDarkMode}></SwitchBall>
        </SwitchBtn>
      </Navbar>
    </header>
  );
};

export default Header;
