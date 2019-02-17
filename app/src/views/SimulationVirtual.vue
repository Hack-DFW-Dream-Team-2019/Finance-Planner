<template>
    <div>
        <div class="header">
            <h4>Virtual</h4>
        </div>
        <div class="content">
            <b-modal :hide-header-close=true  :no-close-on-backdrop=true  :hide-footer=true ref="myModalRef">
                <div class="d-block p-3 text-center">
                    <h3 class='mb-4'>Select your occupation</h3>
                    <b-form-group class="mb-4">
                        <b-form-select :options="occupations" required v-model="occupation" />
                    </b-form-group>
                    <b-button type="submit" @click="hideModal" variant="primary">Submit</b-button> 
                </div>
            </b-modal>
            <p>{{ this.average }}</p>
        </div>
    </div>
</template>

<script>
import occupationsApi from '../helpers/occupationsApi.js'
import ocData from '../assets/OccupationData.js'
export default {
    data: function(){
        return{
            occupations: [{ text: 'Select One', value: null }].concat(Object.keys(ocData)),
            occupation: null,

            occupation_code: null,
            year: "2018",
            average:""
        }
    },
    methods: {
      showModal() {
        this.$refs.myModalRef.show()
      },
      hideModal() {
        this.$refs.myModalRef.hide()
        this.occupation_code = ocData[this.occupation].occupation_code
        this.getOccupationData()
        console.log(this.average)
      },
      getOccupationData: async function(){
        let avg = this.average
        await occupationsApi.getAverageSalary(this.occupation_code, this.year).then(function (response) {
          avg = response;
        });
        this.average = avg
      }
    },
    mounted: function(){
        this.showModal()
    }
}
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 100px;
        padding: 35px 45px;
        background-color: #213443;
        h4{
            border-left: 10px solid #F8CC01;
            padding-left: 10px;
            color: white;
            font-weight: 300;
            font-size: 20px;
        }
    }

</style>
