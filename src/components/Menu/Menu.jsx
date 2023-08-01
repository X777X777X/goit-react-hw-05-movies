import { React } from 'react';
import { MenuList, MenuItem } from '../../pages/Style.styled';

export const Menu = () => {
  return (
    <div>
      <MenuList>
        <MenuItem to="/">Головна</MenuItem>
        <MenuItem to="/movies">Фільми</MenuItem>
      </MenuList>
    </div>
  );
};
