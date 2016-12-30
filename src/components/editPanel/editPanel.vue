<script>
    import template from './editPanel.html';

    export default {
        name: 'edit-panel',
        data() {
            return {
                isDisplay: true,
                bean: {},
            };
        },
        props: [
            'bean',
        ],
        template,
        methods: {
            // TODO
        },
    };
</script>

<style lang="sass" scoped>
    @import './editPanel.scss';
</style>