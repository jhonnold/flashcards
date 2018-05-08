<template>
  <div class="wrap">
    <div class="set-name" v-model="name">{{ name }}</div>
    <div class="creator" v-model="creator">{{ creator }} created this set</div>
    <div class="description" v-model="description">{{ description }}</div>
    <div class="btn-wrap">
      <div class="btn" @click="deleteSet">DELETE</div>
      <div class="btn">CREATE FLASHCARD</div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  // TODO get the values of creator/name/description depending on the set id
  export default {
    name: 'Sets',
    data() {
      return {
        creator: '',
        name: '',
        description: ''
      }
    },
    beforeMount() {
      this.getSet()
    },
    methods: {
      getSet: function() {
        var setId = this.$route.params.id;
        axios.get('http://localhost:8080/api/sets/' + setId)
          .then((response) => {
           this.creator = response.data.creator;
           this.description = response.data.description;
           this.name = response.data.name; 
          })
          .catch((error) => {
            console.log(error)
          });
      },
      deleteSet: function() {
        var setId = this.$route.params.id;
        axios.delete('http://localhost:8080/api/sets/' + setId)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
  // TODO add button to delete set 
  // TODO add button to create flashcards
</script>

<style lang="less">
  .set-name {
    font: 700 50px 'Helvetica';

    &::after {
      display: block;
      content: '';
      height: 3px;
      width: 200px;
      background: #93e5ab;
      margin: 20px auto 25px;
    }
  }

  .creator {
    font: 36px 'Helvetica';
    margin: 35px 0 40px;
  }

  .description {
    display: inline-block;
    font: 30px 'Helvetica';
    padding: 50px;
    border: 2px solid #00241b;
    border-radius: 4px;
    margin: 0 500px;
  }

  .btn-wrap {
    display: flex;
    justify-content: center;

    .btn {
      background: #93e5ab;
      display: inline-block;
      cursor: pointer;
      font: 26px 'Helvetica';
      padding: 10px 30px;
      border-radius: 5px;
      border: 2px solid #00241b;
      transition: all .3s ease-in-out;
      margin: 50px 30px 2px;

      &:hover {
        margin-bottom: 2px;
        box-shadow: 1px 3px 3px #2c4251;
      }
    }
  }
</style>
