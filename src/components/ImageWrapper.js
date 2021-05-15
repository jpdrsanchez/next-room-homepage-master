import Image from 'next/image';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  @media (max-width: 49.9375em) {
    height: 14.875rem;
  }
`;

const ImageWrapper = ({ url }) => {
  return (
    <Wrapper>
      <Image
        src={url}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        quality={100}
      />
    </Wrapper>
  );
};

export default ImageWrapper;
