pragma solidity ^0.4.18;

//
// Standard ERC20 token with the ability to freeze and unfreeze token transfer
import './PausableToken.sol';

//
// Mintable capped token
import './CappedToken.sol';

//
// Blocks ERC223 tokens and allows the smart contract to transfer ownership of
// ERC20 tokens that are sent to the contract address.
import './ownership/HasNoTokens.sol';

//
// Gives the owner the ability to transfer ownership of the contract to a new
// address and it requires the owner of the new address to accept the transfer.
import './ownership/Claimable.sol';


/**
 * @title DBCCoin
 */
contract DBCCoin is PausableToken, CappedToken, Claimable, HasNoTokens {

  string public constant name = "DBCCoin";
  string public constant symbol = "DBCC";
  uint8 public constant decimals = 18;
  uint256 public constant TOTAL_CAP = 870000000 * (10 ** uint256(decimals));

  /**
   * @dev Constructor that sets the TOTAL_SUPPLY in the CappedToken parent.
   */
  function DBCCoin() CappedToken(TOTAL_CAP) public {
    balances[msg.sender] = 0;
    Transfer(0x0, msg.sender, 0);
  }
  
  /**
   * @dev wrapper for mint for startico.net to be able to distribute tokens.
   */
  function send(address to, uint amount) onlyOwner public {
    mint(to, amount);
  }
}
