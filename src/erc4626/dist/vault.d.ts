type Vault = {
    name: string;
    chains: Record<number, {
        contractAddress: `0x${string}`;
    }>;
};

export type { Vault };
