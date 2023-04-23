import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 20px 80px 0;
  background: #ffff;
  position: sticky;
  top: 0;
  justify-content: space-between;
  align-items: center;
  z-index: 99999;
`;

export const HeaderLogo = styled.h1`
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: 600;
  line-height: inherit;
  display: flex;
`;

export const HeaderMenu = styled.nav`
  display: block;
`;

export const HeaderMenuList = styled.ul`
  display: flex;

  & > li {
    list-style: none;
    display: list-item;
    text-align: -webkit-match-parent;
  }

  & > li > a:hover {
    color: #185ca5;
  }

  & > li:first-child > a {
    padding: 40px 30px 40px 0;
  }

  & > li:not(:first-child):not(:last-child) > a {
    padding: 40px 30px;
  }

  & li:last-child > a {
    padding: 40px 0 40px 30px;
  }

  & > li > a {
    display: flex;
    font-size: 22px;
    color: #111;
    font-weight: 500;
    line-height: 1;
    transition: all 0.4s;
  }
`;
