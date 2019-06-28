<template>
  <div>
    <h2>View Post</h2>
    <div v-if="loading">Loading...</div>
    <div v-if="post">
      <h3>[ID: {{post.id}}]</h3>
      <div>{{post.text}}</div>
    </div>
  </div>
</template>

<script>
import { Post } from "../api";
export default {
  data() {
    return {
      post: null,
      loading: true
    };
  },
  created() {
    this.fetchData();
  },
  // ★ router link가 변경되었다는 것을 감지하는 기능. refresh
  // 변경되면 fetchData 호출
  watch: {$route: 'fetchData'},
  methods: {
    fetchData() {
      this.post = null;
      this.loading = true;
      // id 하나를 가져온다.
      // watch에서 감시하고 있다가 변경되면 fetchData() ==> this.$route 객체 호출
      Post.get(this.$route.params.id).then(data => {
        this.post = data;
        this.loading = false;
      });
    }
  }
};
</script>