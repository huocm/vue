<template>
  <div>
    <blog-header></blog-header>
    <hr/>
    <div>
      首页
    </div>
    <hr/>
  <blog-footer></blog-footer>
  </div>
</template>

<script>
    import BlogHeader from "./BlogHeader.vue";
    import BlogFooter from "./BlogFooter.vue";
    export default {
        name: "BlogIndex",
      components: {BlogFooter, BlogHeader}
    }
</script>

<style scoped>

</style>
