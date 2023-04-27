import styled from 'styled-components';

export const WriteBox = styled.div`
  max-width: 1440px;
  margin: auto;
  border-top: 1px solid #9c9c9c;
`;

export const Group = styled.div`
  border-bottom: 1px solid #ddd;
  display: table;
  width: 100%;

  & > * {
    display: table-cell;
    vertical-align: middle;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const Input = styled.input`
  padding: 0 15px;
  border: 1px solid #ccc;
  height: 40px;
  width: 100%;
  max-width: 500px;
`;

export const Title = styled.strong`
  width: 180px;
  padding: 25px 0 25px 15px;
  font-weight: 500;
  word-break: keep-all;

  & > span {
    color: red;
  }
`;

export const Content = styled.div`
  height: 60px;
`;

export const Textarea = styled.textarea`
  min-height: 150px;
  max-height: 1024px;
  height: 10em;
  padding: 15px;
  width: 100%;
  border: 1px solid #d0d0d0;
  overflow-x: hidden;
  overflow-y: auto;
  resize: none;
  background: #fff;
  vertical-align: middle;
`;

export const ButtonBox = styled.div`
  text-align: right;
  margin: 30px 0;
`;
