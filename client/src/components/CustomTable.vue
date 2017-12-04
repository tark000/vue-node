<template>
  <div class="content">
    <div class="flex-table">
      
      <div class="flex-table-column">
        <div class="flex-table-cell" v-for="value, key in tableData[0]">
          <div v-if="key == 'year'">
            <select v-model="baseCurrency">
              <option selected="selected" value=''>Set Currency</option>
              <option v-for="currensy in currencies" v-bind:value="currensy">
                {{currensy.name}}
              </option>
            </select>
            <span>{{baseCurrency.symbol}} {{baseCurrency.rate}}</span>
          </div>
          <div v-if="key != 'year'" class="flex-table-title">{{dropCamel(key)}}</div>
        </div>
      </div>

      <div class="flex-table-column" v-for="info in tableData">
        <div class="flex-table-cell" v-for="value, key in info">
          <span v-if="!showConvert(key)">{{convert(value)}}</span>
          <input v-model="info[key]" :type="key != 'numberAcres' ? 'text' : 'number'" v-if="key != 'inputCosts'">
          <input v-model="info[key]" type="text" disabled v-if="key == 'inputCosts'">
        </div>
      </div>

    </div>
    <button class="save-button" v-on:click="saveProfit(tableName)">Save {{dropCamel(tableName)}}</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'CustomTable',
  props: ['tableData', 'tableName'],
  data () {
    return {
      baseCurrency: ''
    }
  },
  computed: mapState([
    'currencies',
  ]),
  methods: {
    convert: function (value) {
      if (this.baseCurrency) {
        let itemSymbol = value.replace(/[^a-zA-Z]/g,'').toUpperCase();
        let itemNumber = value.replace(/\D+/g, '');
        let itemConvert = 1;
        for (let i = 0; i < this.currencies.length; i++) {
          if (this.currencies[i].symbol == itemSymbol) {
             itemConvert = this.currencies[i].rate;
          }
        }
        let itemNumberUsd = itemNumber/itemConvert;
        return (itemNumberUsd * this.baseCurrency.rate).toFixed(2) + ' ' + this.baseCurrency.symbol;
      }
      return '';
    },
    dropCamel: function(key) {
      if(key)
        return key.replace(/([A-Z]+)/g, " $1").toUpperCase();
      return key
    },
    showConvert: function(key) {
      return key =='year' || key == 'numberAcres'
    },
    saveProfit: function (name) {
      this.$store.dispatch('SAVE_TABLE', name + 'Table')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-table {
    display: flex;
    justify-content: space-between;
    overflow-x: scroll;
  }
  .flex-table-column {
    display: flex;
    flex-direction: column;
  }

  .flex-table-cell {
    min-height: 50px;
    display: flex;
    align-items: center;
    position: relative;
  }

  .flex-table-cell span {
    position: absolute;
    right: 2px;
    top: 0;
    font-size: 12px;
    color: #666;
  }

  .flex-table-cell input {
    padding: 2px 5px;
    border-radius: 3px;
  }

  .flex-table-cell select {
    padding: 2px 3px;
  }

  .save-button {
    margin-bottom: 20px;
  }

  .flex-table-cell input, .flex-table-cell select {
    max-width: 100%;
  }
</style>
