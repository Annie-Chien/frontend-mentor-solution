// React Router
import { Routes, Route, useLocation } from 'react-router-dom';
//React Components
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import DestinationPage from './pages/DestinationPage';
import CrewPage from './pages/CrewPage';
import TechPage from './pages/TechPage';
import NotFoundPage from './pages/NotFoundPage';
//Framer motion
import { AnimatePresence } from 'framer-motion';

//========================================================//

const App = () => {
  const location = useLocation();

  return (
    <Layout>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/destination" element={<DestinationPage />} />
          <Route path="/crew" element={<CrewPage />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;
