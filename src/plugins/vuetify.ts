/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 * https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme:'dark',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },
  },
})