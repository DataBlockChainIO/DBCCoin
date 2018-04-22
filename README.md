
# Datablockchain's DBCCoin

This repository contains the solidity code for the DBCC token.

The DBCCoin smart contract resides in contracts/DBCCoin.sol. The smart contract builds off of the OpenZeppelin Solidity project.

Writing and deployment of this contract performed by [80Trill](80Trill). Auditing performed by [Magnus Dufwa](https://www.linkedin.com/in/magnusdufwa/) and [80Trill](http://www.80trill.com).

#### Abstract

DataBlockChain.io will provide a robust interface between the users and the data sources. DataBlockChain.io will create a single-point solution that will eliminate the need for multiple data sources and layers of list managers and brokers that create inefficiency in the marketplace. The backend systems will ensure full conﬁdence in data quality for the end user as well as transactional finality for the data providers.

DBCC is the utility token for our ecosystem.

----------------------------------------------------------
#### Coin Info

DBCC is an ERC20 compliant token with a few additional features seen below.

| Type          | Info            |
| ------------- |:---------------:|
| name          | DBCCoin         |
| symbol        | DBCC            |  
| decimals      | 18              |
| cap           | 870,000,000     |

----------------------------------------------------------
#### Zeppelin-Solidity Inheritence

 The following is a list of contracts that DBCCoin inherits along with a brief description of the functionality.

  - __PausableToken__
    - This is an ERC20 token that inherits the StandardToken from zeppelin-solidity. PausableToken token allows the owner of the contract to freeze and unfreeze all token transfers.

  - __CappedToken__
    - CappedToken is a MintableToken that is capped. The mintable token feature creates tokens through a __mint__ method that creates new tokens and transfers them to a given address. This can be used for ICOs, airdrops, promotions, etc as long as the max supply cap has not been reached.

  - __HasNoTokens__
    - Blocks ERC223 tokens from being transferred to this contract. Allows the contract owner to transfer ownership of ERC20 tokens that are sent to the contract address (which would otherwise be locked up and immovable at this contract).

  - __Claimable__
    - Gives contract owner the ability to transfer ownership of the contract to a new owner pending the new owner accepts this transfer of ownership.  
