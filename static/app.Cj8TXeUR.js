import{U as o,am as p,an as u,ao as l,ap as c,aq as f,ar as d,as as m,at as h,au as g,av as A,d as v,u as y,y as P,x as w,aw as C,ax as b,ay as E,a9 as R}from"./chunks/framework.C70okhVW.js";import{t as S}from"./chunks/theme.De1lpEm4.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(S),_=v({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=y();return P(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&C(),b(),E(),s.setup&&s.setup(),()=>R(s.Layout)}});async function x(){globalThis.__VITEPRESS__=!0;const e=D(),a=T();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function T(){return h(_)}function D(){let e=o,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=import(n)),o&&(e=!1),r},s.NotFound)}o&&x().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{x as createApp};