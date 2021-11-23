<template>
  <div>
    <input v-model="titleFilter" list="titles" />
    <datalist id="titles">
      <option v-for="movie in movies" v-bind:key="movie.id">{{ movie.title }}</option>
    </datalist>
    <div>
      <button>Sort Alphabetically</button>
    </div>
    <div class="row">
      <div class="col-8">
        <div v-for="movie in orderBy(filterBy(movies, titleFilter, 'title'), 'title')" :key="movie.id">
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
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      movies: [],
      currentmovieParams: {},
      titleFilter: "",
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
