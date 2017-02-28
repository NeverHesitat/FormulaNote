<script>
    import template from './tree.html';

    export default {
        name: 'tree',
        props: [ 'pmodel', 'pdepth' ],
        data() {
            return {
                isDisplay: true,
                isFolder: true,
                open: true,
                selected: null,
                model: {},
                depth: 0,
            };
        },
        computed: {
            isFolder() {
                return this.model.children && this.model.children.length;
            },
        },
        template,
        methods: {
            // 本节点被点击
            clickNode() {
                if (this.isFolder) {
                    this.open = !this.open;
                    return;
                }

                this.selected = this.model;
            },
            // 下级节点的选中事件触发
            selectedNode(node) {
                this.selected = node;
            },
        },
        // 数据监听
        watch: {
            selected() {
                this.$emit('selected', this.selected);
            },
        },
        // 组件加载完成时自动调用的钩子函数
        beforeCreate() {
            this.model = this.pmodel || this.model;
            this.depth = this.pdepth || this.depth;
        },
    };
</script>

<style lang="sass" scoped>
    @import './tree.scss';
</style>