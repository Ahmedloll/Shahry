<template>
  <div class="single-review">
    <img :src="comment.picture" alt="avatar" class="rev-avatar" />
    <div class="name">{{ comment.name }}</div>
    <div>{{ comment.date }}</div>
    <h2>{{ comment.title }}</h2>
    <Rate :rate="comment.rating"></Rate>
    <p>{{ comment.review }}</p>
    <button>ADD COMMENT</button>
  </div>
</template>

<script>
  import Rate from "./Rate";
  export default {
    name: "SingleReview",
    props: ["comment"],
    components: { Rate },
  };
</script>

<style scoped>
  .single-review {
    background-color: white;
    margin-bottom: 120px;
    border-radius: 4px;
    box-shadow: 0px 0px 15px 2px lightgrey;
  }
  .rev-avatar {
    margin-top: -64px;
    border-radius: 50%;
  }
  .name {
    color: #007bff;
  }
  p {
    padding: 20px 50px;
    text-align: left;
  }
  button {
    background-color: #00be95;
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 4px;
    font-weight: 600px;
    margin-bottom: 60px;
  }
</style>
