require('dotenv').config();
const path = require('path');
const HDWalletProvider = require('@truffle/hdwallet-provider');

module.exports = {
  contracts_build_directory: "./public/contracts",
  compilers: {
    solc: {
      version: '^0.8.13',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },

  networks: {
    altcoinchain: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "2330", // Match any network id
      gasPrice: 0
    },


  },
  mocha: {},
};
