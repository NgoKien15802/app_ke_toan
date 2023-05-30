<template>
    <div data-v-81d08c98="" class="dropdown--loading" style="">
        <div data-v-81d08c98="" class="loading">
            <div data-v-81d08c98="" class="effect-1 effects"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MLoadingCombobox",
};
</script>

<style scoped>
.dropdown--loading {
    height: var(--input-height);
    cursor: pointer;
}

.dropdown--loading .loading {
    width: var(--input-height);
    height: var(--input-height);
    left: calc(50% - 27px);
    top: auto;
}

.dropdown--loading .loading {
    width: 26px;
    height: 26px;
    left: calc(50% - 27px);
    top: auto;
}

.loading {
    position: absolute;
    left: calc(50% - 27px);
    top: calc(50% - 27px);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border: 3px solid transparent;
    z-index: 9999;
}

.loading .effects {
    transition: all 0.3s ease;
}

.loading .effect-1 {
    animation: rotate 1s ease infinite;
}
.loading .effect-1,
.loading .effect-2 {
    position: absolute;
    width: 100%;
    height: 100%;
    border: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background: transparent url(../../assets/loading.svg) no-repeat center;
    background-size: 100%;
}
</style>
