import styled from 'styled-components';

export const TableBox = styled.table`
  width: 100%;
  border-spacing: 0px;
  border: 0px;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const Tr = styled.tr`
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
`;

export const Th = styled.th`
  padding: 20px 1em;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-weight: 500;
  color: #000;
  white-space: nowrap;
`;

export const Tbody = styled.tbody`
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
`;

export const Td = styled.td`
  padding: 20px 1em;
  border-bottom: 1px solid #ddd;
  text-align: center;
  font-weight: 300;
`;

export const ReviewBox = styled.div`
  position: relative;
  width: 80%;
  margin: 40px 100px;
`;

export const Review = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  white-space: pre-wrap;
`;

export const H2 = styled.h2`
  margin-bottom: 20px;
`;
