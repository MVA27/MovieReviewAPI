import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import './index.css'
import "@radix-ui/themes/styles.css";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { ROUTES } from './constants/routes.js'
import Home from '../src/pages/Home'
import MovieList from '../src/pages/MovieList'
import DetailedView from './pages/DetailedView';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.HOME} element={<Home/>}/>
      <Route path={ROUTES.DETAIL} element={<DetailedView/>}/>
      <Route path={ROUTES.LIST} element={<MovieList/>}/>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Theme hasBackground={false}>
      <RouterProvider router={router}/>
    </Theme>
  </StrictMode>,
)
