<script>
    import template from './editPanel.html';

    export default {
        name: 'edit-panel',
        data() {
            return {
                isDisplay: true,
                bean: {
                    "name": "NAME",
                    "dependencies": {
                        "text": "DEPENDENCIES CONTENT"
                    },
                    "usage": {
                        "text": "USAGE CONTENT"
                    },
                    "properties": {
                        "text": "PROPERTIES CONTENT"
                    },
                    "events": {
                        "text": "EVENTS CONTENT"
                    },
                    "methods": {
                        "text": "METHODS CONTENT"
                    }
                },
            };
        },
        props: [ 'p_bean' ],
        template,
        methods: {
            // TODO
        },
        mounted() {
            this.bean = this.p_bean || this.bean;
        }
    };
</script>

<style lang="sass" scoped>
    @import './editPanel.scss';
</style>