// 导入插件样式
import scss from './main.scss';

// 引入Vue函数库
import Vue from 'vue';

// 引入Vue组件
import layoutTop from './view/layoutTop/layoutTop';
import layoutLeft from './view/layoutLeft/layoutLeft';
import layoutRight from './view/layoutRight/layoutRight';

// 引入插件主页布局
import homeLayout from './view/homeLayout.html';

// 导入测试数据
import treedata from '../test/vitualData/treeData.json';

/********* 静态方法 *********/

/********* 私有方法 *********/

const createViewFunc = function(element, settings) {
    // 模板 dom 插入到元素
    $(element).html(homeLayout).attr({
        // 插件标记
        'zjb-fn' : '',

        // 防止页面加载时出现 vuejs 的变量名
        'v-cloak': '',

        // 数据绑定：显示dom
        'v-show' : "isDisplay",
    });

    // 绑定数据
    element.vm = new Vue({
        el: element,
        data: {
            settings,
            isDisplay: true,
            // 测试数据
            treedata,
            selItems: [],
            currentSelected: null,
        },
        components: {
            layoutTop,
            layoutLeft,
            layoutRight,
        },
        methods: {
            show() {
                this.isDisplay = true;
            },
            hide() {
                this.isDisplay = false;
            },
            // 添加选中元素
            addSelected(item) {
                this.selItems.push(item);
                this.currentSelected = item;
            },
            // 同步选中items
            syncSelects(items) {
                this.selItems = items;
            },
        },
    });
};

/********* 接口 *********/

$.fn.formulaNote = function(option, ...args) {
	if (typeof option === 'string') {
        let func = $.fn.formulaNote.methods[option];
        if (func && typeof func == 'function')
            return func([this[0]].concat(args));
        throw new Error('Cannot find instance method: ' + option);
    }

    let opt = option || {};
    opt = $.extend({}, $.fn.formulaNote.defaults, option);
    $(this).each((i) => {
        createViewFunc(this[i], opt);
    });
};

$.fn.formulaNote.defaults = {};

$.fn.formulaNote.methods = {};