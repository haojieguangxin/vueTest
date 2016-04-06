/**
 * Created by zhang-j on 2016/3/31.
 */
var listComponent = Vue.extend({
    template: '#listTemplate',
    data: function() {
        return {
            type: "",
            types: list.type
        };
    }
});

Vue.component('list-component', listComponent);

new Vue ({
    el: '#app',
    methods: {
        addList: function() {
        }
    }
});