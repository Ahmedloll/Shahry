<template>
  <div class="rating">
    <div>RATING</div>
    <ul class="list">
      <li
        @click="rate(star)"
        v-for="star in maxStars"
        :class="{ active: star <= stars }"
        :key="star.stars"
        class="star"
      >
        <i :class="star <= stars ? 'fas fa-star' : 'far fa-star'"></i>
      </li>
    </ul>
    <div v-if="hasCounter" class="info counter">
      <span class="score-rating">{{ stars }}</span>
      <span class="divider">/</span>
      <span class="score-max">{{ maxStars }}</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: "GetRate",
    props: ["grade", "maxStars", "hasCounter"],
    data() {
      return {
        stars: this.grade,
      };
    },
    methods: {
      rate(star) {
        if (typeof star === "number" && star <= this.maxStars && star >= 0) {
          this.stars = this.stars === star && this.stars != 1 ? star - 1 : star;
        }
        this.$emit("rated", this.stars);
      },
    },
    created() {
      this.$emit("rated", this.stars);
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .rating {
    color: #b7b7b7;
    margin: 20px 0;
  }
  .rating .list {
    padding: 0;
    margin: 0 20px 0 0;
  }

  .rating .list:hover .star {
    color: #ffe100;
  }

  .rating .list .star {
    display: inline-block;
    font-size: 25px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  .rating .list .star:hover .star:not(.active) {
    color: inherit;
  }
  .rating .list .star:first-child {
    margin-left: 0;
  }
  .rating .list .star.active {
    color: #ffe100;
  }

  .ratint .info {
    margin-top: 15px;
    font-size: 40px;
    text-align: center;
    display: table;
  }
  .ratint .info .divider {
    margin: 0 5px;
    font-size: 30px;
  }
  .ratint .info .score-max {
    font-size: 30px;
    vertical-align: sub;
  }
</style>
