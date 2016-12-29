<script>
    import tempalte from './layoutRight.html';

    import tabs from '../../components/tabs/tabs';
    import editPanel from '../../components/editPanel/editPanel';

    export default {
        name: 'layoutRight',
        data() {
            return {
                isDisplay: true,
            };
        },
        template,
        components: {
            tabs,
            editPanel,
        },
        methods: {},
    };
</script>

<style>
    @import './layoutRight.scss';
</style>