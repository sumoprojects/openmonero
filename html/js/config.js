var config = {
    //apiUrl: "http://0.0.0.0:1984/",
    apiUrl: "http://167.71.167.215:1984/",
    mainnetExplorerUrl: "https://explorer.sumokoin.com/",
    testnetExplorerUrl: "https://explorer.sumokoin.com/",
    stagenetExplorerUrl: "https://explorer.sumokoin.com/",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 9,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'SUMO',
    openAliasPrefix: "sumo",
    coinName: 'Sumokoin',
    coinUriPrefix: 'sumokoin:',
    addressPrefix: 0x2bb39a,
    integratedAddressPrefix: 0x29339a,
    subAddressPrefix: 0x8319a,
    addressPrefixTestnet: 0x37751a,
    integratedAddressPrefixTestnet: 0x34f51a,
    subAddressPrefixTestnet: 0x1d351a,
    addressPrefixStagenet: 0x37751a,
    integratedAddressPrefixStagenet: 0x34f51a,
    subAddressPrefixStagenet: 0x1d351a,
    feePerKB: new JSBigInt('2000000000'),//20^10 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('10000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 48, // (ring size 49) // minimum mixin for hardfork v8 is 10 (ring size 11)
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 240,
    debugMode: false
};
