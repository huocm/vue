<template>
    <div>
      <blog-header></blog-header>
      <hr>
      <div>
        用户名：<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名"/>
        <br/>
        密码：<input type="text" v-model="loginInfoVo.password" placeholder="请输入密码">
        <br/>
        <button v-on:click="login">登录</button>
        登录验证：<textarea cols="30" rows="10" v-model="responseResult"></textarea>
      </div>
      <hr/>
      <blog-footer></blog-footer>
    </div>
</template>

<script>
    import BlogHeader from "./BlogHeader";
    import BlogFooter from "./BlogFooter";
    export default {
        name: "BlogLogin",
      components: {BlogFooter, BlogHeader},
      data(){
          return{
           loginInfoVo:{usrename:'',password:''} ,
            responseResult:[]
          }
      },
      methods:{
          login(){
            this.$axios.post('login',{
              username: this.loginInfoVo.usrename,
              password: this.loginInfoVo.password
            }).then(successResponse=>{
              this.responseResult=JSON.stringify(successResponse.data)
              if(successResponse.data.code===200){
                this.$router.replace({path: '/index'})
              }
            }).catch(failResponse=>{})
          }
      }
    }
</script>

<style scoped>

</style>
