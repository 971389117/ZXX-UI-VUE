module.exports = {
    title: 'zxx-ui-least',
    description: 'Just playing around',
    base:'/zxx-ui-least/',
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Guide',
                link: '/guide/'
            },
            {
                text: 'External',
                link: 'https://google.com'
            },
            {
                text: 'Languages',
                items: [{
                        text: '简体中文',
                        link: '/language/chinese'
                    },
                    {
                        text: 'Japanese',
                        link: '/language/japanese'
                    }
                ]
            }
        ],
        sidebar: [{
                title: '入门',
                children: [
                    '/',
                    '/安装',
                    '/快速上手',
                ]
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                ]
            },
        ]
    }
}
