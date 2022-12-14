//Styles
import { SFooter } from './Footer.style';
//Images
import { logoWhite } from '../../shared/images';

//===========================================================//

const Footer = () => {
  return (
    <SFooter>
      <img src={logoWhite} alt="logo" />
      <p>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Annie-Chien">Annie Chien</a>.
      </p>
    </SFooter>
  );
};

export default Footer;
