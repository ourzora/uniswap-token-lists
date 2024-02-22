# Zora Uniswap Token List

[![Tests](https://github.com/ourzora/uniswap-token-lists/workflows/Tests/badge.svg)](https://github.com/Uniswap/token-lists/actions?query=workflow%3ATests)
[![Validation](https://github.com/ourzora/uniswap-token-lists/workflows/Tests/badge.svg)](https://github.com/Uniswap/token-lists/actions?query=workflow%3ATests)

This package includes a JSON schema for token lists, and TypeScript utilities for working with token lists.

The JSON schema represents the technical specification for a token list which can be used in a dApp interface, such as the Uniswap Interface.

## Adding to the Zora Token List

To add a token to the Zora Token List, create a pull request to this repo with an edited `ZORA.tokenlist.json` file. 

## What are token lists?

Uniswap Token Lists is a specification for lists of token metadata (e.g. address, decimals, ...) that can be used by any dApp interfaces that needs one or more lists of tokens.

Anyone can create and maintain a token list, as long as they follow the specification.

Specifically an instance of a token list is a [JSON](https://www.json.org/json-en.html) blob that contains a list of 
[ERC20](https://github.com/ethereum/eips/issues/20) token metadata for use in dApp user interfaces.
Token list JSON must validate against the [JSON schema](https://json-schema.org/) in order to be used in the Uniswap Interface.
Tokens on token lists, and token lists themselves, are tagged so that users can easily find tokens.

## JSON Schema $id

The JSON schema ID is [https://uniswap.org/tokenlist.schema.json](https://uniswap.org/tokenlist.schema.json)

## Validating token lists

To validate the token list, run the following command
```
yarn validate
```
