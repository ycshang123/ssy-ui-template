/*
 * @Author: ycshang
 * @Date: 2023-01-11 18:22:27
 * @LastEditors: ycshang
 * @LastEditTime: 2023-01-11 18:31:34
 */
import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import SSYUI from "ycshang-ui-vite";
import 'ycshang-ui-vite/style.css';

createApp(App)
    .use(SSYUI)
    .mount('#app')