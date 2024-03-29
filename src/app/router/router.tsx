import { MainLayout } from 'layouts/MainLayout';
import { Error } from 'pages/error/ui/Error';
import { Main } from 'pages/main';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

const enum BASE_PATHS {
  MAIN = '/',
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />} errorElement={<Error />}>
      <Route path={BASE_PATHS.MAIN} element={<Main />}></Route>
    </Route>,
  ),
);
