import { connectLogger, createCtx } from '@reatom/framework'
import { reatomContext } from '@reatom/npm-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './index.css'

export const ctx = createCtx()

connectLogger(ctx)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <reatomContext.Provider value={ctx}>
      <App />
    </reatomContext.Provider>
  </StrictMode>,
)
