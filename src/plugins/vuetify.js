// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)
console.log(colors);
const opts = {
    theme: {
        dark: true,
        themes: {
            iconfont: 'mdiSvg',
            light: {
                primary: colors.shades.black,
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
            },
            dark: {
                primary: colors.shades.white,
            },
        },
    },
}

export default new Vuetify(opts)