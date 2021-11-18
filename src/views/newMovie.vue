<template>
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
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newmovieParams: {},
    };
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
};
</script>
