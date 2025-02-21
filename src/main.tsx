import { connectLogger, createCtx } from '@reatom/framework'
import { reatomContext } from '@reatom/npm-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './components/ThemeProvider'
import './index.css'
import { App } from './App'

export const ctx = createCtx()

if (import.meta.env.DEV) {
  connectLogger(ctx)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <reatomContext.Provider value={ctx}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </reatomContext.Provider>
  </StrictMode>,
)
