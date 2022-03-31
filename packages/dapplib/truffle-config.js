require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict forget force sugar guard render remind evil inflict industry flip twenty'; 
let testAccounts = [
"0x551178329a5556c3a95bb382a07c9f49abb3e4ccf102dd7859534a01c6c58acb",
"0x045aebfa91288ed4b1ff65f4a4747721f3ffe4e182f9ebbe40b1a645db7fcf6e",
"0xbaf204d9ad303b8eefe514f722f41443013af752dbfb52c86f290ccb2247ae1f",
"0x8ee91b53b3cd03fb299e24be5b1afed6ac816863748897d28de7be8f06e1a4e6",
"0xa082d6d029859bc2fb7f5a1f855e3950201dae33baa4ce750805636699509aad",
"0x846ecf72fce104451e99aff3a91ae2f2b9c6a4f2a0b9d239ef05da789d46d1a4",
"0x26391ee43f7c56db74b247363237ede70259a21ab8d5cbceb6f71ac1edbf26d7",
"0x405362768694b7fda54c15cecdfe8a5bec5a3d7037d5e684992f3adfd5588216",
"0xa1b5896bd9562d6dea25fcafd33bd575f2045249f12b7957624a59629693959e",
"0x4f21ba4bb91ce6266734c7e6081e7817f54e76121ef2f6354fb3fcae107a43da"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


