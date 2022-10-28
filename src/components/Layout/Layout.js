import { useState } from 'react';
//React Components
import Header from '../Header/Header.js';
//Styled Components
import { LayoutContainer } from './LayoutStyle.js';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const switchToDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LayoutContainer id={darkMode ? 'dark-mode' : ''}>
      <Header switchToDarkMode={switchToDarkMode} isDarkMode={darkMode} />
      {children}
    </LayoutContainer>
  );
};

export default Layout;
