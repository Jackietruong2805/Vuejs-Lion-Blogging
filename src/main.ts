import { createApp } from 'vue'
import {router} from "./Routes/index"
import './styles/index.scss';
import App from './App.vue'

const app = createApp(App);

app
.use(router)
.mount('#app')
