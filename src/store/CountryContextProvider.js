import { useCallback } from 'react';
import { useState, createContext, useContext } from 'react';

const CountryContext = createContext();

export const useCountryContext = () => {
  return useContext(CountryContext);
};

//===============================================//
//              Context Provider                 //
//===============================================//
const CountryContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState({
    parameter: 'all',
    value: null,
  });
  const [nameInput, setNameInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const selectRegion = (value) => {
    setCurrentPage(1);
    if (value === 'all') {
      setSearchTerm({ parameter: 'all', value: null });
    } else {
      setSearchTerm({ parameter: 'region', value });
    }
  };

  const enterName = useCallback((value) => {
    setCurrentPage(1);
    setNameInput(value);
  }, []);

  return (
    <CountryContext.Provider
      value={{
        searchTerm,
        enterName,
        nameInput,
        selectRegion,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
