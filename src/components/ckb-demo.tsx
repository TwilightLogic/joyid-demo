import devConfig from '@/config/ckbConfig'

export const CkbDemo = () => {
  const apiBaseUrl = devConfig.APP.API_BASE_URL
  const maxDecimalLength = devConfig.APP.MAX_DECIMAL_PART_LENGTH
  const ckbRpcUrl = devConfig.CKB.CKB_RPC_URL

  return (
    <span>
      <h1 className="font-black text-xl mb-2">CKB Demo V1</h1>
      <p className="transition-all">
        API Base URL:
        <a href="" className="hover:underline underline-offset-2">
          {apiBaseUrl}
        </a>
      </p>
      <p>Max Decimal Length: {maxDecimalLength}</p>
      <p>
        CKB RPC URL:
        <a href="" className="hover:underline underline-offset-2">
          {ckbRpcUrl}
        </a>
      </p>
    </span>
  )
}
