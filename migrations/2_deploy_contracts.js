const ProxyDelegate = artifacts.require('ProxyDelegate');
const SomeLibrary = artifacts.require('SomeLibrary');
const Proxycall = artifacts.require('Proxycall');


module.exports = function(deployer) {
    deployer.deploy(SomeLibrary)
    .then(() => deployer.deploy(ProxyDelegate, SomeLibrary.address))
    .then(() => deployer.deploy(Proxycall, SomeLibrary.address));

}