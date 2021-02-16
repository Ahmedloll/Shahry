<template>
  <div class="single-review">
    <img :src="comment.picture" alt="avatar" class="rev-avatar" />
    <div class="name">{{ comment.name }}</div>
    <div>{{ comment.date }}</div>
    <h2>{{ comment.title }}</h2>
    <Rate :rate="comment.rating"></Rate>
    <p>{{ comment.review }}</p>
    <Comment
      v-for="comment in comments"
      :key="comment"
      :comment="comment"
      :user="user"
    ></Comment>

    <div v-if="addCommentarea" class="left">
      <label for="textarea">YOUR COMMENT</label>
      <textarea
        v-model="message"
        name="textarea"
        id="textarea"
        cols="30"
        rows="10"
        required
      ></textarea>
    </div>
    <button class="green-button" @click="addCommentClicked">ADD COMMENT</button>
  </div>
</template>

<script>
  import Rate from "./Rate";
  import Comment from "./Comment";
  export default {
    data() {
      return { addCommentarea: false, message: "", comments: [] };
    },
    name: "SingleReview",
    props: ["comment", "user"],
    components: { Rate, Comment },
    methods: {
      addCommentClicked() {
        if (this.addCommentarea) {
          if (this.message == "") {
            this.addCommentarea = !this.addCommentarea;
          } else {
            this.pushcomment(this.message);
            this.addCommentarea = false;
            this.message = "";
          }
        } else {
          this.addCommentarea = !this.addCommentarea;
        }
      },
      pushcomment(comment) {
        this.comments.push(comment);
      },
    },
  };
</script>

<style scoped>
  .single-review {
    background-color: white;
    margin-bottom: 120px;
    border-radius: 4px;
    box-shadow: 0px 0px 15px 2px lightgrey;
    padding: 0px 50px;
  }
  .rev-avatar {
    margin-top: -64px;
    border-radius: 50%;
  }
  .name {
    color: #007bff;
  }
  p {
    padding: 20px 0px;
    text-align: left;
  }
  textarea {
    display: block;
    width: 100%;
    height: 160px;
    background-color: #c2c4c956;
    border: none;
    border-radius: 3px;
    margin-bottom: 30px;
    padding: 5px;
  }
</style>
