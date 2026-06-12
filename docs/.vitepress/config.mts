import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点基本信息（来自 NEO CODE 品牌）
  title: 'NEO CODE',
  description: '青少年科技创新教育 · NOI 备赛知识库',

  // GitHub Pages 部署路径
  base: '/LesBeta-learn/',

  // 主题配置
  themeConfig: {
    // 品牌标识
    logo: '/logo.svg',
    siteTitle: 'neo code',

    // 顶部导航栏
    nav: [
      { text: '开始学习', link: '/0-start/for-loop' },
      { text: '学习路线', link: '/0-start/for-loop' },
    ],

    // 侧边栏（内容导航）
    sidebar: [
      {
        text: '第 0 阶段 · 编程基础',
        items: [
          {
            text: 'C++ 核心语法',
            collapsed: false,
            items: [
              { text: 'for 循环', link: '/0-start/for-loop' },
              // 后续页面在这里追加
            ]
          }
        ]
      },
      // 后续阶段在这里追加
    ],

    // 底部导航文字
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    // 右侧目录栏
    outline: {
      level: [2, 3],
      label: '本页目录'
    },

    // 本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索', buttonAriaLabel: '搜索' },
          modal: {
            noResultsText: '没有找到结果',
            resetButtonTitle: '清除',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    },

    // 页脚
    footer: {
      message: '以代码点亮少年创造力',
      copyright: '© 2026 NEO CODE'
    },

    // 社交链接（填你的 GitHub 仓库）
    socialLinks: [
      // { icon: 'github', link: 'https://github.com/你的用户名/noi-docs' }
    ]
  }
})
