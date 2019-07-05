module.exports = {
    title: '网站标题',
    description: '网站描述',
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/web_accumulate/', // 这是部署到github相关的配置 下面会讲
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' }, // 内部链接 以docs为根目录
            { text: '前端算法', link: '/algorithm/' }, // 内部链接 以docs为根目录
            {
                text: '测试',
                link: '/test/',
                navbar: false,
                items: [
                    { 'text': '测试一', link: "/test/test1/" },
                    { 'text': '测试二', link: "/test/test2/" },
                ]

            }, // 内部链接 以docs为根目录
            // { text: '博客', link: 'http://obkoro1.com/' }, // 外部链接
            // // 下拉列表
            // {
            //     text: 'GitHub',
            //     items: [
            //         { text: 'GitHub地址', link: 'https://github.com/OBKoro1' },
            //         {
            //             text: '算法仓库',
            //             link: 'https://github.com/OBKoro1/Brush_algorithm'
            //         }
            //     ]
            // }
        ],
        sidebar: {
            '/test/test1/': [
                '', /* /foo/ */
                'one', /* /foo/one.html */
                'two' /* /foo/two.html */
            ]
        },
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    }
};