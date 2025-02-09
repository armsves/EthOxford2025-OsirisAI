import {
  Erc4626Service
} from "./chunk-WQ36CVW4.mjs";
import {
  __name
} from "./chunk-PAWJFY3S.mjs";

// src/erc4626.plugin.ts
import { PluginBase } from "@goat-sdk/core";
var ERC4626Plugin = class extends PluginBase {
  static {
    __name(this, "ERC4626Plugin");
  }
  constructor({ vaults }) {
    super("erc4626", [
      new Erc4626Service()
    ]);
  }
  supportsChain = /* @__PURE__ */ __name((chain) => chain.type === "evm", "supportsChain");
};
function erc4626({ vaults }) {
  return new ERC4626Plugin({
    vaults
  });
}
__name(erc4626, "erc4626");

export {
  ERC4626Plugin,
  erc4626
};
//# sourceMappingURL=chunk-67S4PQLI.mjs.map