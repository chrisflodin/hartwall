import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { router } from './pages/router'
import Layout from './pages/Layout'
import { HeroProvider } from './context/HeroContext'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HeroProvider>
        <RouterProvider router={router} />
      </HeroProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
