<template>
    <button
        class="btn combox-btn"
        v-if="mode === 'btnAdd'"
        :tabindex="tabindex"
        :id="id"
        :disabled="disabled"
        :style="style"
    >
       
        <span class="combox-btn-text"  :class="className"  @click="click">{{ text }}</span>
        <span class="combox-btn-mark"></span>

        <div class="wrap-icon-combox" ref="iconContextMenu" :class="classStyle" @click="($event) => this.$emit('clickBtnRight',$event)"><div class="icon__combox-btn"></div></div>
    </button>

    <button
        v-else
        :tabindex="tabindex"
        :class="kind !== 'link' ? `btn ${className}` : className"
        :id="id"
        @click="click"
        :disabled="disabled"
    >
        {{ text }}
        <slot></slot>
    </button>


</template>
<script>
export default {
    name: "MButton",
    props: {
        // text bên trong button
        text: {
            type: String,
            default: "",
            required: true,
        },
        // Loại button: primary, default,...
        kind: {
            type: String,
            default: "primary",
        },
        // class cho button
        className: {
            type: String,
            default: "btn-primary",
        },
        classStyle: {
            type:String
        },
        // id cho button
        id: {
            type: String,
        },
        // tabindex nếu có
        tabindex: {
            type: String,
            default: "",
        },
        // handle khi click button
        click: {
            type: Function,
        },
        // cho btn disabled hay không
        disabled: {
            type: Boolean,
            default: false,
        },

        // Loại button: add, ...
        mode: {
            type: String,
        },

        // css button inline
        style:{
            type:String
        },
        iconContextMenu: {
            type: Object,
            
        }
        
    },
};
</script>

<style scoped>
@import url(../../css/components/button.css);
</style>
