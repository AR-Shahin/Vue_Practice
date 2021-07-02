<template>
    <div>
        <hr>
        <h4 class="text-center">Test Component : {{title}}</h4>
        <button @click.prevent="customEvent">Click ME</button>
        <hr>
    </div>
</template>

<script>
    export default {
        props : {
            title :{
                types : String,
                require : true
            }
        },
        methods: {
            customEvent(){
                this.$emit('customEvent',{
                    title : 'Custom Data',
                    value : 201
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>
