<template>
    <HeaderComponent/>
    <main>
      <MainComponent/>
    </main>
</template>

<script>
import axios from 'axios';
import{cards} from './data/cards';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue'
  export default {
    name:'App',
    components:{
      HeaderComponent,
      MainComponent
    },
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
          cards.cardsList = res.data.data;
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
