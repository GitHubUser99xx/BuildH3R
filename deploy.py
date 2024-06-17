Hello World Cairo Contract

This repository contains a "Hello World" Cairo smart contract and a Python script for deploying it on Starknet.

## Contract Code

The contract code is written in Cairo and can be found in `hello_world.cairo`. It defines two external functions: `hello_world` and `get_address`.

## Deployment Script

The deployment script is written in Python and can be found in `deploy.py`. It uses `snforge` to deploy the contract on Starknet.

## Deployment Instructions

1. Install Scarb and snforge using the installation guides.
2. Set up your wallet using Argent or Braavos.
3. Compile the contract code using Scarb: `scarb build hello_world.cairo`
4. Deploy the contract using the deployment script: `python deploy.py`
5. View the contract details and transactions using Starkscan.

## Viewing Contract Details and Transactions

To view the contract details and transactions, navigate to Starkscan and enter the contract address in the search bar. You can view the contract ABI, bytecode, and transaction history.