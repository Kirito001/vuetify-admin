import Vue from 'vue'
import Vuetify from 'vuetify/lib'
// import 'vuetify/src/stylus/app.styl'
import 'vuetify/dist/vuetify.min.css'

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md'
  },
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#ff9800',
        secondary: colors.blue.lighten4,
        accent: '#3f51b5',
        error: colors.red.accent3,
        info: colors.blue.base,
        success: colors.green.base,
        warning: colors.amber.base
      },
      dark: {
        primary: colors.blue.base,
        accent: colors.grey.darken4
      }
    }
  }
})