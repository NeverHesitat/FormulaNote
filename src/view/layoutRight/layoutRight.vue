<script>
    import template from './layoutRight.html';

    import tabs from '../../components/tabs/tabs';
    import editPanel from '../../components/editPanel/editPanel';

    import eidtPanelData from '../../../test/vitualData/eidtPanelData.json';
    import tabsData from '../../../test/vitualData/tabsData.json';

    export default {
        name: 'layoutRight',
        data() {
            return {
                isDisplay: true,
                eidtPanelData,
                tabsData,
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