import React, { useState } from 'react';
import styled from 'styled-components';
import { opacity, transform } from '../styles/animations';

const Wrapper = styled.header`
  position: absolute;
  top: 3rem;
  left: 1.5rem;
  z-index: 999;
  display: flex;
  align-items: center;

  @media (max-width: 56.1875em) {
    width: calc(100% - 3rem);
  }

  @media (min-width: 56.25em) {
    top: 4rem;
    left: 4rem;
  }

  div {
    @media (max-width: 56.1875em) {
      position: absolute;
      z-index: 999;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  nav {
    @media (max-width: 56.1875em) {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      z-index: 10000;
    }

    @media (min-width: 56.25em) {
      margin-left: 3.5rem;
    }

    &.active {
      @media (max-width: 56.1875em) {
        display: block;
        opacity: 0;
        animation: ${opacity} 0.3s forwards;
      }
    }
  }

  ul {
    display: flex;
    align-items: center;

    @media (max-width: 56.1875em) {
      background: var(--white);
      width: 100%;
      padding-top: 3.125rem;
      padding-bottom: 2.9375rem;
      justify-content: flex-end;
      padding-right: 1.5rem;
      transform: translateY(-100%);
      animation: ${transform} 0.3s forwards;
      animation-delay: 0.3s;
    }
  }

  li {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  a {
    color: var(--black);
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 0.8125rem;
    letter-spacing: -0.5px;
    display: block;
    position: relative;

    @media (min-width: 56.25em) {
      color: var(--white);
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 1rem;
      height: 0.125rem;
      background: var(--white);
      bottom: -0.5625rem;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0;
      transition: all 0.3s;
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }
  }

  button {
    width: 1.25rem;
    height: 0.875rem;
    background: none;
    border: none;
    appearance: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 10003;

    &::before {
      content: '';
      display: block;
      width: 100%;
      height: 0.125rem;
      background: var(--white);
      box-shadow: 0 0.375rem var(--white), 0 -0.375rem var(--white);
      transition: all 0.3s;
    }

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.125rem;
      background: var(--white);
      position: absolute;
      transition: all 0.3s;
    }

    &.active {
      &::after {
        transform: rotate(-45deg);
        background: rgba(0, 0, 0, 0.2);
      }

      &::before {
        transform: rotate(45deg);
        box-shadow: none;
        background: rgba(0, 0, 0, 0.2);
      }
    }
    @media (min-width: 56.25em) {
      display: none;
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <button
        aria-label="Open Menu"
        type="button"
        onClick={() => setOpen(!open)}
        className={open ? 'active' : ''}
      ></button>
      <div>
        <img src="/images/logo.svg" alt="Room" />
      </div>
      <nav className={open ? 'active' : ''}>
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Header;
