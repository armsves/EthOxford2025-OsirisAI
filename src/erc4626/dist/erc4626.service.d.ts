import { EVMWalletClient } from '@goat-sdk/wallet-evm';
import { DepositVaultParameters, WithdrawVaultParameters, GetMaxSupplyParameters, GetPoolTotalSupplyParameters } from './parameters.js';
import '@goat-sdk/core';
import 'zod';

declare class Erc4626Service {
    deposit(walletClient: EVMWalletClient, parameters: DepositVaultParameters): Promise<string>;
    withdraw(walletClient: EVMWalletClient, parameters: WithdrawVaultParameters): Promise<string>;
    getMaxWithdraw(walletClient: EVMWalletClient, parameters: GetMaxSupplyParameters): Promise<string>;
    getOwner(walletClient: EVMWalletClient, parameters: GetPoolTotalSupplyParameters): Promise<string>;
    getSymbol(walletClient: EVMWalletClient, parameters: GetPoolTotalSupplyParameters): Promise<string>;
    getName(walletClient: EVMWalletClient, parameters: GetPoolTotalSupplyParameters): Promise<string>;
    getUnderlyingToken(walletClient: EVMWalletClient, parameters: GetPoolTotalSupplyParameters): Promise<string>;
    getTotalAssets(walletClient: EVMWalletClient, parameters: GetPoolTotalSupplyParameters): Promise<number>;
    getTotalSupply(walletClient: EVMWalletClient, parameters: GetPoolTotalSupplyParameters): Promise<number>;
}

export { Erc4626Service };
