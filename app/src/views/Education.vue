<template>
    <div style="height: 100%;">
        <div class="sub-nav">
          <h3>Education</h3>
          <ul>
            <li><router-link to="/education/introduction">Introduction</router-link></li>
            <li><router-link to="/education/finance">Finance 101</router-link></li>
            <li><router-link to="/education/loans">Loans</router-link></li>
          </ul>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import occupationsApi from '../helpers/occupationsApi.js'
export default {
    data: function() {
      return{
        occupation_code: null,
        year: "2018",
        average:""
      }
    },
    methods: {
      getOccupationData: async function(){
        let avg = this.average
        await occupationsApi.getAverageSalary(this.occupation_code, this.year).then(function (response) {
          avg = response;
        });
        this.average = avg
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
