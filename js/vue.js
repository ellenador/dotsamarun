new Vue({

    //el: '#app',
    data() {
        return {
            ecosystem: '',
            type: '',
            //lists: datalist
            lists: null
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
    created: function () {
        fetch("../assets/datalist.json")
            .then(r => r.json())
            .then(lists => {
                this.lists = lists;
            });
    }
}).$mount('#app')