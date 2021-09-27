new Vue({
    data() {
        return {
            ecosystem: '',
            type: '',
            lists: [
                {
                    index: 1010,
                    ecosystem: "parachain kusama",
                    name: "karura",
                    token: "KAR",
                    type: "DeFi",
                    link: "https://apps.karura.network/",
                    description: "swap, colateral & staking",
                    reliability: 9.6
                },
                {
                    index: 1011,
                    ecosystem: "moonriver",
                    name: "solarbeam",
                    token: "SOLAR",
                    type: "DeFi",
                    link: "https://solarbeam.io/exchange/swap",
                    description: "swap & yielfarming",
                    reliability: 7.2
                },
                {
                    index: 1012,
                    ecosystem:"moonriver",
                    name: "laika protocol",
                    token: "LAIKA",
                    type: "Memecoin",
                    link: "https://laikaprotocol.com/",
                    description: "deflationary",
                    reliability: 8.1
                },
                {
                    index: 1013,
                    ecosystem: "statemine kusama",
                    name: "rmrk",
                    token: "RMRK",
                    type: "NFT",
                    link: "https://singular.rmrk.app/",
                    description: "Marketplace",
                    reliability: 9.8
                },
                {
                    index: 1014,
                    ecosystem: "statemine kusama",
                    name: "kanaria rmrk",
                    token: "RMRK",
                    type: "NFT",
                    link: "https://kanaria.rmrk.app/",
                    description: "Game & collectibles",
                    reliability: 9.6
                },
                {
                    index: 1015,
                    ecosystem: "moonriver",
                    name: "saturnbeam",
                    token: "",
                    type: "DeFi",
                    link: "https://saturnbeam.finance/",
                    description: "yieldfarming optimizer",
                    reliability: 7.6
                },
                {
                    index: 1016,
                    ecosystem: "moonriver",
                    name: "moonswap",
                    token: "MOON",
                    type: "DeFi",
                    link: "https://swap.moonswap.in/",
                    description: "AMM DEX",
                    reliability: 7.8
                },
                {
                    index: 1017,
                    ecosystem: "moonriver",
                    name: "moonfarm",
                    token: "MOON",
                    type: "DeFi",
                    link: "https://app.moonfarm.in/",
                    description: "yieldfarming",
                    reliability: 6.8
                },
                {
                    index: 1018,
                    ecosystem: "moonriver",
                    name: "moonkafe",
                    token: "KAFE",
                    type: "DeFi",
                    link: "https://moon.kafe.finance/",
                    description: "yieldfarming",
                    reliability: 6.5
                },
                {
                    index: 1019,
                    ecosystem: "parachain kusama",
                    name: "moonriver",
                    token: "MOVR",
                    type: "SmartContracts",
                    link: "https://moonbeam.network/networks/moonriver/",
                    description: "Layer 1.5 ETH/KSM",
                    reliability: 9.5
                },
                {
                    index: 1020,
                    ecosystem: "statemine kusama",
                    name: "unique network",
                    token: "UNQ",
                    type: "NFT",
                    link: "https://unqnft.io/#/wallet",
                    description: "Marketplace",
                    reliability: 9.4
                },
                {
                    index: 1021,
                    ecosystem: "parachain kusama",
                    name: "phala network",
                    token: "PHA",
                    type: "SmartContracts",
                    link: "https://phala.network/en/",
                    description: "Privacy",
                    reliability: 9.1
                },
                {
                    index: 1022,
                    ecosystem: "parachain kusama",
                    name: "astar network (Shiden)",
                    token: "SDN",
                    type: "SmartContracts",
                    link: "https://shiden.astar.network/",
                    description: "Dapps ETH/KSM",
                    reliability: 8.9
                },
                {
                    index: 1023,
                    ecosystem: "moonriver",
                    name: "1swap",
                    token: "1SWAP",
                    type: "DeFi",
                    link: "https://1swap.fi/",
                    description: "yieldfarming optimizer",
                    reliability: 6.7
                },
                {
                    index: 1024,
                    ecosystem: "sora network",
                    name: "sora",
                    token: "XOR",
                    type: "SmartContracts",
                    link: "https://sora.org/",
                    description: "multi-banks DeFi",
                    reliability: 9.6
                },
                {
                    index: 1025,
                    ecosystem: "sora network",
                    name: "polkaswap",
                    token: "PSWAP",
                    type: "DeFi",
                    link: "https://polkaswap.io/#/swap",
                    description: "AMM DEX",
                    reliability: 9.4
                },
                {
                    index: 1026,
                    ecosystem: "moonriver",
                    name: "moonpad",
                    token: "",
                    type: "DeFi",
                    link: "https://ido.moonpad.in/#/",
                    description: "IDO",
                    reliability: 8.2
                },
                {
                    index: 1027,
                    ecosystem: "moonriver",
                    name: "freeriver",
                    token: "FREE",
                    type: "DeFi",
                    link: "https://freeriver.exchange/#/swap",
                    description: "AMM DEX",
                    reliability: 9.1
                },
                {
                    index: 1028,
                    ecosystem: "moonriver",
                    name: "neku finance",
                    token: "NEKU",
                    type: "DeFi",
                    link: "https://neku.io/",
                    description: "Collateral",
                    reliability: 8.8
                },
                {
                    index: 1029,
                    ecosystem: "moonriver",
                    name: "anyswap",
                    token: "ANY",
                    type: "DeFi",
                    link: "https://anyswap.exchange/#/router",
                    description: "AMM DEX",
                    reliability: 9.2
                },
                {
                    index: 1030,
                    ecosystem: "moonriver",
                    name: "https://moonsama.com/",
                    token: "",
                    type: "NFT",
                    link: "https://moonsama.com/",
                    description: "Collectibles",
                    reliability: 9.4
                },
                {
                    index: 1031,
                    ecosystem: "moonriver",
                    name: "meter",
                    token: "",
                    type: "bridge",
                    link: "https://passport.meter.io/#/",
                    description: "Crosschain bridge ETH/MOVR",
                    reliability:  8.9
                }
            ],
        }
    },
    computed: {
        filterList() {
            var vm = this, lists = vm.lists
            return _.filter(lists, function (query) {
                var ecosystem = vm.ecosystem ? (query.ecosystem == vm.ecosystem) : true,
                    type = vm.type ? (query.type == vm.type) : true;

                return ecosystem && type
            })
        }
    },
    
}).$mount('#app')