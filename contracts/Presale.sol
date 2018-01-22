pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import './Diadem.sol';

contract Presale {
    using SafeMath for uint256;

    Diadem public token;

    uint256 public weiRaised;

    uint256 public cap = 1000 ether;
    uint256 public rate = 2500;
    uint public startTime = 1516597200;
    uint public endTime = 1517806800;

    address public wallet = 0xC37CCc8e2DC57BBa95318d4c1E1fDA558012dCB0;

    event TokenPurchase(address indexed purchaser, address indexed beneficiary, uint256 value, uint256 amount);

    function Presale(address _token) public {
        token = Diadem(_token);
    }

    function () external payable {
        buyTokens(msg.sender);
    }

    function buyTokens(address beneficiary) public payable {
        require(beneficiary != address(0));
        require(validPurchase());

        uint256 weiAmount = msg.value;

        uint256 tokens = weiAmount.mul(rate);

        weiRaised = weiRaised.add(weiAmount);

        token.mint(beneficiary, tokens);

        TokenPurchase(msg.sender, beneficiary, weiAmount, tokens);

        forwardFunds();
    }

    function forwardFunds() internal {
        wallet.transfer(msg.value);
    }

    function validPurchase() internal constant returns (bool) {
        bool withinPeriod = now >= startTime && now <= endTime;
        bool nonZeroPurchase = msg.value != 0;
        bool withinCap = weiRaised.add(msg.value) <= cap;

        return withinPeriod && nonZeroPurchase && withinCap;
    }

    function hasEnded() public constant returns (bool) {
        return now > endTime || weiRaised >= cap;
    }
}