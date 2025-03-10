import { connectLogger, createCtx } from '@reatom/framework'
import { reatomContext } from '@reatom/npm-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'
import { Toaster } from 'react-hot-toast'

export const ctx = createCtx()

if (import.meta.env.DEV) {
  connectLogger(ctx)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <reatomContext.Provider value={ctx}>
      <Toaster position='top-right' reverseOrder={true} />
      <App />
    </reatomContext.Provider>
  </StrictMode>,
)
