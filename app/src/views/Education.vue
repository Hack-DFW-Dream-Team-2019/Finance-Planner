<template>
    <div>
        <p>Hello this is the education screen</p>

        <button type="button" @click="testing()" name="button"></button>
    </div>
</template>

<script>
import getSalary from '../helpers/occupationsApi.js'
export default {
    data: function() {
      return{
        occupation_code: '',
        year: '',
      }
    },
    methods: {
      testing: function(){
        getSalary(this.occupation_code, this.year)
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
