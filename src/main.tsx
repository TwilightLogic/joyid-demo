import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { initConfig } from '@joyid/ckb'

initConfig({
  name: 'JoyID demo',
  logo: 'https://fav.farm/🆔',
  joyidAppURL: 'https://testnet.joyid.dev',
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
