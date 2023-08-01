import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuList = styled.ul`
  background-color: black;
  display: flex;
  padding: 20px;
  gap: 25px;
`;

export const MenuItem = styled(Link)`
  padding: 8px;
  text-decoration: none;
  color: white;
  font-size: 25px;

  &.active {
    background-color: white;
    border-radius: 5px;
    color: black;
  }
`;
