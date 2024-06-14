Smart Account Contract
This project is a simple Solidity contract that verifies the signature of a message. The contract checks if the first byte of the signature is 0 or 1, and returns true if it is, and false otherwise.

Contract Functionality

isValidSignature(bytes32 hash, bytes memory signature): Verifies the signature of a message and returns true if the first byte of the signature is 0 or 1, and false otherwise.
Getting Started

Compile the contract using solcjs.
Deploy the contract to a blockchain network.
Interact with the contract using a Web3 library or a blockchain explorer.
