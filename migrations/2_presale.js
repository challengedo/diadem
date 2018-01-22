const Token = artifacts.require("Diadem");
const Presale = artifacts.require("Presale");
const SafeMath = artifacts.require("SafeMath");

module.exports = function(deployer, network, accounts) {
	if(network === 'nomigration') return;

	let token, presale;

	deployer.then(function() {
		return Token.deployed();
	}).then(function(tokenInstance) {
		token = tokenInstance;

		return deployer.deploy(Presale, token.address);
	}).then(function() {
		return Presale.deployed();
	}).then(function(presaleInstance) {
		presale = presaleInstance;

		return token.setMintAgent(presale.address, true);
	})
}