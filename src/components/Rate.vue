<template>
  <div class="container sp-center">
    <div v-if="thumbsup" class="thumbs thumbs-up">
      <span><i class="fas fa-thumbs-up"></i></span>
    </div>
    <div v-else class="thumbs thumbs-down">
      <span><i class="fas fa-thumbs-down"></i></span>
    </div>
    <div class="container sp-around rating-container">
      <ul>
        <li
          v-for="star in 5"
          :class="{ active: star <= rate }"
          :key="star.rate"
        >
          <i :class="star <= rate ? 'fas fa-star' : 'far fa-star'"></i>
        </li>
      </ul>
      <div>{{ rate }}/5</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "rate",
    props: ["rate"],
    computed: {
      thumbsup: function() {
        if (this.rate >= 4) {
          return true;
        } else {
          return false;
        }
      },
    },
  };
</script>

<style scoped>
  .rating-container {
    border: 1px solid lightblue;
    border-left: none;
    color: dimgray;
    min-width: 130px;
  }

  ul {
    display: flex;
    list-style: none;
    padding: 0px 10px;
  }
  ul + div {
    line-height: 52.8px;
    margin-right: 10px;
    font-weight: bold;
  }
  .active {
    color: rgb(238, 217, 27);
  }
  .thumbs {
    color: white;
    width: 52.4px;
    line-height: 52.4px;
  }
  .thumbs-up {
    background-color: #2fe029;
  }
  .thumbs-down {
    background-color: #f12222;
  }
</style>
