<template>
  <nav class="bg-purple-900 text-white">
    <div class="container mx-auto">
      <div class="flex items-center">
        <router-link :to="{name : 'index'}"
                     class="inline-block px-8 py-4 transition-colors hover:bg-purple-600 duration-300">Home</router-link>
        <router-link :to="{name : 'todo'}"
                     class="inline-block px-8 py-4 transition-colors hover:bg-purple-600 duration-300">Todos</router-link>
      </div>
    </div>
  </nav>
</template>
<style lang="css">
.router-link-exact-active {
  background: purple;
}
</style>
