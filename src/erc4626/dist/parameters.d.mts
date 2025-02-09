import * as _goat_sdk_core from '@goat-sdk/core';
import { z } from 'zod';

declare const DepositVaultParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    address: z.ZodString;
    assets: z.ZodNumber;
    receiver: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
    receiver: string;
    assets: number;
}, {
    address: string;
    receiver: string;
    assets: number;
}>>;
declare class DepositVaultParameters extends DepositVaultParameters_base {
}
declare const WithdrawVaultParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    address: z.ZodString;
    assets: z.ZodNumber;
    receiver: z.ZodString;
    owner: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
    owner: string;
    receiver: string;
    assets: number;
}, {
    address: string;
    owner: string;
    receiver: string;
    assets: number;
}>>;
declare class WithdrawVaultParameters extends WithdrawVaultParameters_base {
}
declare const GetMaxSupplyParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    vaultAddress: z.ZodString;
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
    vaultAddress: string;
}, {
    address: string;
    vaultAddress: string;
}>>;
declare class GetMaxSupplyParameters extends GetMaxSupplyParameters_base {
}
declare const GetPoolTotalSupplyParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    address: z.ZodString;
}, "strip", z.ZodTypeAny, {
    address: string;
}, {
    address: string;
}>>;
declare class GetPoolTotalSupplyParameters extends GetPoolTotalSupplyParameters_base {
}
declare const GetTokenInfoBySymbolParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    symbol: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol: string;
}>>;
declare class GetTokenInfoBySymbolParameters extends GetTokenInfoBySymbolParameters_base {
}
declare const GetTokenBalanceParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    wallet: z.ZodString;
    tokenAddress: z.ZodString;
}, "strip", z.ZodTypeAny, {
    wallet: string;
    tokenAddress: string;
}, {
    wallet: string;
    tokenAddress: string;
}>>;
declare class GetTokenBalanceParameters extends GetTokenBalanceParameters_base {
}
declare const TransferParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenAddress: z.ZodString;
    to: z.ZodString;
    amount: z.ZodString;
}, "strip", z.ZodTypeAny, {
    amount: string;
    tokenAddress: string;
    to: string;
}, {
    amount: string;
    tokenAddress: string;
    to: string;
}>>;
declare class TransferParameters extends TransferParameters_base {
}
declare const GetTokenTotalSupplyParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenAddress: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tokenAddress: string;
}, {
    tokenAddress: string;
}>>;
declare class GetTokenTotalSupplyParameters extends GetTokenTotalSupplyParameters_base {
}
declare const GetTokenAllowanceParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenAddress: z.ZodString;
    owner: z.ZodString;
    spender: z.ZodString;
}, "strip", z.ZodTypeAny, {
    owner: string;
    tokenAddress: string;
    spender: string;
}, {
    owner: string;
    tokenAddress: string;
    spender: string;
}>>;
declare class GetTokenAllowanceParameters extends GetTokenAllowanceParameters_base {
}
declare const ApproveParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenAddress: z.ZodString;
    spender: z.ZodString;
    amount: z.ZodString;
}, "strip", z.ZodTypeAny, {
    amount: string;
    tokenAddress: string;
    spender: string;
}, {
    amount: string;
    tokenAddress: string;
    spender: string;
}>>;
declare class ApproveParameters extends ApproveParameters_base {
}
declare const RevokeApprovalParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenAddress: z.ZodString;
    spender: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tokenAddress: string;
    spender: string;
}, {
    tokenAddress: string;
    spender: string;
}>>;
declare class RevokeApprovalParameters extends RevokeApprovalParameters_base {
}
declare const TransferFromParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    tokenAddress: z.ZodString;
    from: z.ZodString;
    to: z.ZodString;
    amount: z.ZodString;
}, "strip", z.ZodTypeAny, {
    amount: string;
    tokenAddress: string;
    to: string;
    from: string;
}, {
    amount: string;
    tokenAddress: string;
    to: string;
    from: string;
}>>;
declare class TransferFromParameters extends TransferFromParameters_base {
}
declare const ConvertToBaseUnitParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    amount: z.ZodNumber;
    decimals: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    decimals: number;
    amount: number;
}, {
    decimals: number;
    amount: number;
}>>;
declare class ConvertToBaseUnitParameters extends ConvertToBaseUnitParameters_base {
}
declare const ConvertFromBaseUnitParameters_base: _goat_sdk_core.ToolParametersStatic<z.ZodObject<{
    amount: z.ZodNumber;
    decimals: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    decimals: number;
    amount: number;
}, {
    decimals: number;
    amount: number;
}>>;
declare class ConvertFromBaseUnitParameters extends ConvertFromBaseUnitParameters_base {
}

export { ApproveParameters, ConvertFromBaseUnitParameters, ConvertToBaseUnitParameters, DepositVaultParameters, GetMaxSupplyParameters, GetPoolTotalSupplyParameters, GetTokenAllowanceParameters, GetTokenBalanceParameters, GetTokenInfoBySymbolParameters, GetTokenTotalSupplyParameters, RevokeApprovalParameters, TransferFromParameters, TransferParameters, WithdrawVaultParameters };
