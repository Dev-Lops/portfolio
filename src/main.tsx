import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App.tsx'
import { ThemeProvider } from './components/theme/theme-provider.tsx'

import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
