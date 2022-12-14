//Global Style
import GlobalStyle, { SContainer } from '/src/shared/GlobalStyle';
//Components
import Navbar from '/src/components/Navbar/Navbar';
import Home from './components/Home/Home';
import SpecialProduct from './components/Special/Special';
import Footer from './components/Footer/Footer';
//React Router
import { Routes, Route } from 'react-router-dom';

//========================================================//

const App = () => {
  return (
    <>
      <SContainer>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/special" element={<SpecialProduct />} />
        </Routes>
      </SContainer>
      <Footer />
    </>
  );
};

export default App;
