import {
  defineComponent
} from 'vue'

export default defineComponent({
  template: `
    <div class="mf1">
      <h2>MF1: Hello, {{ name }}!!!</h2>
    </div>
  `,
  props: {
    name: { type: String, default: 'Jane' },
  },
  mounted() {
    console.log('MF1: started')
  },
  beforeUnmount() {
    console.log('MF1: unloaded')
  },
})
