<template>
    <div class="container py-3">
        <select name="" id="">
            <option value="">Choose type..</option>
            <option v-for="option in filteredArray" :value="option">{{ option }}</option>
        </select>
        <CardListComponent/>
    </div>
</template>

<script>
import {cards} from '../data/cards'
import CardListComponent from './CardListComponent.vue';
    export default {
        name: 'MainComponent',
        components:{
            CardListComponent
    },
    data() {
        return {
            cards,
            filteredArray:[]
            }
    },
    methods: {
        filterOptions() {
            cards.cardsList.forEach((card) => {
                if (!this.filteredArray.includes(card.type)) {
                    this.filteredArray.push(card.type);
                }
            })
            console.log(this.filteredArray);
        }
    },
    mounted() {
        this.filterOptions();
    }
        
}
</script>

<style lang="scss" scoped>
select{
    width: 150px;
}
</style>