<template>
  <div class="wrap">
    <div class="header"></div>
  </div>
</template>

<script>
  import axios from 'axios';
  // TODO get the values of creator/name/description depending on the set id
  export default {
    name: 'Sets',
    data() {
      return {
        creator: ''
      }
    },
    beforeMount() {
      this.getSet()
    },
    methods: {
      getSet: function() {
        var setId = this.$route.params.id;
        
      }
    }
  }
  // TODO add button to delete set 
  // TODO add button to create flashcards
</script>

<style>
  .header {
    background: #93e5ab;
    display: inline-block;
    cursor: pointer;
    font: 26px 'Helvetica';
    padding: 10px 30px;
    border-radius: 5px;
    border: 2px solid #00241b;
  }
</style>