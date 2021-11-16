<template>
  <div>
    <div>
      <ol>
        <p>title</p>
        <input type="text" v-model="newmovieParams.title" />
        <p>plot</p>
        <input type="text" v-model="newmovieParams.plot" />
        <p>year</p>
        <input type="text" v-model="newmovieParams.year" />
      </ol>
      <button v-on:click="createmovie()">add movie</button>
    </div>

    <div v-for="movie in movies" :key="movie.id">
      <h4>{{ movie.title }}</h4>
      <p>{{ movie.plot }}</p>
      <button v-on:click="showmovie(movie)">More Info</button>

      <dialog id="movie-year">
        <form method="dialog">
          <h2>movie info:</h2>
          <p>
            title:
            <input type="text" v-model="currentmovie.title" />
          </p>
          <p>
            year:
            <input type="text" v-model="currentmovie.year" />
          </p>
          <p>
            plot:
            <input type="text" v-model="currentmovie.plot" />
          </p>
          <button v-on:click="updatemovie(currentmovie)">Update</button>
          <button v-on:click="deletemovie(currentmovie)">Delete movie</button>
          <button>close</button>
        </form>
      </dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movies: [],
      newmovieParams: {},
      readmovie: {},
      updatemovie: {},
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
  createmovie: function () {
    console.log("adding movie");

    axios
      .post("http://localhost:3000/m_create", this.newmovieParams)
      .then((response) => {
        console.log("done", response.data);
        this.movies.push(response.data);
      })
      .catch((error) => console.log(error.response));
  },
  showmovie: function (movie) {
    console.log(movie);
    this.currentmovie = movie;
    document.querySelector("#movie-description").showModal();
  },
  deletemovie: function (movie) {
    axios.delete("http:localhost:3000/m_delete/" + movie.id).then((response) => {
      console.log("done", response.data);
      var index = this.movies.indexOf(movie);
      this.movies.splice(index, 1);
    });
  },
  updatemovie: function (movie) {
    axios.patch("http:localhost:3000/m_update/" + movie.id, movie).then((response) => {
      console.log("done", response.data);
    });
  },
};
</script>
