/**
 * Created by zhang-j on 2016/3/23.
 */
import list from '../../../resources/list.js';
import Vue from 'vue';

var listComponent = Vue.extend({
    template: '#listTemplate',
    props:['types','type','index'],
    methods: {
        removeList: function(index) {
            this.$root.listArr.splice(index, 1);
        }
    }
});
Vue.component('list-component', listComponent);

export default {
    el: '#app',
    data: {
        listArr:[{
            type: "",
            types: list.type
        }]
    },
    methods: {
        addList: function() {
            this.listArr.push({
                type: "",
                types: list.type
            });
        }
    }
}