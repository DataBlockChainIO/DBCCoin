require('dotenv').config();
require("babel-register")({
  // Ignore can also be specified as a function.
 ignore: function(filename) {
   if (filename.indexOf("node_modules/zeppelin-solidity") !== -1 || filename.indexOf("datablockchain/contracts") !== -1 || filename.indexOf("datablockchain/test") !== -1 ||
   filename.indexOf("datablockchain/coverageEnv/test") !== -1) {
     return false;
   } else {
     return true;
   }
 },

});
require('babel-polyfill');

const HDWalletProvider = require('truffle-hdwallet-provider');

const providerWithMnemonic = (mnemonic, rpcEndpoint) =>
  new HDWalletProvider(mnemonic, rpcEndpoint);

const infuraProvider = network => providerWithMnemonic(
  process.env.MNEMONIC || '',
  `https://${network}.infura.io/${process.env.INFURA_API_KEY}`
);
console.log( "infurakey "+process.env.INFURA_API_KEY)
const ropstenProvider = process.env.SOLIDITY_COVERAGE
  ? undefined
  : infuraProvider('ropsten');

const rinkebyProvider = process.env.SOLIDITY_COVERAGE
  ? undefined
  : infuraProvider('rinkeby');

  const liveProvider = process.env.SOLIDITY_COVERAGE
    ? undefined
    : infuraProvider('mainnet');

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
      gasPrice:0x01

    },
    ropsten: {
      provider: ropstenProvider,
      network_id: 3, // eslint-disable-line camelcase
      gas: 4612388
    },
    rinkeby: {
      provider: rinkebyProvider,
      network_id: 4, // eslint-disable-line camelcase
      gas: 4612388
    },
    live: {
      provider:liveProvider,
      network_id: 1, // eslint-disable-line camelcase
    },
    coverage: {
      host: 'localhost',
      network_id: '*', // eslint-disable-line camelcase
      port: 8555,
      gasPrice:0x01
    },
    testrpc: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // eslint-disable-line camelcase
      gasPrice:0x01


    },
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '*', // eslint-disable-line camelcase
      gasPrice:0x01
    },
  },
};
