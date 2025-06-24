import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import mixin from './scripts/mixin.js'

const app = createApp(App)
const vuetify = createVuetify()
app.mixin(mixin)
app.use(router)
app.use(vuetify)
app.mount('#app')
