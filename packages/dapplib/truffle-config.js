require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good entire sugar tooth film ring remain mixture grace slender frame turkey'; 
let testAccounts = [
"0x67701270c0265d190d444009f48514a0d360b91f8e70c40b21dd4d3fdd597d43",
"0xfad19eb7f2ecd730e090b53b4464d352c2bfcdaa8da4010dae3dc106a4a66232",
"0x08bfcb4eec9d93661a7dcac7d5affa417e6d513797a90a09f3709e28db84d4e2",
"0x687b7e30d35f61611b61913dd7f4e39331d216f275136d714d16bec6e92b8b23",
"0x77451ded2eda90a6f90a32dab201d183f06bc71c6e2511dbbedd742b11692f0a",
"0x925ec08470cf360bf50b02085656fdf9eb4450d105175587de39ad44afd58121",
"0x6fe2ebe66400c07cd34fad494bdd4cbae77cd83fbea764e486dd8962f6a23bb6",
"0x6d1acfa1b772afa836cf74df840584593a670ce538e560e62524b100ddf1a6a7",
"0x61a9dea34b9e7c12f67751d0466cb8c047e500953962b5f0492f37acec8ba398",
"0xab84db80b15d80c52e69ac892ceade2571102629f9716aff93444d26f9957817"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

