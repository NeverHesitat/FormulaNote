<script>
    import template from './tabs.html';

    export default {
        name: 'tabs',
        data() {
            return {
                isDisplay: true,
                selected: {},
                items: [],
            };
        },
        props: [ 'p_items', 'p_selected' ],
        template,
        methods: {
            // TODO
        },
        watch: {
            items() {
                this.$emit('items', this.items);
            },
            selected() {
                this.$emit('selected', this.selected);
            },
        },
        mounted() {
            this.items = this.p_items || this.items;
            this.selected = this.p_selected || this.selected;
        },
    };
</script>

<style lang="sass" scoped>
    @import './tabs.scss';
</style>