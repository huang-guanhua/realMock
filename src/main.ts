import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import { eleComponents } from './config/elementPlus'
import 'element-plus/packages/theme-chalk/src/base.scss'
import './config/theme.css'
import App from './App.vue'
import router from './router'

import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import vuePlugin from '@highlightjs/vue-plugin'
import 'highlight.js/scss/vs2015.scss'

hljs.registerLanguage('json', json);

const app = createApp(App)

eleComponents.forEach(component => {
    app.component(component.name, component)
})
app.use(router).use(vuePlugin).mount('#app')