<template>
    <div class="el-card" :class="shadow ? 'is-' + shadow + '-shadow' : 'is-always-shadow'" @click="handleClick">
        <div class="el-card__header" v-if="$slots.header || header">
            <slot name="header">{{ header }}</slot>
        </div>
        <div class="el-card__body" :style="bodyStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ElCard',
        props: {
            header: {},
            bodyStyle: {},
            shadow: {
                type: String
            }
        },

        methods: {
            handleClick(evt) {
                this.$emit('click', evt);
            }
        }
    };
</script>
