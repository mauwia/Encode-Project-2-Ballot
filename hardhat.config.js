/** @type import('hardhat/config').HardhatUserConfig */
/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()
module.exports = {
    solidity: "0.8.9",
    defaultNetwork: "hardhat",
    gasReporter: {
        enabled: false,
    },
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfimation: 1,
        },
        rinkeby: {
            chainId: 4,
            blockConfimation: 6,
            url: process.env.RPC_URL,
            accounts: [process.env.PRIVATE_KEY],
        },
        goerli: {
          chainId: 5,
          blockConfimation: 6,
          url: process.env.RPC_URL,
          accounts: [process.env.PRIVATE_KEY],
      },
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 200000,
    },
    etherscan: {
        apiKey: {
            rinkeby: process.env.ETHERSCAN_API,
            goerli: process.env.ETHERSCAN_API,

        },
    },
}