pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/StandardToken.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract Diadem is StandardToken, Ownable {
    string public constant name = "Diadem";
    string public constant symbol = "DDM";
    uint8 public constant decimals = 18;

    bool public mintingFinished = false;

    mapping (address => bool) public mintAgents;

    function mint(address _to, uint256 _amount)
        public onlyMintAgent canMint returns(bool)
    {
        totalSupply = totalSupply.add(_amount);
        balances[_to] = balances[_to].add(_amount);

        Mint(_to, _amount);
        Transfer(address(0), _to, _amount);

        return true;
    }

    function setMintAgent(address _address, bool _state)
        onlyOwner canMint public
    {
        mintAgents[_address] = _state;
        MintingAgentChanged(_address, _state);
    }

    modifier canMint() {
        require(!mintingFinished);
        _;
    }

    modifier onlyMintAgent() {
        require(mintAgents[msg.sender] == true);
        _;
    }

    event Mint(address indexed to, uint256 amount);
    event MintingAgentChanged(address addr, bool state);
    event MintFinished();
}