import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "家庭网络知识库",
  description: "从零开始理解和优化家庭网络",
  lang: 'zh-CN',
  srcDir: '.',

  vite: {
    server: {
      port: 3000,
      host: '0.0.0.0'
    }
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/README' }
    ],

    sidebar: [
      {
        text: '总体规划',
        link: '/README',
        collapsed: false,
        items: [
          { text: '系列规划', link: '/00-总体规划/系列规划' }
        ]
      },
      {
        text: '第一季：基础知识篇',
        link: '/01-基础知识/README',
        collapsed: false,
        items: [
          { text: '1. 网络体验的秘密', link: '/01-基础知识/01-网络体验的秘密' },
          { text: '2. 第一次装宽带', link: '/01-基础知识/02-第一次装宽带' },
          { text: '3. 光纤入户与光猫', link: '/01-基础知识/03-光纤入户与光猫' },
          { text: '4. 向光猫宣战', link: '/01-基础知识/04-折腾家庭网络就是要向光猫宣战' }
        ]
      },
      {
        text: '第二季：终端接入优化',
        link: '/02-终端接入优化/README',
        collapsed: false,
        items: [
          { text: '1. 有线网络接入与交换机', link: '/02-终端接入优化/01-有线网络接入与交换机' },
          { text: '2. 增加无线路由器', link: '/02-终端接入优化/02-增加无线路由器提高WiFi覆盖' },
          { text: '3. 独立 AP 提高无线覆盖', link: '/02-终端接入优化/03-独立AP提高无线覆盖' },
          { text: '4. Mesh 组网', link: '/02-终端接入优化/04-Mesh组网' },
          { text: '5. AC+AP 模式', link: '/02-终端接入优化/05-AC+AP模式提高无线覆盖' }
        ]
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          { text: '运营商宽带速率限制机制分析', link: '/99-其他/运营商宽带速率限制机制分析' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    }
  }
})
