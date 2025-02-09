"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7QVYU63Ejs = require('./chunk-7QVYU63E.js');

// src/parameters.ts
var _core = require('@goat-sdk/core');
var _zod = require('zod');
var DepositVaultParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  address: _zod.z.string().describe("The address of the vault"),
  assets: _zod.z.number().describe("The amount of tokens to deposit in base units"),
  receiver: _zod.z.string().describe("The address of the receiver of the deposit")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "DepositVaultParameters");
  }
};
var WithdrawVaultParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  address: _zod.z.string().describe("The address of the vault"),
  assets: _zod.z.number().describe("The amount of tokens to withdraw in base units"),
  receiver: _zod.z.string().describe("The address of the receiver of the deposit"),
  owner: _zod.z.string().describe("The address of the owner of the deposit")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "WithdrawVaultParameters");
  }
};
var GetMaxSupplyParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  vaultAddress: _zod.z.string().describe("The address of the vault"),
  address: _zod.z.string().describe("The address of the wallet")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetMaxSupplyParameters");
  }
};
var GetPoolTotalSupplyParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  address: _zod.z.string().describe("The address of the vault")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetPoolTotalSupplyParameters");
  }
};
var GetTokenInfoBySymbolParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  symbol: _zod.z.string().describe("The symbol of the token to get the info of")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetTokenInfoBySymbolParameters");
  }
};
var GetTokenBalanceParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  wallet: _zod.z.string().describe("The address to get the balance of"),
  tokenAddress: _zod.z.string().describe("The address of the token to get the balance of")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetTokenBalanceParameters");
  }
};
var TransferParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenAddress: _zod.z.string().describe("The address of the token to transfer"),
  to: _zod.z.string().describe("The address to transfer the token to"),
  amount: _zod.z.string().describe("The amount of tokens to transfer in base units")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "TransferParameters");
  }
};
var GetTokenTotalSupplyParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenAddress: _zod.z.string().describe("The address of the token to get the total supply of")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetTokenTotalSupplyParameters");
  }
};
var GetTokenAllowanceParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenAddress: _zod.z.string().describe("The address of the token to check the allowance of"),
  owner: _zod.z.string().describe("The address to check the allowance of"),
  spender: _zod.z.string().describe("The address to check the allowance for")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "GetTokenAllowanceParameters");
  }
};
var ApproveParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenAddress: _zod.z.string().describe("The address of the token to approve"),
  spender: _zod.z.string().describe("The address to approve the allowance to"),
  amount: _zod.z.string().describe("The amount of tokens to approve in base units")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "ApproveParameters");
  }
};
var RevokeApprovalParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenAddress: _zod.z.string().describe("The address of the token to revoke"),
  spender: _zod.z.string().describe("The address to revoke the allowance to")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "RevokeApprovalParameters");
  }
};
var TransferFromParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  tokenAddress: _zod.z.string().describe("The address of the token to transfer"),
  from: _zod.z.string().describe("The address to transfer the token from"),
  to: _zod.z.string().describe("The address to transfer the token to"),
  amount: _zod.z.string().describe("The amount of tokens to transfer in base units")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "TransferFromParameters");
  }
};
var ConvertToBaseUnitParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  amount: _zod.z.number().describe("The amount of tokens to convert from decimal units to base units"),
  decimals: _zod.z.number().describe("The number of decimals of the token")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "ConvertToBaseUnitParameters");
  }
};
var ConvertFromBaseUnitParameters = class extends _core.createToolParameters.call(void 0, _zod.z.object({
  amount: _zod.z.number().describe("The amount of tokens to convert from base units to decimal units"),
  decimals: _zod.z.number().describe("The number of decimals of the token")
})) {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "ConvertFromBaseUnitParameters");
  }
};
















exports.DepositVaultParameters = DepositVaultParameters; exports.WithdrawVaultParameters = WithdrawVaultParameters; exports.GetMaxSupplyParameters = GetMaxSupplyParameters; exports.GetPoolTotalSupplyParameters = GetPoolTotalSupplyParameters; exports.GetTokenInfoBySymbolParameters = GetTokenInfoBySymbolParameters; exports.GetTokenBalanceParameters = GetTokenBalanceParameters; exports.TransferParameters = TransferParameters; exports.GetTokenTotalSupplyParameters = GetTokenTotalSupplyParameters; exports.GetTokenAllowanceParameters = GetTokenAllowanceParameters; exports.ApproveParameters = ApproveParameters; exports.RevokeApprovalParameters = RevokeApprovalParameters; exports.TransferFromParameters = TransferFromParameters; exports.ConvertToBaseUnitParameters = ConvertToBaseUnitParameters; exports.ConvertFromBaseUnitParameters = ConvertFromBaseUnitParameters;
//# sourceMappingURL=chunk-MQV52CGU.js.map