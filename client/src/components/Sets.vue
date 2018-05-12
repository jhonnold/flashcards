<template>
  <div class="wrap">
    <div class="header">
      All Sets
    </div>
    <table>
      <tr>
        <td v-for="creator in sets">
          {{ sets.creator }}
        </td>
      </tr>
      <tr>
        <td v-for="name in sets">
          {{ sets.name }}
        </td>
      </tr>
      <tr>
        <td v-for="description in sets">
          {{ sets.description }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Sets',
    data() {
      return {
        sets: [
          { 
            creator: '',
            name: '',
            description: '', 
          }
        ]
      };
    },
    beforeMount() {
      this.getAllSets();
    },
    methods: {
      // Gets all the sets and their respective data
      getAllSets() {
        axios
          .get('http://localhost:8080/api/sets')
          .then(({ data }) => {
            for (var i = 0; i < data.length; i++) {
              this.creator = data[i].creator;
              this.name = data[i].name;
              this.description = data[i].description;
            }
          })
          .catch(error => console.log(error));
      }
    }
  }
</script>

<style lang="less">
  
</style>