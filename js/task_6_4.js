let app = new Vue({
    el: '#app',
    data: {
        attr: {
            showWorld: true,
            showHello: true
        }
    },
    methods: {
        toggleAttr: function () {
            for (let popin in this.attr) {
                this.attr[popin] = (this.attr[popin] !== true);
            }
        }
    }
});