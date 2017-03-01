<script>
    import template from './editPanel.html';

    export default {
        name: 'edit-panel',
        props: {
            bean: {
                type: Object,
                default: {
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
                    },
                },
            },
        },
        data() {
            return {
                isDisplay: true,
            };
        },
        template,
        methods: {
            // TODO
        },
    };
</script>

<style lang="sass" scoped>
    @import './editPanel.scss';
</style>