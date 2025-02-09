import {
  __name
} from "./chunk-PAWJFY3S.mjs";

// src/parameters.ts
import { createToolParameters } from "@goat-sdk/core";
import { z } from "zod";
var DepositVaultParameters = class extends createToolParameters(z.object({
  address: z.string().describe("The address of the vault"),
  assets: z.number().describe("The amount of tokens to deposit in base units"),
  receiver: z.string().describe("The address of the receiver of the deposit")
})) {
  static {
    __name(this, "DepositVaultParameters");
  }
};
var WithdrawVaultParameters = class extends createToolParameters(z.object({
  address: z.string().describe("The address of the vault"),
  assets: z.number().describe("The amount of tokens to withdraw in base units"),
  receiver: z.string().describe("The address of the receiver of the deposit"),
  owner: z.string().describe("The address of the owner of the deposit")
})) {
  static {
    __name(this, "WithdrawVaultParameters");
  }
};
var GetMaxSupplyParameters = class extends createToolParameters(z.object({
  vaultAddress: z.string().describe("The address of the vault"),
  address: z.string().describe("The address of the wallet")
})) {
  static {
    __name(this, "GetMaxSupplyParameters");
  }
};
var GetPoolTotalSupplyParameters = class extends createToolParameters(z.object({
  address: z.string().describe("The address of the vault")
})) {
  static {
    __name(this, "GetPoolTotalSupplyParameters");
  }
};
var GetTokenInfoBySymbolParameters = class extends createToolParameters(z.object({
  symbol: z.string().describe("The symbol of the token to get the info of")
})) {
  static {
    __name(this, "GetTokenInfoBySymbolParameters");
  }
};
var GetTokenBalanceParameters = class extends createToolParameters(z.object({
  wallet: z.string().describe("The address to get the balance of"),
  tokenAddress: z.string().describe("The address of the token to get the balance of")
})) {
  static {
    __name(this, "GetTokenBalanceParameters");
  }
};
var TransferParameters = class extends createToolParameters(z.object({
  tokenAddress: z.string().describe("The address of the token to transfer"),
  to: z.string().describe("The address to transfer the token to"),
  amount: z.string().describe("The amount of tokens to transfer in base units")
})) {
  static {
    __name(this, "TransferParameters");
  }
};
var GetTokenTotalSupplyParameters = class extends createToolParameters(z.object({
  tokenAddress: z.string().describe("The address of the token to get the total supply of")
})) {
  static {
    __name(this, "GetTokenTotalSupplyParameters");
  }
};
var GetTokenAllowanceParameters = class extends createToolParameters(z.object({
  tokenAddress: z.string().describe("The address of the token to check the allowance of"),
  owner: z.string().describe("The address to check the allowance of"),
  spender: z.string().describe("The address to check the allowance for")
})) {
  static {
    __name(this, "GetTokenAllowanceParameters");
  }
};
var ApproveParameters = class extends createToolParameters(z.object({
  tokenAddress: z.string().describe("The address of the token to approve"),
  spender: z.string().describe("The address to approve the allowance to"),
  amount: z.string().describe("The amount of tokens to approve in base units")
})) {
  static {
    __name(this, "ApproveParameters");
  }
};
var RevokeApprovalParameters = class extends createToolParameters(z.object({
  tokenAddress: z.string().describe("The address of the token to revoke"),
  spender: z.string().describe("The address to revoke the allowance to")
})) {
  static {
    __name(this, "RevokeApprovalParameters");
  }
};
var TransferFromParameters = class extends createToolParameters(z.object({
  tokenAddress: z.string().describe("The address of the token to transfer"),
  from: z.string().describe("The address to transfer the token from"),
  to: z.string().describe("The address to transfer the token to"),
  amount: z.string().describe("The amount of tokens to transfer in base units")
})) {
  static {
    __name(this, "TransferFromParameters");
  }
};
var ConvertToBaseUnitParameters = class extends createToolParameters(z.object({
  amount: z.number().describe("The amount of tokens to convert from decimal units to base units"),
  decimals: z.number().describe("The number of decimals of the token")
})) {
  static {
    __name(this, "ConvertToBaseUnitParameters");
  }
};
var ConvertFromBaseUnitParameters = class extends createToolParameters(z.object({
  amount: z.number().describe("The amount of tokens to convert from base units to decimal units"),
  decimals: z.number().describe("The number of decimals of the token")
})) {
  static {
    __name(this, "ConvertFromBaseUnitParameters");
  }
};

export {
  DepositVaultParameters,
  WithdrawVaultParameters,
  GetMaxSupplyParameters,
  GetPoolTotalSupplyParameters,
  GetTokenInfoBySymbolParameters,
  GetTokenBalanceParameters,
  TransferParameters,
  GetTokenTotalSupplyParameters,
  GetTokenAllowanceParameters,
  ApproveParameters,
  RevokeApprovalParameters,
  TransferFromParameters,
  ConvertToBaseUnitParameters,
  ConvertFromBaseUnitParameters
};
//# sourceMappingURL=chunk-F3UP767M.mjs.map