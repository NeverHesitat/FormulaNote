// const precss = require('precss');

// 自动补全css3前缀: 自动检测兼容性给各个浏览器加个内核前缀的插件
const autoprefixer = require('autoprefixer');
module.exports = {
    plugins: [
        // precss({ /* ...options */ }),
        autoprefixer({ browsers: [
            'ie >= 9', 'firefox >= 28', 'chrome >= 21'
        ] })
    ]
}