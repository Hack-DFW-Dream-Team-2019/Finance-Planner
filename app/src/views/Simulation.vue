<template>
    <div>
        <b-modal hide-footer hide-header ref="myModalRef" >
          <div class="d-block text-center">
              <h3>How much experience or knowledge do you have in finance?</h3>
              <div class="buttons">
                <div class="button">
                  None
                </div>
                <div class="button">
                  Little
                </div>
                <div class="button">
                  Experienced
                </div>
              </div>
          </div>
        </b-modal>
    </div>
</template>

<script>
export default {
  data: function() {
    return {
      hasInformation: true
    };
  },
  methods: {
      hideModal() {
        this.$refs.myModalRef.hide();
      }
  },
  mounted: function() {
      
  }
};
</script>

<style lang="scss" scoped>
  .buttons {
    display: flex;
    flex-direction: row;
  }
  .button{
    background-color: #D8D8D8;
    width: 30%;
    margin: 5%;
  }
</style>
