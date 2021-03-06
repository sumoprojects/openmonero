var config = {
    apiUrl: "http://YOUR_PUBLIC_IP_HERE:1984/",
    mainnetExplorerUrl: "https://explorer.sumokoin.com/",
    testnetExplorerUrl: "https://explorer.sumokoin.com/",
    stagenetExplorerUrl: "https://explorer.sumokoin.com/",
    nettype: 0, /* 0 - MAINNET, 1 - TESTNET, 2 - STAGENET */
    coinUnitPlaces: 9,
    txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Sumokoin
    txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Sumokoin
    coinSymbol: 'SUMO',
    openAliasPrefix: "sumo",
    coinName: 'Sumokoin',
    coinUriPrefix: 'sumo:',
    addressPrefix: 0x2bb39a,
    integratedAddressPrefix: 0x29339a,
    subAddressPrefix: 0x8319a,
    addressPrefixTestnet: 0x37751a,
    integratedAddressPrefixTestnet: 0x34f51a,
    subAddressPrefixTestnet: 0x1d351a,
    addressPrefixStagenet: 0x37751a,
    integratedAddressPrefixStagenet: 0x34f51a,
    subAddressPrefixStagenet: 0x1d351a,
    feePerKB: new JSBigInt('2000000'),//20^7 - not used anymore, as fee is dynamic.
    dustThreshold: new JSBigInt('10000000'),//10^7 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 48, // (ring size 49) // minimum mixin
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 240,
    debugMode: false
};
