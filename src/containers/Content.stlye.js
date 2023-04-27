import styled, { css } from 'styled-components';
import pencil from 'assets/Images/ico-pencil.png';
import list from 'assets/Images/ico-list.png';

export const Content = styled.div`
  max-width: 1440px;
  margin: auto;
`;

export const ButtonBox = styled.div`
  right: 0;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  text-align: center;
  width: 230px;
  height: 67px;
  border: 1px solid #666;
  font-size: 16px;
  border-radius: 5px;
  font-weight: 500;
  background-color: transparent;
  margin-left: 4px;
  padding: 0;
  overflow: visible;
  vertical-align: middle;

  & > span {
    padding-right: 30px;
    background: url(${list}) right center no-repeat;

    ${({ pen }) =>
      pen &&
      css`
        background: url(${pencil}) right center no-repeat;
      `}
  }
`;
