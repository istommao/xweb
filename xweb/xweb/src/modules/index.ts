import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'

export default defineComponent({
  name: 'Index',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const store = useStore(key)

    const count = computed(() => store.state.count)

    const inCrement = () => store.commit('increment')

    return {
      count,
      inCrement
    }
  }
});