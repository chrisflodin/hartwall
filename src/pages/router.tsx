/* existing imports */
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import HomePage from '../pages/HomePage'
import ErrorPage from './ErrorPage/ErrorPage'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<p>Page not found 😢</p>} />
    </Route>
  )
)
