import Content from '../components/Content';
import ImageWrapper from '../components/ImageWrapper';
import Slide from '../components/Slide';
import Template from '../components/Template';

const Home = () => {
  return (
    <>
      <Template>
        <Slide />
        <ImageWrapper url="/images/image-about-dark.jpg" />
        <Content />
        <ImageWrapper url="/images/image-about-light.jpg" />
      </Template>
    </>
  );
};

export default Home;
