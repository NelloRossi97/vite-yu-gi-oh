<template>
  
</template>

<script>
import axios from 'axios';
import{cards} from './data/cards';
  export default {
    name:'App',
    data(){
      return{
        cards
      }
    },
    methods:{
      getCards(){
        const url = cards.baseUrl + cards.endpoint;
        axios.get(url).then((res) => {
          console.log(res.data.data);
        });
      }
    },
    mounted(){
      cards.endpoint = 'cardinfo.php?num=50&offset=0';
      this.getCards();
    }
  }
</script>

<style lang="scss" scoped>

</style>
