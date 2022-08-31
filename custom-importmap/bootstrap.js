(() => {

const importmap = {
  imports: {
    'vue': 'https://unpkg.com/vue@3.2/dist/vue.esm-browser.prod.js',
    'mf1': '/mf1-with-importmap.mjs',
    'mf2': '/mf2.mjs',
  }
}

const script = document.createElement('script')
script.type = 'importmap'
script.innerText = JSON.stringify(importmap)
document.head.appendChild(script)

})()
