<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
        <div class="my-card text-center mb-5">
            <img :src="card.card_images[0].image_url" :alt="card.name">
            <h4 class="text-uppercase mt-2">{{ card.name }}</h4>
            <div class="font-[0]weight-bold mb-2">{{ card.archetype }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardComponent',
        props: ['card']
    }
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/colors' as *;
img{
    width: 100%;
}
.my-card{
    background-color: $my-bg;
}
</style>
