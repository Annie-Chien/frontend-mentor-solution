//React Query
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
// React Router
import { Routes, Route } from 'react-router-dom';
//React Components
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout/Layout';
//React Context
import CountryContextProvider from './store/CountryContextProvider';

const App = () => {
  // Create a client
  const queryClient = new QueryClient();

  return (
    // Provide the client to my app
    <QueryClientProvider client={queryClient}>
      <CountryContextProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </CountryContextProvider>
    </QueryClientProvider>
  );
};

export default App;
