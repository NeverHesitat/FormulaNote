<script>
    import template from './layoutLeft.html';

    import scrollbar from '../../components/scrollbar/scrollbar';
    import tree from '../../components/tree/tree';

    export default {
        name: 'layoutLeft',
        data() {
            return {
                isDisplay: true,
            };
        },
        template,
        components: {
            scrollbar,
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