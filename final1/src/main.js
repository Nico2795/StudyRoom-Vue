import { createApp } from 'vue'
import App from './App.vue'

//Inicializamos Ellipse

import VueEllipseProgress from 'vue-ellipse-progress';

const app = createApp()

app.use(VueEllipseProgress)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')


