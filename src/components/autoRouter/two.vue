<template>
    <div>
      我是two组件
        <p>{{myIP}}</p>


    </div>
</template>

<script>
    export default {
        name: "two",
        data(){
          return{
              myIP:'ip查询中'
          }
        },
        created() {

            console.log('组件two created函数执行了')

            console.log('two window.__PRERENDER_INJECTED',window.__PRERENDER_INJECTED)
            if(window.__PRERENDER_INJECTED && window.__PRERENDER_INJECTED.foo ==='bar'){
                console.log('two进行了预渲染')

            }else {
                console.log('two未进行预渲染')
            }

           const _this=this;
            // this.$axios.
            this.$axios.get('https://icanhazip.com', {
                lastName: 'Flintstone'
            })
                .then(function (response) {
                    console.log('接口数据',response);
                    _this.myIP='我的ip是'+response.data
                })
                .catch(function (error) {
                    console.error('接口出错误了',error);
                });

        }
    }
</script>

<style scoped>

</style>
