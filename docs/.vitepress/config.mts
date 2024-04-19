
import {defineConfig} from 'vitepress'
import {withMermaid} from "vitepress-plugin-mermaid";
import timeline from "vitepress-markdown-timeline";

// https://vitepress.dev/reference/site-config
export default withMermaid(
    defineConfig({
        // base: '/docs/',
        lang: 'zh-CN',
        title: "YouQu | Linux自动化测试利器",
        description: "",
        head: [
            ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}],
        ],
        vite: {
            publicDir: "assets",
        },
        markdown: {
            config: (md) => {
                md.use(timeline)
            }
        },

        themeConfig: {
            // https://vitepress.dev/reference/default-theme-config
            siteTitle: "",
            nav: [
                {text: '指南', link: '/指南/简介/快速开始'},
                {text: '框架设计', link: '/框架设计/AT基础框架设计方案'},
                {text: 'FAQ', link: '/FAQ'},
                {text: '更新日志', link: '/RELEASE'},
                {
                    text: '插件', items: [
                        {text: "funnylog", link: "https://linuxdeepin.github.io/funnylog/"},
                        {text: "letmego", link: "https://linuxdeepin.github.io/letmego/"},
                        {text: "pdocr-rpc", link: "https://linuxdeepin.github.io/pdocr-rpc/"},
                        {text: "image-center", link: "https://linuxdeepin.github.io/image-center/"},
                    ]
                },
            ],

            sidebar: {
                "/指南/": [
                    {
                        text: "简介",
                        items: [
                            {text: "YouQu是什么", link: "/指南/简介/YouQu是什么"},
                            {text: "快速开始", link: "/指南/简介/快速开始"},
                        ]
                    },
                    {
                        text: "环境",
                        collapsed: false,
                        items: [
                            {text: "环境部署", link: "/指南/环境/环境部署"},
                            {text: "全局配置", link: "/指南/环境/全局配置"},
                        ]
                    },
                    {
                        text: "元素定位",
                        collapsed: false,
                        items: [
                            {text: "图像识别", link: "/指南/元素定位/图像识别"},
                            {text: "属性定位", link: "/指南/元素定位/属性定位"},
                            {text: "OCR识别", link: "/指南/元素定位/OCR识别"},
                            {text: "相对坐标定位", link: "/指南/元素定位/相对坐标定位"},
                        ]
                    },
                    {
                        text: "框架必备",
                        collapsed: false,
                        items: [
                            {text: "执行管理器", link: "/指南/框架必备/执行管理器"},
                            {text: "测试报告", link: "/指南/框架必备/测试报告"},
                            {text: "键鼠操作", link: "/指南/框架必备/键鼠操作"},
                        ]
                    },
                    {
                        text: "特色功能",
                        collapsed: false,
                        items: [
                            {text: "标签化管理", link: "/指南/特色功能/标签化管理"},
                            {text: "全自动日志", link: "/指南/特色功能/全自动日志"},
                            {text: "失败录屏", link: "/指南/特色功能/失败录屏"},
                            {text: "标签自动同步", link: "/指南/特色功能/标签自动同步"},
                            {text: "Wayland适配", link: "/指南/特色功能/Wayland适配"},
                            {text: "重启类场景", link: "/指南/特色功能/重启类场景"},
                            {text: "数据回填", link: "/指南/特色功能/数据回填"},
                        ]
                    },
                ],
                "/框架设计/": [
                    {text: "AT应用库设计方案", link: "/框架设计/自动化测试架构设计v1.0"},
                    {text: "AT基础框架设计方案", link: "/框架设计/AT基础框架设计方案"},
                    {text: "AT应用库设计方案", link: "/框架设计/AT应用库设计方案"},
                ]
            },
            search: {
                provider: 'local'
            },
            ignoreDeadLinks: true,
            // =========================================================
            logo: {src: '/logo.png', width: 70, height: 24},
            socialLinks: [
                {icon: 'github', link: 'https://github.com/linuxdeepin/youqu'}
            ],
            footer: {
                copyright: `版权所有 © 2023-${new Date().getFullYear()} 统信软件`
            },
            //大纲显示2-3级标题
            outline: [2, 4],
            //大纲顶部标题
            outlineTitle: '当前页大纲',

            docFooter: {
                prev: '上一页',
                next: '下一页'
            },

            lastUpdated: {
                text: '最后更新于',
                formatOptions: {
                    dateStyle: 'short',
                    timeStyle: 'medium'
                }
            },

            langMenuLabel: '多语言',
            returnToTopLabel: '回到顶部',
            sidebarMenuLabel: '菜单',
            darkModeSwitchLabel: '主题',
            lightModeSwitchTitle: '切换到浅色模式',
            darkModeSwitchTitle: '切换到深色模式'
        },
    })
);
