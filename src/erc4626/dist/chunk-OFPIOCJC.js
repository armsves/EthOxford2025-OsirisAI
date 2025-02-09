"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZWNZNQYPjs = require('./chunk-ZWNZNQYP.js');





var _chunkMQV52CGUjs = require('./chunk-MQV52CGU.js');


var _chunk7QVYU63Ejs = require('./chunk-7QVYU63E.js');

// src/erc4626.service.ts
var _core = require('@goat-sdk/core');
var _walletevm = require('@goat-sdk/wallet-evm');
function _ts_decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
_chunk7QVYU63Ejs.__name.call(void 0, _ts_decorate, "_ts_decorate");
function _ts_metadata(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
_chunk7QVYU63Ejs.__name.call(void 0, _ts_metadata, "_ts_metadata");
var Erc4626Service = class {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "Erc4626Service");
  }
  async deposit(walletClient, parameters) {
    try {
      const hash = await walletClient.sendTransaction({
        to: parameters.address,
        abi: _chunkZWNZNQYPjs.ERC4626_ABI,
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
        abi: _chunkZWNZNQYPjs.ERC4626_ABI,
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
        abi: _chunkZWNZNQYPjs.ERC4626_ABI,
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
        abi: _chunkZWNZNQYPjs.ERC4626_ABI,
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
        abi: _chunkZWNZNQYPjs.ERC4626_ABI,
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
        abi: _chunkZWNZNQYPjs.ERC4626_ABI,
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
        abi: _chunkZWNZNQYPjs.ERC4626_ABI,
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
        abi: _chunkZWNZNQYPjs.ERC4626_ABI,
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
        abi: _chunkZWNZNQYPjs.ERC4626_ABI,
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
  _core.Tool.call(void 0, {
    //name: "kim_burn",
    description: "Deposit an amount into the ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkMQV52CGUjs.DepositVaultParameters === "undefined" ? Object : _chunkMQV52CGUjs.DepositVaultParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "deposit", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    //name: "kim_burn",
    description: "Withdraw an amount into the ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkMQV52CGUjs.WithdrawVaultParameters === "undefined" ? Object : _chunkMQV52CGUjs.WithdrawVaultParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "withdraw", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get the max withdrawal amount of an ERC4626 vault"
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkMQV52CGUjs.GetMaxSupplyParameters === "undefined" ? Object : _chunkMQV52CGUjs.GetMaxSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getMaxWithdraw", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get the owner of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkMQV52CGUjs.GetPoolTotalSupplyParameters === "undefined" ? Object : _chunkMQV52CGUjs.GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getOwner", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get the symbol of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkMQV52CGUjs.GetPoolTotalSupplyParameters === "undefined" ? Object : _chunkMQV52CGUjs.GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getSymbol", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get the name of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkMQV52CGUjs.GetPoolTotalSupplyParameters === "undefined" ? Object : _chunkMQV52CGUjs.GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getName", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get the underlying Token of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkMQV52CGUjs.GetPoolTotalSupplyParameters === "undefined" ? Object : _chunkMQV52CGUjs.GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getUnderlyingToken", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get the TotalAssets of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkMQV52CGUjs.GetPoolTotalSupplyParameters === "undefined" ? Object : _chunkMQV52CGUjs.GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getTotalAssets", null);
_ts_decorate([
  _core.Tool.call(void 0, {
    description: "Get the TotalSupply of an ERC4626 vault."
  }),
  _ts_metadata("design:type", Function),
  _ts_metadata("design:paramtypes", [
    typeof _walletevm.EVMWalletClient === "undefined" ? Object : _walletevm.EVMWalletClient,
    typeof _chunkMQV52CGUjs.GetPoolTotalSupplyParameters === "undefined" ? Object : _chunkMQV52CGUjs.GetPoolTotalSupplyParameters
  ]),
  _ts_metadata("design:returntype", Promise)
], Erc4626Service.prototype, "getTotalSupply", null);



exports.Erc4626Service = Erc4626Service;
//# sourceMappingURL=chunk-OFPIOCJC.js.map