import * as _goat_sdk_core from '@goat-sdk/core';
import { PluginBase, Chain } from '@goat-sdk/core';
import { EVMWalletClient } from '@goat-sdk/wallet-evm';
import { Vault } from './vault.mjs';

type ERC4626PluginCtorParams = {
    vaults: Vault[];
};
declare class ERC4626Plugin extends PluginBase<EVMWalletClient> {
    constructor({ vaults }: ERC4626PluginCtorParams);
    supportsChain: (chain: Chain) => chain is _goat_sdk_core.EvmChain;
}
declare function erc4626({ vaults }: ERC4626PluginCtorParams): ERC4626Plugin;

export { ERC4626Plugin, type ERC4626PluginCtorParams, erc4626 };
