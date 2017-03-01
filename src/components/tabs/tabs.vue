<script>
    import template from './tabs.html';

    export default {
        name: 'tabs',
        data() {
            return {
                isDisplay: true,
            };
        },
        props: {
            items: Array,
            selected: Object,
        },
        template,
        methods: {
            removeSelected(item) {
                this.$emit('remove', item);
            },
        },
        watch: {
            selected() {
                this.$emit('selected', this.selected);
            },
        },
    };
</script>

<style lang="sass" scoped>
    @import './tabs.scss';
</style>