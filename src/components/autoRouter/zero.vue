<template>
    <div></div>
</template>

<script>
    export default {
        name: "zero",
        data(){
            return{
                msg:''
            }
        },
        created() {
            console.log('zero window.__PRERENDER_INJECTED',window.__PRERENDER_INJECTED)
            if(window.__PRERENDER_INJECTED && window.__PRERENDER_INJECTED.foo ==='bar'){
                console.log('zero进行了预渲染')

            }else {
                console.log('zero未进行预渲染')
            }
        }

    }
</script>

<style scoped>

</style>
