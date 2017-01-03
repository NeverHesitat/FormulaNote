<script>
    import template from './tree.html';

    export default {
        name: 'tree',
        data() {
            return {
                isDisplay: true,
                isFolder: true,
                open: false,
            };
        },
        props: [
            'model',
            'depth',
        ],
        computed: {
            isFolder() {
                return this.model.children && this.model.children.length;
            },
        },
        template,
        methods: {
            // TODO
        },
    };
</script>

<style lang="sass" scoped>
    @import './tree.scss';
</style>