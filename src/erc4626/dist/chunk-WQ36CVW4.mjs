import {
  ERC4626_ABI
} from "./chunk-MUQNXMD6.mjs";
import {
  DepositVaultParameters,
  GetMaxSupplyParameters,
  GetPoolTotalSupplyParameters,
  WithdrawVaultParameters
} from "./chunk-F3UP767M.mjs";
import {
  __name
} from "./chunk-PAWJFY3S.mjs";

// src/erc4626.service.ts
import { Tool } from "@goat-sdk/core";
import { EVMWalletClient } from "@goat-sdk/wallet-evm";
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
__name(_ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
__name(_ts_metadata, "_ts_metadata");
var Erc4626Service = class {
  static {
    __name(this, "Erc4626Service");
  }
  async deposit(walletClient, parameters) {
    try {
      const hash = await walletClient.sendTransaction({
        to: parameters.address,
        abi: ERC4626_ABI,
        functionName: "deposit",
        args: [
          parameters.assets,
          parameters.receiver
        ]
      });
      return hash.hash;
    } catch (error) {
      throw new Error(`Failed to deposit into vault: ${error}`);
    }
  }
  async withdraw(walletClient, parameters) {
    try {
      const hash = await walletClient.sendTransaction({
        to: "0x28c52E6c053AD4F2727E2F8de2AD5B81139ca9D4",
        abi: ERC4626_ABI,
        functionName: "withdraw",
        args: [
          parameters.assets,
          parameters.receiver,
          parameters.owner
        ]
      });
      return hash.hash;
    } catch (error) {
      throw new Error(`Failed to withdraw from vault: ${error}`);
    }
  }
  async getMaxWithdraw(walletClient, parameters) {
    try {
      const rawBalance = await walletClient.read({
        address: "0x28c52E6c053AD4F2727E2F8de2AD5B81139ca9D4",
        abi: ERC4626_ABI,
        functionName: "maxWithdraw",
        args: [
          parameters.address
        ]
      });
      return String(rawBalance.value);
    } catch (error) {
      throw Error(`Failed to fetch max withdrawal: ${error}`);
    }
  }
  async getOwner(walletClient, parameters) {
    try {
      const rawBalance = await walletClient.read({
        address: "0x28c52E6c053AD4F2727E2F8de2AD5B81139ca9D4",
        abi: ERC4626_ABI,
        functionName: "owner",
        args: []
      });
      return String(rawBalance.value);
    } catch (error) {
      throw Error(`Failed to fetch balance: ${error}`);
    }
  }
  async getSymbol(walletClient, parameters) {
    try {
      console.log("parameters", parameters);
      console.log("parameters.address", parameters.address);
      const rawBalance = await walletClient.read({
        address: parameters.address,
        abi: ERC4626_ABI,
        functionName: "symbol",
        args: []
      });
      return String(rawBalance.value);
    } catch (error) {
      throw Error(`Failed to fetch balance: ${error}`);
    }
  }
  async getName(walletClient, parameters) {
    try {
      const rawBalance = await walletClient.read({
        address: "0x28c52E6c053AD4F2727E2F8de2AD5B81139ca9D4",
        abi: ERC4626_ABI,
        functionName: "name",
        args: []
      });
      return String(rawBalance.value);
    } catch (error) {
      throw Error(`Failed to fetch balance: ${error}`);
    }
  }
  async getUnderlyingToken(walletClient, parameters) {
    try {
      const rawBalance = await walletClient.read({
        address: "0x28c52E6c053AD4F2727E2F8de2AD5B81139ca9D4",
        abi: ERC4626_ABI,
        functionName: "underlyingToken",
        args: []
      });
      return String(rawBalance.value);
    } catch (error) {
      throw Error(`Failed to fetch balance: ${error}`);
    }
  }
  async getTotalAssets(walletClient, parameters) {
    try {
      const rawBalance = await walletClient.read({
        address: "0x28c52E6c053AD4F2727E2F8de2AD5B81139ca9D4",
        abi: ERC4626_ABI,
        functionName: "totalAssets",
        args: []
      });
      return Number(rawBalance.value);
    } catch (error) {
      throw Error(`Failed to fetch balance: ${error}`);
    }
  }
  async getTotalSupply(walletClient, parameters) {
    try {
      const rawBalance = await walletClient.read({
        address: "0x28c52E6c053AD4F2727E2F8de2AD5B81139ca9D4",
        abi: ERC4626_ABI,
        functionName: "totalSupply",
        args: []
      });
      return Number(rawBalance.value);
    } catch (error) {
      throw Error(`Failed to fetch balance: ${error}`);
    }
  }
};
_ts_decorate([
  Tool({
    //name: "kim_burn",
    description: "Deposit an amount into the ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof EVMWalletClient === "undefined" ? Object : EVMWalletClient,
    typeof DepositVaultParameters === "undefined" ? Object : DepositVaultParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "deposit", null);
_ts_decorate([
  Tool({
    //name: "kim_burn",
    description: "Withdraw an amount into the ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof EVMWalletClient === "undefined" ? Object : EVMWalletClient,
    typeof WithdrawVaultParameters === "undefined" ? Object : WithdrawVaultParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "withdraw", null);
_ts_decorate([
  Tool({
    description: "Get the max withdrawal amount of an ERC4626 vault"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof EVMWalletClient === "undefined" ? Object : EVMWalletClient,
    typeof GetMaxSupplyParameters === "undefined" ? Object : GetMaxSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getMaxWithdraw", null);
_ts_decorate([
  Tool({
    description: "Get the owner of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof EVMWalletClient === "undefined" ? Object : EVMWalletClient,
    typeof GetPoolTotalSupplyParameters === "undefined" ? Object : GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getOwner", null);
_ts_decorate([
  Tool({
    description: "Get the symbol of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof EVMWalletClient === "undefined" ? Object : EVMWalletClient,
    typeof GetPoolTotalSupplyParameters === "undefined" ? Object : GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getSymbol", null);
_ts_decorate([
  Tool({
    description: "Get the name of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof EVMWalletClient === "undefined" ? Object : EVMWalletClient,
    typeof GetPoolTotalSupplyParameters === "undefined" ? Object : GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getName", null);
_ts_decorate([
  Tool({
    description: "Get the underlying Token of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof EVMWalletClient === "undefined" ? Object : EVMWalletClient,
    typeof GetPoolTotalSupplyParameters === "undefined" ? Object : GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getUnderlyingToken", null);
_ts_decorate([
  Tool({
    description: "Get the TotalAssets of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof EVMWalletClient === "undefined" ? Object : EVMWalletClient,
    typeof GetPoolTotalSupplyParameters === "undefined" ? Object : GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getTotalAssets", null);
_ts_decorate([
  Tool({
    description: "Get the TotalSupply of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof EVMWalletClient === "undefined" ? Object : EVMWalletClient,
    typeof GetPoolTotalSupplyParameters === "undefined" ? Object : GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getTotalSupply", null);

export {
  Erc4626Service
};
//# sourceMappingURL=chunk-WQ36CVW4.mjs.map