// Styled Components
import { StyledSelect } from './FilterStyle';

//Custom Hook
import { useCountryContext } from '../../store/CountryContextProvider';

const regionList = ['africa', 'americas', 'asia', 'europe', 'oceania'];

const Filter = () => {
  const { selectRegion } = useCountryContext();

  const handleChange = (e) => {
    selectRegion(e.target.value);
  };

  return (
    <StyledSelect onChange={handleChange}>
      <option value="all" className="option">
        all
      </option>
      {regionList.map((region, index) => (
        <option key={index} value={region}>
          {region}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Filter;
