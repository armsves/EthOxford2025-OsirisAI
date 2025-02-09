"use strict";Object.defineProperty(exports, "__esModule", {value: true}); var _class;

var _chunkOFPIOCJCjs = require('./chunk-OFPIOCJC.js');


var _chunk7QVYU63Ejs = require('./chunk-7QVYU63E.js');

// src/erc4626.plugin.ts
var _core = require('@goat-sdk/core');
var ERC4626Plugin = (_class = class extends _core.PluginBase {
  static {
    _chunk7QVYU63Ejs.__name.call(void 0, this, "ERC4626Plugin");
  }
  constructor({ vaults }) {
    super("erc4626", [
      new (0, _chunkOFPIOCJCjs.Erc4626Service)()
    ]);_class.prototype.__init.call(this);;
  }
  __init() {this.supportsChain = /* @__PURE__ */ _chunk7QVYU63Ejs.__name.call(void 0, (chain) => chain.type === "evm", "supportsChain")}
}, _class);
function erc4626({ vaults }) {
  return new ERC4626Plugin({
    vaults
  });
}
_chunk7QVYU63Ejs.__name.call(void 0, erc4626, "erc4626");




exports.ERC4626Plugin = ERC4626Plugin; exports.erc4626 = erc4626;
//# sourceMappingURL=chunk-I4LHUQ5O.js.map