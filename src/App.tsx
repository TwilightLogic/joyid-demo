import { CkbDemo } from './components/ckb-demo'
import { JoyIDWallet } from './components/joyID-wallet'

import { Toaster } from '@/components/ui/toaster'

import '../app/globals.css'

export const App = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-muted gap-3 font-mono bg-gray-900">
      <CkbDemo />
      <JoyIDWallet />
      <Toaster />
    </div>
  )
}
