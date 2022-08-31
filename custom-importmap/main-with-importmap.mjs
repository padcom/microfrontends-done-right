import {
  defineComponent,
  defineAsyncComponent,
  createApp,
} from 'vue'

const MF1 = defineAsyncComponent(() => import('mf1'))

const Microfrontend = defineComponent({
  template: `
    <div ref="root"></div>
  `,
  props: {
    url: { type: String, required: true },
  },
  async mounted() {
    console.log('Microfrontend.mounted() URL', this.url)
    const { default: start } = await import(this.url)
    this.unload = start(this.$refs.root)
  },
  beforeUnmount() {
    console.log('Microfrontend.beforeDestroy() URL', this.url)
    this.unload()
  },
})

const App = defineComponent({
  template: `
    <div>
      <input v-model="name">
    </div>
    <div>
      <label>
        Enable MF1: <input type="checkbox" v-model="mf1Enabled">
      </label>
    </div>
    <div>
      <label>
        Enable MF2: <input type="checkbox" v-model="mf2Enabled">
      </label>
    </div>

    <MF1 v-if="mf1Enabled" :name="name" />
    <Microfrontend v-if="mf2Enabled" url="mf2" />
  `,
  components: {
    MF1,
    Microfrontend,
  },
  data() {
    return {
      name: 'Johnny',
      mf1Enabled: false,
      mf2Enabled: false,
    }
  },
})

createApp(App).mount('#app')
