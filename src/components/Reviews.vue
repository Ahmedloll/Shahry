<template>
  <div class="center">
    <div class="reviews-heading center">
      <h1>What our users say about shahry?</h1>
      <button class="white-button" @click="addReviewClicked()">
        ADD A REVIEW
      </button>
    </div>
    <div class="reviews">
      <SingleReview
        :user="user"
        v-for="comment in comments"
        :key="comment.key"
        :comment="comment"
      ></SingleReview>
    </div>
    <div v-if="addReviewForm">
      <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <form @submit.prevent="onFormSubmit" action="">
              <div class="container sp-btween">
                <h2>ADD A REVIEW</h2>
                <div class="close" @click="closeClicked">
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <GetRate
                @rated="rated"
                :grade="1"
                :maxStars="5"
                :hasCounter="false"
              ></GetRate>
              <label for="title">REVIEW TITLE</label>
              <input
                v-model="reviewTitle"
                id="title"
                type="text"
                value=""
                required
              />
              <label for="review">REVIEW DETAILS</label>
              <textarea
                v-model="review"
                name="review"
                id="review"
                cols="30"
                rows="10"
                required
              ></textarea>
              <button class="green-button" type="submit">ADD REVIEW</button>
            </form>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import SingleReview from "./SingleReview";
  import GetRate from "./GetRate";
  export default {
    name: "Reviews",
    data() {
      return {
        reviewTitle: "",
        review: "",
        addReviewForm: false,
        rate: "",
        key: "",
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
    props: ["user"],
    components: { SingleReview, GetRate },
    methods: {
      addReviewClicked() {
        this.addReviewForm = true;
      },

      onFormSubmit() {
        this.key = this.comments.length + 1;
        this.comments.unshift({
          key: this.key,
          picture: this.user.picture.large,
          name: this.user.name.first + " " + this.user.name.last,
          title: this.reviewTitle,
          date: "10 Dec 2020",
          review: this.review,
          rating: this.rate,
        });
        this.addReviewForm = false;
        this.reviewTitle = "";
        this.review = "";
      },
      closeClicked() {
        this.addReviewForm = false;
        this.reviewTitle = "";
        this.review = "";
      },
      rated(rate) {
        this.rate = rate;
      },
    },
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
  .white-button {
    background-color: white;
    color: #00be95;
    border: none;
    padding: 15px 40px;
    border-radius: 4px;
    font-weight: 600;
  }

  .reviews {
    width: 70%;
    margin: -80px 15%;
    position: relative;
  }
  form {
    background-color: white;
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    box-shadow: 0px 0px 5px 2px lightgrey;
    padding: 0px 40px;
  }
  input,
  textarea {
    margin-bottom: 20px;
  }
  .close i {
    line-height: 67.03px;
    font-size: 29px;
    font-weight: 300;
    color: #c2c4c956;
  }
  .close {
    cursor: pointer;
  }
  .modal-mask {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity 0.3s ease;
  }
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    text-align: left;
  }
  .rating-container {
    min-width: 122px;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0px 10px;
  }
  .active {
    color: rgb(238, 217, 27);
  }
</style>
