<template>
  <div>
    <h3> 抱歉！页面未找到。点击 <span style="color: blue;cursor: pointer" @click="goToFirstPage">这里</span> 跳转至首页。
    </h3>
    <ol>
      <li>
        可能您收藏的网址已被移除或更新了，请在收藏夹中删除该旧网址，重新收藏新网址;
      </li>
      <li>
        请检查您输入的网址是否正确；（注意空格、大小写和相似字母等）;
      </li>
    </ol>

    <p>错误代码：404</p>
  </div>
</template>

<script>

  export default {
    data() {
      return {};
    },
    methods: {
      goToFirstPage() {
        window.location.href = window.location.origin;
      },
    },
    // mounted() {
    //   if (confirm('抱歉，您访问的网址不存在，是否跳转至首页？')) {
    //     window.location.href = window.location.host
    //   }
    // },
  };
</script>



