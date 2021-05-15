import styled from 'styled-components';

const Section = styled.section`
  padding: 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 50em) {
    height: calc(100vh - 534px);
    min-height: 266px;
    padding: 4.25rem 3rem;
  }

  h1 {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.3125rem;
    line-height: 1.375rem;
    text-transform: uppercase;
    margin-bottom: 0.5625rem;
  }

  p {
    color: var(--grey);
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: -0.25px;
    line-height: 1.25rem;
  }
`;

const Content = () => {
  return (
    <Section>
      <h1>About our furniture</h1>
      <p>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
    </Section>
  );
};

export default Content;
