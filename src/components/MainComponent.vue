<template>
    <div class="container py-3">
        <select name="" id="">
            <option value="">Alien</option>
        </select>
        <CardListComponent/>
    </div>
</template>

<script>
import CardListComponent from './CardListComponent.vue';
    export default {
        name: 'MainComponent',
        components:{
        CardListComponent
        }
    }
</script>

<style lang="scss" scoped>
select{
    width: 150px;
}
</style>