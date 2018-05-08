<template>
  <div class="wrap">
    <div class="header">
      Create A New Set
    </div>
    <div class="input-container">
      <div class="input-section">
        <div class="sub-header">
          Enter the Creator's Name
        </div>
        <input type="text" v-model="creator" placeholder="Creator's Name">
      </div>
      <div class="input-section">
        <div class="sub-header">
          Enter the Name of the Set
        </div>
        <input type="text" v-model="name" placeholder="Set's Name">
      </div>
      <div class="input-section">
        <div class="sub-header">
          Enter a Description of the Set
        </div>
        <textarea v-model="description" placeholder="Set's Description"></textarea>
      </div>
    </div>
    <div class="submit-btn" v-on:click="createSet">
      Submit
    </div>
  </div>
</template>

<script>
 	import axios from 'axios'

<<<<<<< Updated upstream
<<<<<<< Updated upstream
  export default {
    name: 'NewSet',
    data() {
      return {
        creator: '',
        name: '',
        description: ''
      }
    },
    methods: {
      createSet: function() {
        axios.post('http://localhost:8080/api/sets', {
          creator: this.creator,
          name: this.name,
          description: this.description
        })
        .then(function (response) {
          console.log(response.data.id);
          window.location.href = '/sets/' + response.data.id;
        })
        .catch(function (error) {
          console.log(error);
        });
      }
=======
=======
>>>>>>> Stashed changes
 	export default {

		methods: {
	   	createSet: (event) => {

    	}
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    }
  }
</script>

<style lang="less" scoped>
  body, html {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  .header {
    text-align: center;
    font-weight: 700;
    font-size: 35px;
  }

  .input-container {
    display: flex;
    justify-content: center;
    align-items: baseline;
    padding-top: 60px;
 
    .input-section {
      padding-right: 45px;
      padding-left: 100px;

      .sub-header {
        font-size: 26px;
        font-family: 'Helvetica';
        padding-bottom: 15px;
      }

      input, textarea {
        background: #93e5ab;
        border: 2px solid #00241b;
        border-radius: 4px;
        padding: 15px 20px;
        font: 500 22px 'Helvetica';
        transition: all .3s ease-in-out;

        &:focus, &:hover {
          margin-bottom: 2px;
          box-shadow: 1px 3px 3px #2c4251;
        }
      }
    }
  }

  .submit-btn {
    background: #93e5ab;
    display: inline-block;
    cursor: pointer;
    font: 26px 'Helvetica';
    padding: 10px 30px;
    border-radius: 5px;
    border: 2px solid #00241b;
    transition: all .3s ease-in-out;

    &:hover {
      margin-bottom: 2px;
      box-shadow: 1px 3px 3px #2c4251;
    }
  }
</style>