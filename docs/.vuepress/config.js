const path = require('path')
console.log(__dirname,'==asdfka')
module.exports = {
    title: 'zxx-ui-least',
    description: 'Just playing around',
    base: '/zxx-ui-least/',
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
            collapsable: false,
            children: [
                '/get-started/',
            ]
        },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/components/button',
                    '/components/tabs',
                    '/components/input',
                    '/components/collapse',
                    '/components/popover',
                    '/components/toast',
                ]
            },
        ]
    },
    postcss: [require('autoprefixer')],
    sass: { indentedSyntax: true },
    scss:{
        includePaths: [path.join(__dirname, '../../src/scss')]
    },
    chainWebpack: (config, isServer) => {
        config.resolveLoader
            .modules
            .add(path.resolve(__dirname, './node_modules'))
    }
}
