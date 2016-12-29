<script>
    import template from './tabs.html';

    export default {
        name: 'tabs',
        data() {
            return {
                isDisplay: true,
                items: [],
                selected: 0,
            };
        },
        props: [
            'tab'
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