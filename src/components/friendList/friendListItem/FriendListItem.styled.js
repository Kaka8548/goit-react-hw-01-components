import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 10px;
  justify-content: start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  width: 25%;
  padding: 10px;
  background-color: white;
  font-size: 18px;
  font-weight: 500;
`;

export const Status = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 50px;
`;

export const Name = styled.p``;
