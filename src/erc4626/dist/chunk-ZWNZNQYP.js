"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/abi.ts
var _viem = require('viem');
var ERC4626_ABI = _viem.parseAbi.call(void 0, [
  /*
  "function transfer(address to, uint256 amount) external returns (bool)",
  "function balanceOf(address account) external view returns (uint256)",
  "function totalSupply() external view returns (uint256)",
  "function allowance(address owner, address spender) external view returns (uint256)",
  "function approve(address spender, uint256 amount) external returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) external returns (bool)",
  */
  "function addYield(uint256 amount) external",
  "function deposit(uint256 assets, address receiver) external returns (uint256)",
  "function mint(uint256 shares, address receiver) external returns (uint256)",
  "function redeem(uint256 shares, address receiver) external returns (uint256)",
  "function withdraw(uint256 assets, address receiver, address owner) external returns (uint256)",
  "function convertToShares(uint256 assets) external view returns (uint256)",
  "function convertToAssets(uint256 shares) external view returns (uint256)",
  "function previewDeposit(uint256 assets) external view returns (uint256)",
  "function previewMint(uint256 shares) external view returns (uint256)",
  "function previewRedeem(uint256 shares) external view returns (uint256)",
  "function previewWithdraw(uint256 assets) external view returns (uint256)",
  "function asset() external view returns (address)",
  "function decimals() external view returns (uint8)",
  "function maxDeposit(address) external view returns (uint256)",
  "function maxMint(address) external view returns (uint256)",
  "function maxRedeem(address) external view returns (uint256)",
  "function maxWithdraw(address) external view returns (uint256)",
  "function name() external view returns (string)",
  "function owner() external view returns (address)",
  "function symbol() external view returns (string)",
  "function totalAssets() external view returns (uint256)",
  "function totalSupply() external view returns (uint256)",
  "function underlyingToken() external view returns (address)"
]);



exports.ERC4626_ABI = ERC4626_ABI;
//# sourceMappingURL=chunk-ZWNZNQYP.js.map