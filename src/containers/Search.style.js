import styled, { css } from 'styled-components';
import arrowDownImg from 'assets/Images/select.gif';

export const SearchBox = styled.div`
  position: relative;
  padding: 0 300px 0 210px;
  height: 63px;
  margin-bottom: 30px;
`;

export const SearchCategory = styled.div`
  position: absolute;
  width: 200px;
  height: 100%;
  left: 0;
  top: 0;
`;

export const Select = styled.select`
  position: relative;
  width: 200px;
  height: 100%;
  appearance: none;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 0 60px 0 20px;
  font-size: inherit;
  background: url(${arrowDownImg}) right center no-repeat;
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: inherit;
  padding: 0 20px;
  vertical-align: middle;
  box-sizing: border-box;
`;

export const ButtonBox = styled.div`
  width: 290px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
`;

export const Button = styled.button`
  float: left;
  width: 49%;
  margin-left: 1%;
  height: 100%;
  color: #fff;
  background: #666;
  border-radius: 5px;
  font-size: inherit;

  ${({ color }) =>
    color === 'blue' &&
    css`
      background: #006eb7;
    `}

  & > span {
    ${({ img }) => css`
      padding-right: 30px;
      background: url(${img}) right center no-repeat;
    `}
  }
`;
