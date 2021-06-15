<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link class="navbar-brand" :to="{name:'index'}">Vue-Cli</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                <li class="nav-item">
                <router-link :to="{name :'index'}" class="nav-link my-nav">Home</router-link>
                </li>
             <li class="nav-item">
                <router-link :to="{name :'slider'}" class="nav-link my-nav">Slider</router-link>
                </li>
                 <li class="nav-item">
                 <router-link :to="{name :'star'}" class="nav-link my-nav">Star</router-link>
                </li>

            </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>