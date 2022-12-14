//Styles
import { HeroBanner, SPromoteSection } from './Home.style';
//React Router
import { Link } from 'react-router-dom';
//Components
import TopSaleSection from '../Products/TopSaleSection';

//===========================================================//

const Home = () => {
  return (
    <>
      <HeroBanner>
        <h1>Just keep running</h1>
      </HeroBanner>
      <SPromoteSection>
        <Link className="left" to="/special">
          <span className="promoteText">50% OFF</span>
        </Link>
        <div className="right">
          <span className="promoteText">Try something new</span>
          <button className="shopBtn">Shop now</button>
        </div>
      </SPromoteSection>
      <TopSaleSection />
    </>
  );
};

export default Home;
