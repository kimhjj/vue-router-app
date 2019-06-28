<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/posts">Posts</router-link> |
      <router-link to="/posts/new" exact>New Post</router-link> |
      <router-link to="/posts/:id" exact>Detail Post</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/** router link style ==> vuejs에서 정의된 스타일, 일부 경로가 일치되면 자동으로 추가 되는 클래스(전방일치) **/
.router-link-active {
color: white;
background-color: red;
}
/** router link style ==> vuejs에서 정의된 스타일, 모든 경로가 일치되면 자동으로 추가 되는 클래스 **/
.router-link-exact-active {
color: white;
background-color: blue;
}
</style>
