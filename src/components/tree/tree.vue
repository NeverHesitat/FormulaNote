<script>
    import template from './tree.html';

    export default {
        name: 'tree',
        props: {
            model: Object,
            depth: Number,
            selected: Object,
        },
        data() {
            return {
                isDisplay: true,
                isFolder: true,
                open: true,
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
                this.$emit('selected', this.model);
            },
            // 下级节点的选中事件触发
            selectedNode(node) {
                this.$emit('selected', node);
            },
        },
    };
</script>

<style lang="sass" scoped>
    @import './tree.scss';
</style>