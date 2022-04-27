import { sum } from "./js/math";
import { createApp } from 'vue/dist/vue.esm-bundler';
const {priceFormat} = require('./js/format');

import "./js/element";

console.log(sum(20, 30));
console.log(priceFormat());

const app = createApp({
    template: `<h2>我是vue渲染出来的</h2>`,
    data() {
        return {
            title: "Hello World"
        }
    }
});
app.mount("#app");