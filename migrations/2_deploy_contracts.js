var DBCCoin = artifacts.require("./DBCCoin.sol");
module.exports = function(deployer) {
  deployer.deploy(DBCCoin);
};
