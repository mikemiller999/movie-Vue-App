<template>
  <div class="row">
    <div class="col-8">
      <div v-for="movie in movies" :key="movie.id">
        <router-link v-bind:to="`/movies/${movie.id}`">
          {{ movie.title }}
        </router-link>
        {{ movie.year }}
        {{ movie.plot }}
      </div>
    </div>
    <div class="col"></div>
    <div class="col"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
      currentmovieParams: {},
    };
  },
  created: function () {
    this.indexmovies();
  },
  indexmovies: function () {
    axios.get("http://localhost:3000/movies").then((response) => {
      this.movies = response.data;
      console.log(this.movies);
    });
  },
};
</script>
