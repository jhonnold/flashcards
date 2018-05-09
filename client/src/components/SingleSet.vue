<template>
  <div class="wrap">
    <div class="set-name">{{ name }}</div>
    <div class="creator"><span>{{ creator }}</span> created this set</div>
    <div class="description">{{ description }}</div>
    <div class="btn-wrap">
      <div class="btn" @click="deleteSet">DELETE</div>
      <div class="btn">CREATE FLASHCARD</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'SingleSet',
  data() {
    return {
      creator: '',
      name: '',
      description: '',
    };
  },
  // LOADS DATA FROM GET REQUEST BEFORE PAGE LOAD
  beforeMount() {
    this.getSet();
  },
  methods: {
    // GETS THE DATA FOR THE CURRENT SET
    getSet() {
      const setId = this.$route.params.id;
      axios
        .get(`http://localhost:8080/api/sets/${setId}`)
        .then(({ data }) => {
          this.creator = data.creator;
          this.description = data.description;
          this.name = data.name;
        })
        .catch(error => console.log(error));
    },
    // DELETES THE CURRENT SET
    deleteSet() {
      const setId = this.$route.params.id;

      // DISABLED FOR NOW
      // axios
      //   .delete(`http://localhost:8080/api/sets/${setId}`)
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch(error => console.log(error));
    },
  },
};
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

  span {
    text-decoration: underline;
  }
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
    transition: all 0.3s ease-in-out;
    margin: 50px 30px 2px;

    &:hover {
      margin-bottom: 2px;
      box-shadow: 1px 3px 3px #2c4251;
    }
  }
}
</style>
