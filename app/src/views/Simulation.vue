<template>
    <div style="height: 100%;">
        <div class="sub-nav">
          <h3>Calcuator</h3>
          <ul>
            <li><router-link to="/calculator/simulation">Simulation</router-link></li>
            <li><router-link to="/calculator/real">Real data</router-link></li>
          </ul>
        </div>
        <div class="content">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
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

   .sub-nav{
     position: absolute;
     width: 160px;
     height: 100%;
     background: #334452;
     padding: 40px 20px;
     box-shadow: 0 4px 8px 0 rgba(0,0,0,0.10);

     h3{
       font-size: 20px;
       color: white;
       margin-bottom: 60px;
     }

     ul{
       list-style: none;
       padding: 0;
       color: white
     }

     li{
       padding: 5px 0;
     }

     a{
       color: white;
       text-decoration: none;
       font-size: .9rem;
     }
   }

   .content{
     margin-left: 160px;
   }


</style>
