<template>
    <div>
      我是one组件
    </div>
</template>

<script>
    export default {
        name: "one",
        created() {
            console.log('one window.__PRERENDER_INJECTED',window.__PRERENDER_INJECTED)
            if(window.__PRERENDER_INJECTED && window.__PRERENDER_INJECTED.foo ==='bar'){
                console.log('one进行了预渲染')

            }else {
                console.log('one未进行预渲染')
            }
        }
    }
</script>

<style scoped>

</style>
