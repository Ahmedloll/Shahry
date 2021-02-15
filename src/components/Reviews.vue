<template>
  <div class="center">
    <div class="reviews-heading center">
      <h1>What our users say about shahry?</h1>
      <button>ADD A REVIEW</button>
    </div>
    <div class="reviews">
      <SingleReview
        v-for="comment in comments"
        :key="comment.key"
        :comment="comment"
      ></SingleReview>
    </div>
  </div>
</template>

<script>
  import SingleReview from "./SingleReview";
  export default {
    name: "Reviews",
    data() {
      return {
        comments: [
          {
            key: 0,
            picture: "https://randomuser.me/api/portraits/women/71.jpg",
            name: "Teresa Evans",
            title: "Best App Ever",
            date: "10 Dec 2020",
            review:
              "Shahty is The best product company service I have ever encountered in my entire life. Its beyond words! Always good support. Very rigid security (make sure device is paired always, and they have the most professional, friendly support teams by a long shot! Super happy to be onboard with such a progressive brand!",
            rating: 4,
          },
          {
            key: 1,
            picture: "https://randomuser.me/api/portraits/men/68.jpg",
            name: "Liam Scott",
            title: "I didn't like it",
            date: "10 Dec 2020",
            review:
              "Shahty is The best product company service I have ever encountered in my entire life. Its beyond words! Always good support. Very rigid security (make sure device is paired always, and they have the most professional, friendly support teams by a long shot! Super happy to be onboard with such a progressive brand!",
            rating: 1,
          },
          {
            key: 2,
            picture: "https://randomuser.me/api/portraits/women/6.jpg",
            name: "Cathy Crawford",
            title: "Good",
            date: "10 Dec 2020",
            review:
              "Shahty is The best product company service I have ever encountered in my entire life. Its beyond words! Always good support. Very rigid security (make sure device is paired always, and they have the most professional, friendly support teams by a long shot! Super happy to be onboard with such a progressive brand!",
            rating: 3,
          },
          {
            key: 3,
            picture: "https://randomuser.me/api/portraits/men/77.jpg",
            name: "Carter Park",
            title: "Best App Ever",
            date: "10 Dec 2020",
            review:
              "Shahty is The best product company service I have ever encountered in my entire life. Its beyond words! Always good support. Very rigid security (make sure device is paired always, and they have the most professional, friendly support teams by a long shot! Super happy to be onboard with such a progressive brand!",
            rating: 4,
          },
        ],
      };
    },
    props: [],
    components: { SingleReview },
  };
</script>

<style scoped>
  .reviews-heading {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1540340061722-9293d5163008?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80");

    background-size: cover;
    height: 390px;
    padding: 0px 7.5%;
    padding-top: 25px;
  }
  h1 {
    color: white;
    margin-bottom: 60px;
  }
  button {
    background-color: white;
    color: #00be95;
    border: none;
    padding: 15px 40px;
    border-radius: 4px;
    font-weight: 600px;
  }
  .reviews {
    width: 70%;
    margin: -80px 15%;
    position: relative;
  }
</style>
