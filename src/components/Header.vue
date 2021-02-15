<template>
  <header class="container sp-btween">
    <div>
      <a href="#"
        ><img
          src="https://d2k2fr4kgoo5so.cloudfront.net/vue/img/logo.ea876b95.svg"
          alt="logo"
      /></a>
    </div>

    <div class="container">
      <img class="avatar" :src="user.picture.large" alt="user" />
      <div>{{ user.name.first + " " + user.name.last }}</div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",
    props: ["user"],
  };
</script>

<style scoped>
  header {
    background-color: white;
    width: 85%;
    height: 84;
    padding: 20px 7.5%;
  }
  img[alt="logo"] {
    height: 30px;
    margin: 12.2px 0px;
  }
  img.avatar {
    margin-right: 10px;
  }
  img.avatar + div {
    line-height: 54.4px;
  }
</style>
