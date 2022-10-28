// Styled Components
import { SearchForm } from './SearchStyle';
//Custom Hook
import { useCountryContext } from '../../store/CountryContextProvider';

const Search = () => {
  const { enterName } = useCountryContext();

  return (
    <SearchForm>
      <label htmlFor="country">
        <i className="fa-solid fa-magnifying-glass"></i>
      </label>
      <input
        type="text"
        id="country"
        placeholder="Search for a country..."
        maxLength="20"
        onChange={(e) => enterName(e.target.value)}
      />
    </SearchForm>
  );
};

export default Search;
