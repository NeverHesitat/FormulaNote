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
            };
        },
        template,
        components: {
            vScrollbar,
            tree,
        },
        methods: {
            // TODO
        },
    };
</script>

<style lang="sass" scoped>
    @import './layoutLeft.scss';
</style>