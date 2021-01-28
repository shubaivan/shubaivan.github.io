let app = new Vue({
    el: '#app',
    data: {
        items: [2, 3, 4],
    },
    methods: {
        removeItem: function(index) {
            // this.items[index] = this.items[index] * this.items[index];
            this.items = this.items.map((v, k) => {
                v = v.toString();
                let s = v.match(/\d+/g).join('');
                return k === index ? (s * s + '!') : v;
            })
        }
    }
});