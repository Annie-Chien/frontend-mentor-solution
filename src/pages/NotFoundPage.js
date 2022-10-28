// React Router
import { Link } from 'react-router-dom';
// Styled Components
import { MainContainer, Button, ImgContainer, Text } from './PageStyle';

const NotFoundPage = () => {
  return (
    <MainContainer>
      <ImgContainer>
        <img src="./images/page_not_found.svg" alt="404 illustration" />
      </ImgContainer>
      <Text>Oops, we can't find the page you're looking for.</Text>
      <Button>
        <Link to="/">Home</Link>
      </Button>
    </MainContainer>
  );
};

export default NotFoundPage;
