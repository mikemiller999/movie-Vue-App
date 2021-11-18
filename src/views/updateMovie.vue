<template>
  <div class="movies-new">
    <form v-on:submit.prevent="editMovie()">
      <h1>Edit Movie</h1>
      <div>
        <label>title:</label>
        <input type="text" v-model="currentMovieParams.title" />
      </div>
      <div>
        <label>body:</label>
        <input type="text" v-model="currentMovieParams.body" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    <button v-on:click="destroyMovie()">delete</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentMovieParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.currentMovieParams = response.data;
    });
  },
  methods: {
    updateMovie: function () {
      axios
        .patch(`/movies/${this.$route.params.id}`, this.currentMovieParams)
        .then((response) => {
          this.$router.push(`/movies/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    destroyMovie: function () {
      axios.delete(`movies/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.$router.push("/movies");
      });
    },
  },
};
</script>
