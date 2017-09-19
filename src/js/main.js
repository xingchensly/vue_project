import Vue from "vue";

import app from "../components/app.vue"

var vm=new Vue({
    el:"#app",
    render:h=>h(app)
})