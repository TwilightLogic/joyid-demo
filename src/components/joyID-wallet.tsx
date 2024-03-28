import { useState } from 'react'

import { connect, signChallenge, ConnectResponseData } from '@joyid/ckb'
import { verifySignature } from '@joyid/core'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'

export const JoyIDWallet = () => {
  const { toast } = useToast()
  const [joyidInfo, setJoyidInfo] = useState<ConnectResponseData | null>(null)
  const [challenge, setChallenge] = useState<string>('Sign this for me')
  const [signedMessage, setSignedMessage] = useState<string>('')

  const handleClick = async () => {
    try {
      const authData = await connect()
      setJoyidInfo(authData)
      console.log(`JoyID user info:`, authData)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSign = async () => {
    if (joyidInfo !== null) {
      const res = await signChallenge(challenge, joyidInfo.address)
      setSignedMessage(JSON.stringify(res, null, 2))
    }
  }

  const handleVerify = async () => {
    const res = await verifySignature(JSON.parse(signedMessage))
    if (res) {
      toast({
        title: 'Signature verified successfully.',
        action: <ToastAction altText="OK">OK 💚</ToastAction>,
      })
    } else {
      toast({
        title: 'Something went wrong.',
        action: <ToastAction altText="OK">Try again 💥</ToastAction>,
      })
    }
  }

  return (
    <>
      {joyidInfo ? null : (
        <Button
          variant="default"
          size="default"
          onClick={handleClick}
          className="bg-[#d0ff00] text-primary hover:bg-[#a6cc00]"
        >
          Hello JoyID!
        </Button>
      )}
      {joyidInfo && !signedMessage ? (
        <div className="flex items-center justify-center gap-3">
          <Input
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
          />
          <Button
            variant="default"
            size="default"
            onClick={handleSign}
            className="bg-[#d0ff00] text-primary hover:bg-[#a6cc00]"
          >
            Sign With JoyID
          </Button>
        </div>
      ) : null}
      {joyidInfo && signedMessage ? (
        <div className="flex flex-col items-center justify-center gap-3">
          <Textarea
            value={signedMessage}
            onChange={(e) => setSignedMessage(e.target.value)}
            className="w-[450px] h-[400px]"
          />
          <Button
            variant="default"
            size="default"
            onClick={handleVerify}
            className="w-full bg-[#d0ff00] text-primary hover:bg-[#a6cc00]"
          >
            Verify Signiture
          </Button>
        </div>
      ) : null}
    </>
  )
}
