import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto 100px;
  color: #93989e;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
  color: #fff;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableTr = styled.tr`
  &:nth-child(2n) {
    background-color: #ecf1f4;
  }
`;

export const Th = styled.th`
  padding: 15px 80px;
  & + & {
    border-left: 1px solid #fff;
  }
`;

export const Td = styled.td`
  padding: 15px 90px;

  &:first-child {
    text-transform: capitalize;
  }

  & + & {
    border-left: 1px solid #e3e8ea;
  }
`;
