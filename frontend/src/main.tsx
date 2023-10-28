import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './/app/store.ts'
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <NextThemesProvider attribute='class' defaultTheme='dark'>
          <NextUIProvider>
            <main className="dark text-foreground bg-background">
              <App />
            </main>
          </NextUIProvider>
        </NextThemesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
