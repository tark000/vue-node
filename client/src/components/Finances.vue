<template>
  <div class="content">
    <h2>Profit table</h2>
    <custom-table v-bind:table-data="profitTable" v-bind:table-name="'profit'"></custom-table>
    <h2>Assets table</h2>
    <custom-table v-bind:table-data="assetsTable" v-bind:table-name="'assets'"></custom-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CustomTable from '@/components/CustomTable.vue'
export default {
  name: 'Finances',
  computed: mapState([
    'profitTable',
    'assetsTable'
  ]),
  components: {
    'custom-table': CustomTable
  },
  beforeCreate: function () {
    this.$store.dispatch('GET_TABLE', 'profitTable')
    this.$store.dispatch('GET_TABLE', 'assetsTable')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-table {
  display: flex;
  justify-content: space-between;
}
.flex-table-column {
  display: flex;
  flex-direction: column;
}
</style>
