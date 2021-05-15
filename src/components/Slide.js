import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SlideItem from './SlideItem';
import data from '../data.json';

const SlideWrapper = styled.div`
  overflow: hidden;
  position: relative;

  nav {
    position: absolute;
    right: 0;
    display: flex;
    transform: translateY(-100%);

    @media (max-width: 56.1875em) {
      top: 22.5rem;
    }

    @media (min-width: 56.25em) {
      bottom: 0;
      right: 400px;
      transform: translateX(100%);
    }

    @media (min-width: 75em) {
      right: 600px;
    }

    button {
      background-color: var(--black);
      background-repeat: no-repeat;
      background-position: center;
      border: none;
      appearance: none;
      width: 3.5rem;
      height: 3.5rem;
      transition: all 0.3s;

      @media (max-width: 56.1875em) {
        background-size: 0.5rem;
      }

      @media (min-width: 56.25em) {
        width: 5rem;
        height: 5rem;
      }

      &:focus {
        outline: none;
      }

      &:hover {
        background-color: var(--dark-grey);
      }

      &:nth-of-type(1) {
        background-image: url('images/icon-angle-left.svg');
      }

      &:nth-of-type(2) {
        background-image: url('images/icon-angle-right.svg');
      }
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  transition: all 0.3s;

  & > * {
    width: 100%;
    flex-shrink: 0;
  }
`;

const Slide = () => {
  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
    else setCurrent(data.length - 1);
  };
  const nextSlide = () => {
    if (current < data.length - 1) setCurrent(current + 1);
    else setCurrent(0);
  };

  const slide = useRef();
  const [current, setCurrent] = useState(0);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const changePosition = () => {
      const width = slide.current.offsetWidth;
      setPosition(-(width * current));
    };
    changePosition();

    window.addEventListener('resize', changePosition);

    return () => {
      window.removeEventListener('resize', changePosition);
    };
  }, [current]);

  useEffect(() => {}, []);

  return (
    <SlideWrapper>
      <Wrapper ref={slide} style={{ transform: `translateX(${position}px)` }}>
        {data.map((slide) => (
          <SlideItem
            key={slide.id}
            title={slide.title}
            text={slide.description}
            link={slide.link}
            imageDesktop={slide.imageDesktop}
            imageMobile={slide.imageMobile}
          />
        ))}
      </Wrapper>
      <nav>
        <button
          aria-label="Previous Slide"
          type="button"
          onClick={prevSlide}
        ></button>
        <button
          aria-label="Next Slide"
          type="button"
          onClick={nextSlide}
        ></button>
      </nav>
    </SlideWrapper>
  );
};

export default Slide;
