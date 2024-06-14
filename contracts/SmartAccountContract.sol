pragma solidity ^0.8.0;

contract SmartAccountContract {
    function isValidSignature(
        bytes32 hash,
        bytes memory signature
    ) public pure returns (bool) {
        // Check if the signature is not empty
        require(signature.length > 0, "Signature cannot be empty");

        // Get the first byte of the signature
        uint8 firstByte = uint8(signature[0]);

        // Modify the signature to set the first byte to 0 or 1
        if (firstByte!= 0 && firstByte!= 1) {
            return false;
        }

        // If the first byte is 0 or 1, consider the signature as valid
        return true;
    }
}