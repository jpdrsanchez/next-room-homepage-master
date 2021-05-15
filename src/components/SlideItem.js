import Image from 'next/image';
import styled from 'styled-components';
import Arrow from './Arrow';

const Section = styled.section`
  display: grid;

  @media (min-width: 56.25em) {
    grid-template-columns: 1fr 400px;
    height: 534px;
  }

  @media (min-width: 75em) {
    grid-template-columns: 1fr 600px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;

  @media (max-width: 35.9375em) {
    display: none;
  }

  @media (max-width: 56.1875em) {
    height: 22.5rem;
  }
`;

const MobileWrapper = styled.div`
  position: relative;
  height: 22.5rem;

  @media (min-width: 36em) {
    display: none;
  }
`;

const Content = styled.div`
  position: relative;
  padding: 4.5rem 2rem;

  @media (min-width: 56.25em) {
    padding: 3.75rem 1.875rem;
  }

  @media (min-width: 75em) {
    padding: 7.5rem 6.25rem;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: -1.66667px;
    line-height: 1.9375rem;
    margin-bottom: 0.875rem;

    @media (min-width: 36em) {
      font-size: 2.5rem;
      line-height: 2.8125rem;
      margin-bottom: 1.375rem;
    }
  }

  p {
    color: var(--grey);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: -0.25px;
    line-height: 1.25rem;
    margin-bottom: 3.25rem;

    @media (min-width: 36em) {
      margin-bottom: 2rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.625rem;
    line-height: 1rem;
    text-transform: uppercase;
    transition: all 0.3s;

    span {
      margin-right: 2.6875rem;
    }

    svg {
      path {
        transition: all 0.3s;
      }
    }

    &:hover {
      color: var(--grey);
      svg {
        path {
          fill: var(--grey);
        }
      }
    }
  }
`;

const SlideItem = ({ title, text, link, imageDesktop, imageMobile }) => {
  return (
    <Section>
      <ImageWrapper>
        <Image
          src={`/${imageDesktop}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={95}
        />
      </ImageWrapper>
      <MobileWrapper>
        <Image
          src={`/${imageMobile}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={95}
        />
      </MobileWrapper>
      <Content>
        <h1>{title}</h1>
        <p>{text}</p>
        <a href={link}>
          <span>Shop Now</span>
          <Arrow fill="#000" />
        </a>
      </Content>
    </Section>
  );
};

export default SlideItem;
