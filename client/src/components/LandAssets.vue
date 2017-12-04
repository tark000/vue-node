<template>
  <div class="content">
    <h2>Land Assets</h2>
    <custom-table v-bind:table-data="landAssetsTable" v-bind:table-name="'landAssets'"></custom-table>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import CustomTable from '@/components/CustomTable.vue'
export default {
  name: 'LandAssets',
  computed: mapState([
    'landAssetsTable'
  ]),
  components: {
    'custom-table': CustomTable
  },
  beforeCreate: function () {
    this.$store.dispatch('GET_TABLE', 'landAssetsTable')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
