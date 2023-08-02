import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  padding: 12px 24px;
  text-decoration: none;
  color: #333;
  font-size: 18px;
  background-color: #f0f0f0;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #007bff;
    color: white;
  }
  &.active {
    background-color: #007bff;
    color: white;
  }
`;

export const NavList = styled('nav')`
  background-color: #007bff;
  display: flex;
  padding: 16px;
  gap: 16px;
  justify-content: flex-end;
`;