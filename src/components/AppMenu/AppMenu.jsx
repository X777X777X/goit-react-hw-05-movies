import { NavItem, NavList } from './AppMenu.styled';

export const AppMenu = () => {
  return (
    <NavList>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
    </NavList>
  );
};
