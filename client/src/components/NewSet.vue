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
        <textarea v-model="Description" placeholder="Set's Description"></textarea>
      </div>
    </div>
    <div class="submit-btn">
      Submit
    </div>
  </div>
</template>

<script>
  
</script>

<style lang="less" scoped>
  body, html {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }

  #app img {
    display: none;
  }

  .header {
    text-align: center;
    font-weight: 700;
    font-size: 35px;
  }

  .input-container {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-top: 60px;
  
    .input-section {
      padding: 0 80px; 

      .sub-header {
        font-size: 26px;
        font-family: 'Helvetica';
        padding-bottom: 15px;
      }

      input, textarea {
        border: 2px solid #000;
        border-radius: 4px;
        padding: 15px 20px;
        font: 500 22px 'Helvetica';
        transition: all .3s ease-in-out;

        &:focus {
          margin-bottom: 2px;
          box-shadow: 0 3px 3px #000;
        }
      }
    }
  }

  .submit-btn {
    display: inline-block;
    cursor: pointer;
    font: 26px 'Helvetica';
    padding: 10px 30px;
    border-radius: 5px;
    border: 2px solid #000;
    transition: all .3s ease-in-out;

    &:hover {
      margin-bottom: 2px;
      box-shadow: 0 3px 3px #000;
    }
  }
</style>