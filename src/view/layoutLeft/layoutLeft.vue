<script>
    import template from './layoutLeft.html';

    import vScrollbar from '../../components/scrollbar/v-scrollbar';
    import tree from '../../components/tree/tree';

    export default {
        name: 'layoutLeft',
        props: [ 'ptreedata' ],
        data() {
            return {
                isDisplay: true,
                treeHeight: null,
                selected: null,
                treedata: {},
            };
        },
        template,
        components: {
            vScrollbar,
            tree,
        },
        methods: {
            resetScrollbar() {
                this.$nextTick(() => {
                    if (document.createEvent) {
                        let event = document.createEvent("HTMLEvents");
                        event.initEvent("resize", true, true);
                        window.dispatchEvent(event);
                    } else if (document.createEventObject){
                        window.fireEvent("onresize");
                    }
                });
            },
            selectedItem(item) {
                this.selected = item;
            }
        },
        watch: {
            selected() {
                this.$emit('selected', this.selected);
            },
        },
        beforeCreate() {
            this.treedata = this.ptreedata || this.treedata;
        },
    };
</script>

<style lang="sass" scoped>
    @import './layoutLeft.scss';
</style>