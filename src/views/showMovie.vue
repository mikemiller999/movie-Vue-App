<template>
  <div class="moviesShow">
    <router-link v-bind:to="`/movies/${movie.id}/edit`">
      <h1>{{ movie.title }}</h1>
    </router-link>
    <img :scr="movie.image" :alt="movie.name" />
    <p>{{ movie.body }}</p>
    <router-link to="/">back</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id).then((response) => {
      this.movie = response.data;
    });
  },
  methods: {},
};
</script>
