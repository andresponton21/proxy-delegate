pragma solidity ^0.5.0;

contract Proxycall {
    uint public version;
    address public owner;
    address public caller;  // contract calls to

    event LogResult(bytes result);

    constructor(address callerAddress) public {
        owner = msg.sender;
        caller = callerAddress;
    }

    function() external {
        (bool success, bytes memory returnData) = caller.call(msg.data);
        require(success, "external call failed");
        emit LogResult(returnData);
    }
}