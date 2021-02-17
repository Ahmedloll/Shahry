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
        @gotreply="gotreply"
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
              <div class="container sp-btween form-title">
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
              <div class="button-wrapper">
                <button class="green-button" type="submit">ADD REVIEW</button>
              </div>
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
  import firebase from "firebase/app";

  // Your web app's Firebase configuration
  require("firebase/firestore");
  var firebaseConfig = {
    apiKey: "AIzaSyB46a4ykjrCLir_l3ec8xYgN3RaZjKq39Y",
    authDomain: "shahry-e8191.firebaseapp.com",
    projectId: "shahry-e8191",
    storageBucket: "shahry-e8191.appspot.com",
    messagingSenderId: "1067756679074",
    appId: "1:1067756679074:web:2324c944dfc96777224cfb",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

  db.settings({
    timestampsInSnapshots: true,
  });

  export default {
    name: "Reviews",
    data() {
      return {
        reviewTitle: "",
        review: "",
        addReviewForm: false,
        rate: "",
        key: "",
        comments: [],
      };
    },
    props: ["user"],
    components: { SingleReview, GetRate },
    computed: {
      getdate() {
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        return `${new Date().getDay()} ${
          monthNames[new Date().getMonth()]
        } ${new Date().getFullYear()}`;
      },
    },
    methods: {
      addReviewClicked() {
        this.addReviewForm = true;
      },

      onFormSubmit() {
        this.key = this.comments.length;
        db.collection("comments").add({
          key: this.key,
          picture: this.user.picture.large,
          name: `${this.user.name.first} ${this.user.name.last}`,
          title: this.reviewTitle,
          date: this.getdate,
          review: this.review,
          rating: this.rate,
          replys: [],
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
      gotreply(comment) {
        db.collection("comments")
          .where("key", "==", comment.key)
          .get()
          .then((query) => {
            query.forEach((doc) => {
              db.collection("comments")
                .doc(doc.id)
                .update({ replys: comment.replys });
            });
          });
      },
      fetchcomments() {
        db.collection("comments")
          .orderBy("key")
          .onSnapshot((querySnapshot) => {
            let allcomments = [];
            querySnapshot.forEach((doc) => {
              allcomments.push(doc.data());
            });
            this.comments = allcomments.reverse();
          });
      },
    },
    created() {
      this.fetchcomments();
    },
  };
</script>

<style scoped>
  @media only screen and (min-width: 820px) {
    .reviews-heading {
      height: 390px;
    }
  }
  @media only screen and (max-width: 820px) and (min-width: 340px) {
    .reviews-heading {
      height: 490px;
    }
  }
  @media only screen and (max-width: 340px) {
    .reviews-heading {
      height: 590px;
    }
  }
  .reviews-heading {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("https://images.unsplash.com/photo-1540340061722-9293d5163008?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80");
    background-size: cover;
    padding: 0px 7.5%;
    padding-top: 25px;
  }
  h1 {
    color: white;
    margin-bottom: 60px;
    font-size: 45px;
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
    color: darkgrey;
  }
  h2 {
    color: black;
    font-size: 20px;
  }
  .form-title {
    border-bottom: 1px solid darkgrey;
  }
  input,
  textarea {
    background-color: #c2c4c956;
    border: none;
    border-radius: 3px;
    margin-bottom: 30px;
    padding: 5px;
  }
  input {
    height: 25px;
  }
  .button-wrapper {
    text-align: right;
  }
  form button {
    width: 46%;
    min-width: fit-content;
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
