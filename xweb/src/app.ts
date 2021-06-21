import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const navList = [
      {name: '/', navItem: '首页'},
      {name: '/about', navItem: '关于'},
    ]

    return { navList }
  }
})
