import './assets/main.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as MaIcons from "oh-vue-icons/icons/md"

const Fa = Object.values({ ...FaIcons });
const Ma = Object.values({ ...MaIcons });
addIcons(...Fa, ...Ma);

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(router)

app.mount('#app')
