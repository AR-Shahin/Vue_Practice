<template>
    <div class="container mt-3">
        <h2 class="text-center text-success">Custom Directive</h2>
        <hr>
        <div v-for="i in 5" :key="i">
            <h4 rainbow>Lorem ipsum dolor sit amet. {{i}}</h4>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
