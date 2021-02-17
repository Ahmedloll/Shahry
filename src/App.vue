<template>
  <div id="app">
    <Header :user="user"></Header>
    <Reviews :user="user"></Reviews>
  </div>
</template>

<script>
  import axios from "axios";
  import Header from "./components/Header";
  import Reviews from "./components/Reviews";

  export default {
    name: "App",
    data() {
      return { user: { name: {}, picture: {} } };
    },
    methods: {},
    components: { Header, Reviews },
    mounted() {
      axios
        .get("https://randomuser.me/api/")
        .then((response) => (this.user = response.data.results[0]));
    },
  };
</script>

<style scoped></style>

<style>
  body {
    background-color: #f8f9fa;
    margin: 0;
    font-family: "Open Sans", sans-serif;
  }
  .container {
    display: flex;
  }
  .sp-btween {
    justify-content: space-between;
  }
  .sp-center {
    justify-content: center;
  }
  .sp-around {
    justify-content: space-around;
  }
  .avatar {
    height: 54.4px;
    border-radius: 50%;
  }
  .center {
    text-align: center;
  }
  .left {
    text-align: left;
  }
  button {
    cursor: pointer;
    font-family: "Open Sans", sans-serif;
  }

  .green-button {
    background-color: #00be95;
    color: white;
    border: none;
    padding: 15px 40px;
    border-radius: 4px;
    font-weight: 600;
    margin-bottom: 60px;
  }
  textarea {
    resize: none;
  }
</style>
