import { predefined } from '@ckb-lumos/config-manager'

// 开发/测试环境的URLs配置
const devdUrls = {
  ckb_indexer_url: ['https://testnet.ckb.dev', 'https://testnet.ckbapp.dev'],
  ckb_rpc_url: ['https://testnet.ckb.dev', 'https://testnet.ckbapp.dev'],
}

const RPC_COUNT = 2

// 生成一个 0 到 RPC_COUNT - 1的随机整数，用于确定页面 rpc 请求的 url
const randomIndex = Math.floor(Math.random() * RPC_COUNT)

// 开发/测试环境配置
const devConfig = {
  APP: {
    IS_MAINNET: false,
    API_BASE_URL: 'https://test-api.your-dapp-domain',
    MAX_DECIMAL_PART_LENGTH: 8,
    JOYID_BUY_CKB: 'https://testnet.joyid.dev/exchange?token=ckb',
  },
  CKB: {
    CKB_RPC_URL: devdUrls.ckb_rpc_url[randomIndex],
    CKB_INDEXER_URL: devdUrls.ckb_indexer_url[randomIndex],
    CKB_EXPLORER_URL: 'https://pudge.explorer.nervos.org',
    PREFIX: 'ckt',
    SCRIPTS: predefined.AGGRON4.SCRIPTS,
  },
  JOYID: {
    SCRIPT: {
      CODE_HASH:
        '0xd23761b364210735c19c60561d213fb3beae2fd6172743719eff6920e020baac',
      HASH_TYPE: 'type',
      TX_HASH:
        '0x4dcf3f3b09efac8995d6cbee87c5345e812d310094651e0c3d9a730f32dc9263',
      INDEX: '0x0',
      DEP_TYPE: 'depGroup',
    },
    APP_CONFIG: {
      name: 'your app name',
      logo: 'https://your-dapp-domain/your-logo.svg',
      network: 'testnet',
      joyidAppURL: 'https://testnet.joyid.dev',
      joyidServerURL: 'https://api.joyid.dev',
    },
  },
}

// 默认导出开发/测试环境配置
export default devConfig
