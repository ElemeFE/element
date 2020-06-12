<template>
    <i :class="getColor() + 'el-icon-' + name"></i>
</template>

<script>
export default {
    name: 'ElIcon',

    props: {
        name: String,
        type: {
            type: String,
            default: 'default',
        },
    },
    computed: {
        getColor() {
            if (this.type.length) {
                return `el-link el-link--${this.type} `;
            }
            return '';
        },
    },
};
</script>
