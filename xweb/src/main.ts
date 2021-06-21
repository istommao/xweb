import { createApp } from 'vue'
import { store, key } from './store';
import router from "./router";
import { ElButton, ElSelect } from 'element-plus';
import App from './App.vue';
// import './index.css'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)
app.component(ElButton.name, ElButton);
app.component(ElSelect.name, ElSelect);

app.use(store, key)
app.use(router)
app.mount('#app')
