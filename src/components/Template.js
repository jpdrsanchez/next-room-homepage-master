import styled from 'styled-components';

const Main = styled.main`
  display: grid;

  @media (min-width: 50em) {
    grid-template-areas:
      'slide slide slide'
      'leftPhoto content rightPhoto';
    grid-template-columns: 1fr 36.25rem 1fr;
    align-items: stretch;
  }

  & > * {
    &:nth-child(1) {
      @media (min-width: 50em) {
        grid-area: slide;
      }
    }

    &:nth-child(2) {
      @media (min-width: 50em) {
        grid-area: leftPhoto;
      }
    }

    &:nth-child(3) {
      @media (min-width: 50em) {
        grid-area: content;
      }
    }

    &:nth-child(4) {
      @media (min-width: 50em) {
        grid-area: rightPhoto;
      }
    }
  }
`;

const Template = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Template;
