new Vue({
    data() {
        return {
            ecosystem: '',
            type: '',
            lists: [
                {
                    index: 10010,
                    ecosystem: "parachain kusama",
                    name: "karura",
                    token: "KAR",
                    type: "DeFi",
                    link: "https://apps.karura.network/",
                    description: "swap, colateral & staking"
                },
                {
                    index: 10011,
                    ecosystem: "moonriver",
                    name: "solarbeam",
                    token: "SOLAR",
                    type: "DeFi",
                    link: "https://solarbeam.io/exchange/swap",
                    description: "swap & yielfarming"
                },
                {
                    index: 10012,
                    ecosystem:"moonriver",
                    name: "laika protocol",
                    token: "LAIKA",
                    type: "Memecoin",
                    link: "https://laikaprotocol.com/",
                    description: "deflationary"
                },
                {
                    index: 10013,
                    ecosystem: "statemine kusama",
                    name: "rmrk",
                    token: "RMRK",
                    type: "NFT",
                    link: "https://singular.rmrk.app/",
                    description: "Marketplace"
                },
                {
                    index: 10014,
                    ecosystem: "statemine kusama",
                    name: "kanaria rmrk",
                    token: "RMRK",
                    type: "NFT",
                    link: "https://kanaria.rmrk.app/",
                    description: "Game & collectibles"
                },
                {
                    index: 10015,
                    ecosystem: "moonriver",
                    name: "saturnbeam",
                    token: "",
                    type: "DeFi",
                    link: "https://saturnbeam.finance/",
                    description: "yieldfarming optimizer"
                },
                {
                    index: 10016,
                    ecosystem: "moonriver",
                    name: "moonswap",
                    token: "MOON",
                    type: "DeFi",
                    link: "https://swap.moonswap.in/",
                    description: "swap"
                },
                {
                    index: 10017,
                    ecosystem: "moonriver",
                    name: "moonfarm",
                    token: "MOON",
                    type: "DeFi",
                    link: "https://app.moonfarm.in/",
                    description: "yieldfarming"
                },
                {
                    index: 10018,
                    ecosystem: "moonriver",
                    name: "moonkafe",
                    token: "KAFE",
                    type: "DeFi",
                    link: "https://moon.kafe.finance/",
                    description: "yieldfarming"
                },
                {
                    index: 10019,
                    ecosystem: "parachain kusama",
                    name: "moonriver",
                    token: "MOVR",
                    type: "SmartContracts",
                    link: "https://moonbeam.network/networks/moonriver/",
                    description: "Layer 1.5 ETH/KSM"
                },
                {
                    index: 10020,
                    ecosystem: "statemine kusama",
                    name: "unique network",
                    token: "UNQ",
                    type: "NFT",
                    link: "https://unqnft.io/#/wallet",
                    description: "Marketplace"
                },
                {
                    index: 10021,
                    ecosystem: "parachain kusama",
                    name: "phala network",
                    token: "PHA",
                    type: "SmartContracts",
                    link: "https://phala.network/en/",
                    description: "Privacy"
                },
                {
                    index: 10022,
                    ecosystem: "parachain kusama",
                    name: "astar network (Shiden)",
                    token: "SDN",
                    type: "SmartContracts",
                    link: "https://shiden.astar.network/",
                    description: "Dapps ETH/KSM"
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