<template>
  <div>
    <h2>New Post</h2>
    <form @submit.prevent="onSubmit">
      <textarea cols="30" rows="10" vmodel="inputTxt" :disabled="disabled"></textarea>
      <input type="submit" :value="btnTxt" :disabled="disabled">
    </form>
  </div>
</template>

<script>
import { Post } from "../api";
export default {
  data() {
    return { isSaving: false, inputTxt: "" };
  },
  // computed 저장, 캐싱, 해당 속성이 종속된 대상이 변경될 때만 함수를 실행
  computed: {
    btnTxt() {
      // 저장할 때, 잠깐의 로딩 시간동안 버튼 모양 변경
      return this.isSaving ? "Saving..." : "Save";
    },
    disabled() {
      // 저장할 때, 잠깐의 로딩 시간동안 버튼 비활성화
      return this.isSaving;
    }
  },
  methods: {
    onSubmit() {
      this.isSaving = true;
      Post.create(this.inputTxt).then(() => {
        this.isSaving = false;
        this.inputTxt = "";
        this.$router.push("/posts");
      });
    }
  }
};
</script>