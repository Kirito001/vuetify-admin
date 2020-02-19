import '@mdi/font/css/materialdesignicons.css';
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

// vuetify提供的颜色变量
import colors from 'vuetify/es5/util/colors'

// Vuetify (javascript)提供的翻译
import zhHans from 'vuetify/es5/locale/zh-Hans'

Vue.use(Vuetify);

Vue.component('my-component', {
    methods: {
        changeLocale () {
            this.$vuetify.lang.current = 'sv'
        }
    }
})

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    lang: {
        locales: { zhHans },
        current: 'zhHans'
    },
    theme: {
        dark: false,
        themes: {
            light: {
                primary: colors.blue.base,
                secondary: colors.orange.base,
                accent: '#232f34',
                divder: '#fafafa',
                error: colors.red.base
            },
            dark: {
                primary: colors.blue.base,
                secondary: colors.amber.base,
                accent: '#232f34',
                divder: '#121212',
                error: colors.red.base
            }
        }
    }
});