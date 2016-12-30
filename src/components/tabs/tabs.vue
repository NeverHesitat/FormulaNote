<script>
    import template from './tabs.html';

    export default {
        name: 'tabs',
        data() {
            return {
                isDisplay: true,
                selected: 0,
            };
        },
        props: [
            'items'
        ],
        template,
        methods: {
            // TODO
        },
    };
</script>

<style lang="sass" scoped>
    @import './tabs.scss';
</style>