import { Outlet } from 'react-router-dom';

import s from './MainLayout.styles.scss';

export const MainLayout = () => (
  <div className={s.main}>
    <Outlet />
  </div>
);
