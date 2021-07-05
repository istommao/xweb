import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import {
  ElButton,
  ElInput,
  ElSelect,
  ElHeader,
  ElAside,
  ElMain,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
} from 'element-plus'
import App from './App.vue'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.component(ElInput.name, ElInput)
app.component(ElMenu.name, ElMenu)
app.component(ElSubmenu.name, ElSubmenu)
app.component(ElMenuItem.name, ElMenuItem)
app.component(ElMenuItemGroup.name, ElMenuItemGroup)

app.component(ElContainer.name, ElContainer)
app.component(ElHeader.name, ElHeader)
app.component(ElAside.name, ElAside)
app.component(ElMain.name, ElMain)
app.component(ElButton.name, ElButton)
app.component(ElSelect.name, ElSelect)

app.use(store, key)
app.use(router)
app.mount('#app')
