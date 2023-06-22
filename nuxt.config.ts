// https://nuxt.com/docs/api/configuration/nuxt-config
// import { viteCommonjs } from '@originjs/vite-plugin-commonjs'
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  //@ts-ignore
  app :{
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      title: '我的博客',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    }
  },
    modules: [
        '@element-plus/nuxt',
        '@pinia/nuxt'
      ],
   elementPlus: { /** Options */ },
    //@ts-ignore
    typescript: {
		   shim: false
	},
  css: ['animate.css/animate.css', "@wangeditor/editor/dist/css/style.css"],
  plugins: [
    { src: '@/plugins/wow.client.js', mode: 'client' }, // 只在client(浏览器)上生效
    {src: "@/plugins/wang-editor.js", mode: 'client'},
    {src:'@/plugins/lib-flexible.js',mode:'client'}
  ],
  build: {
    //@ts-ignore
    publicPath: '/',
    transpile: [
        'echarts',
    ],
    postcss: [
      require('postcss-px2rem')({
        remUnit: 192  // 之所以写192是因为设了pc最大宽度1920px
      })
    ],
}
})


