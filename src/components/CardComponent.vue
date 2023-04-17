<template>
    <div class="col-12 col-sm-6 col-md-4 cold-lg-3">
        <div class="my-card text-center mb-5">
            <img src="" alt="name">
            <h4 class="text-uppercase">ciao</h4>
            <div>ciao1</div>
            <div class="font-weight-bold">ciao3</div>
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
img{
    width: 100%;
}
.my-card{
    width: 200px;
}
</style>
