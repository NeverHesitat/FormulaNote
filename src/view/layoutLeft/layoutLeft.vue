<script>
    import template from './layoutLeft.html';

    import vScrollbar from '../../components/scrollbar/v-scrollbar';
    import tree from '../../components/tree/tree';

    import treeData from '../../../test/vitualData/treeData.json';

    export default {
        name: 'layoutLeft',
        data() {
            return {
                isDisplay: true,
                treeData,
                treeHeight: null,
            };
        },
        template,
        components: {
            vScrollbar,
            tree,
        },
        methods: {
            resetScrollbar () {
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
        }
    };
</script>

<style lang="sass" scoped>
    @import './layoutLeft.scss';
</style>