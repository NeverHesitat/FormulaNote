<script>
    import template from './layoutRight.html';

    import tabs from '../../components/tabs/tabs';
    import editPanel from '../../components/editPanel/editPanel';

    export default {
        name: 'layoutRight',
        props: {
            items: Array,
        },
        data() {
            return {
                isDisplay: true,
                selected: {},
            };
        },
        template,
        components: { tabs, editPanel },
        methods: {
            selectItem(item) {
                this.selected = item;
            },
            removeItem(item) {
                this.$emit('remove', item);
                if (item == this.selected)
                    this.selected = this.items[0] || {};
            },
        },
        watch: {
            'items.length'(len, old) {
                if (len > old)
                    this.selected = this.items[0];
            },
        },
    };
</script>

<style>
    @import './layoutRight.scss';
</style>