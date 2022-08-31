import {
  defineComponent
} from 'https://unpkg.com/vue@3.2/dist/vue.esm-browser.prod.js'

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
