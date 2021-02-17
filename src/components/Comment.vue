<template>
  <div class="comment">
    <p class="left">
      {{ comment.reply }}
    </p>
    <img :src="comment.img" alt="" />
  </div>
</template>
<script>
  export default {
    name: "Comment",
    props: ["comment"],
  };
</script>

<style scoped>
  .comment {
    position: relative;
    background-color: #c2c4c956;
    border-radius: 3px;
    padding: 15px 20px 0px;
    text-align: center;
    margin-bottom: 60px;
  }
  .comment:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-bottom-color: #c2c4c956;
    border-top: 0;
    margin-left: -10px;
    margin-top: -10px;
  }
  img {
    display: block;
    border-radius: 50%;
    width: 40px;
    position: relative;
    top: 18px;

    margin: auto;
  }
  p {
    margin: 0;
  }
</style>
