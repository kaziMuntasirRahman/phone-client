import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './pages/Root.jsx'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/Routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}>
      <Root />
    </RouterProvider>
  </StrictMode>,
)
