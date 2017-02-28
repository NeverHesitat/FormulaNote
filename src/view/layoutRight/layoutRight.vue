<script>
    import template from './layoutRight.html';

    import tabs from '../../components/tabs/tabs';
    import editPanel from '../../components/editPanel/editPanel';

    export default {
        name: 'layoutRight',
        props: [ 'p_items', 'p_selected' ],
        data() {
            return {
                isDisplay: true,
                selected: {},
                items: [],
            };
        },
        template,
        components: { tabs, editPanel },
        methods: {
            selectedItem(item) {
                this.selected = item;
            },
            syncItems(items) {
                this.items = items;
            },
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

<style>
    @import './layoutRight.scss';
</style>