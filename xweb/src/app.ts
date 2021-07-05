import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const navList = [
      { url: '/', name: '首页' },
      { url: '/about', name: '关于' },
      { url: '/editor', name: 'Editor' },
      { url: '/codemirror', name: 'CodeMirror' },
    ]

    return { navList }
  }
})
