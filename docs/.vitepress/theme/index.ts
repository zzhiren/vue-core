import { h } from 'vue'
import { Theme, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { Tooltip, TypographyText, TypographyParagraph, Button } from 'ant-design-vue'

// import AsideSponsors from './components/AsideSponsors.vue'
// import AsideSponsors from './components/AsideSponsors.vue'
import './styles/vars.css'
import './styles/index.css'
// import 'ant-design-vue/dist/reset.css';

// import VueSchoolLink from './components/VueSchoolLink.vue'
// import VueMasteryLogoLink from './components/VueMasteryLogoLink.vue'

const theme: Theme = {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // 'home-features-after': () => h(HomeSponsors),
      // 'aside-ads-before': () => h(AsideSponsors),
    })
  },

  enhanceApp({ app }) {
    app.component('ATooltip', Tooltip)
    app.component('AButton', Button)
    app.component('a-typography-text', TypographyText)
    app.component('a-typography-paragraph', TypographyParagraph)
    // app.component('VueSchoolLink', VueSchoolLink)
    // app.component('VueMasteryLogoLink', VueMasteryLogoLink)
  },
}

export default theme
