require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      viaIR: true,
    },
  },
  networks: {
    bttc_testnet: {
      url: "https://pre-rpc.bt.io/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 1029,
    },
    bttc_mainnet: {
      url: "https://rpc.bt.io/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 199,
    },
  },
    etherscan: {
        apiKey: {
            bttc_testnet: 'C324VIYRWJDJ8WCI22WX767HGX8XWKT5VU'
        },
        customChains: [
            {
                network: "bttc_testnet",
                chainId: 1029,
                urls: {
                    apiURL: "https://api-testnet.bttcscan.com/api",
                    browserURL: "https://testnet.bttcscan.com"
                }
            }
        ]
    },
  allowUnlimitedContractSize: true,
}
