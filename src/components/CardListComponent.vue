<template>
    <div class="my-container mt-3 p-4">
        <div class="found-cards p-3 mb-3">
            Found n cards
        </div>
        <div class="row">
            <CardComponent v-for="card in cards.cardsList" :card="card"/>
        </div>
    </div>
</template>

<script>
import{cards} from '../data/cards'
import CardComponent from './CardComponent.vue';
    export default {
        name: 'CardListComponent',
        components:{
            CardComponent
        },
        data(){
            return{
                cards
            }
        },
        methods:{
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/colors' as *;
.my-container{
    background-color: white;
}
.found-cards{
    background-color: $my-dark-bg;
    color: white;
}
</style>