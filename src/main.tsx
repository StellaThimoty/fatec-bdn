import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './routes/Home';
import Regulamento from './routes/Regulamento';
import Rodadas from './routes/Rodadas';
import Staff from './routes/Staff';
import Tabela from './routes/Tabela';
import './index.css'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
      path: 'home',
      element: <Home/>
      },
      {
      path: 'regulamento',
      element: <Regulamento/>
      },
      {
      path: 'rodadas',
      element: <Rodadas/>
      },
      {
      path: 'staff',
      element: <Staff/>
      },
      {
      path: 'tabela',
      element: <Tabela/>
      }
    ],
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
