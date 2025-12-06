
import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: "日记本",
  description: "用文字记录生活的点滴，每一天都值得被珍藏。",
  themeConfig: {
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📖 日记', link: '/diary' },
      //{ text: '🏷️ 标签', link: '/tags' }
      { text: '🏷️ 标签', link: '/processing.html' }
    ],
    sidebar: generateSidebar({
      documentRootPath: '.',
      useTitleFromFileHeading: true,
      //excludeFiles: ['index.md','processing.md','tags.md',"node_modules"],
      collapsed: false
    }),
    outline: {
      level: [2, 3],
      label: '日记目录'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huanhuan0812/' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/3493288984184945' }
    ],
    logo: '/diary-logo.png',
    footer: {
      message: '用心书写每一天',
      copyright: '© 2023-2025 我的温馨日记'
    }
  },
  // 标签支持：可用于主题扩展或自定义插件
  custom: {
    tags: [
      { name: '生活', color: 'green' },
      { name: '学习', color: 'blue' },
      { name: '随笔', color: 'orange' },
      { name: '成长', color: 'purple' }
    ]
  }
})
