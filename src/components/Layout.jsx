import { Outlet } from 'react-router-dom';
import { Menu } from './AppMenu/AppMenu';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <>
      <Menu />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
