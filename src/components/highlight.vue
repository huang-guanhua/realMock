<template>
    <highlightjs
        class="highlight-warpper"
        autodetect
        language="javascript"
        :code="str"
    />
</template>
<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import hljsVuePlugin from '@highlightjs/vue-plugin'

export default defineComponent({
    props:{
        code: {
            type: String,
            required: true
        }
    },
    components: {
        highlightjs: hljsVuePlugin.component
    },
    setup(props) {
        const {code} = toRefs(props)
        const str = computed(() =>code.value)
        return {
            str
        }
    },
})
</script>

<style lang="scss" scoped>
.highlight-warpper{
    margin: 10px;
    height: 100%;
}
</style>
