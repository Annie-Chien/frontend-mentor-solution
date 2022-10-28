// React Router
import { Link } from 'react-router-dom';
// React Components
import CountryItem from './CountryItem';
import Loader from '../Loader/Loader';
// Styled Components
import { GirdContainer, Pagination } from './CountryGridStyle';
import { Button } from '../../pages/PageStyle';
// Custom Hook
import { useGetCountries } from '../../api/fetchData';
import { useCountryContext } from '../../store/CountryContextProvider';

const CountryGrid = () => {
  const { searchTerm, nameInput, currentPage, setCurrentPage } =
    useCountryContext();

  const { data, isLoading, isError } = useGetCountries(
    searchTerm.parameter,
    searchTerm.value
  );

  const filterCountries = (enteredName) => {
    return data.filter((item) => {
      const {
        name: { common },
      } = item;
      return common.toLowerCase().includes(enteredName.toLowerCase());
    });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError || data.status === 404) {
    return <h1>Something went wrong! Please try again. </h1>;
  }

  //Pagination

  const filteredList = filterCountries(nameInput);
  let itemsPerPage = 10;
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const countryList = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage >= totalPages) {
      return;
    }
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage <= 1) {
      return;
    }
    setCurrentPage((prev) => prev - 1);
  };

  if (!countryList.length) {
    return <h1>Sorry! No result found ☹️</h1>;
  }

  return (
    <GirdContainer>
      {countryList.map((country) => (
        <li key={country.cca3}>
          <Link to={`/detail/${country.cca3}`}>
            {<CountryItem countryData={country} />}
          </Link>
        </li>
      ))}
      <Pagination>
        <Button onClick={prevPage} disabled={currentPage <= 1}>
          <i className="fa-solid fa-arrow-left"></i>
        </Button>
        <span>{currentPage}</span>
        <Button onClick={nextPage} disabled={currentPage >= totalPages}>
          <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </Pagination>
    </GirdContainer>
  );
};

export default CountryGrid;
