import Vue from 'vue'
import Vuex from 'vuex'

import Api from '@/services/API'


Vue.use(Vuex)

const state = {
  currencies: [],
  profitTable: [],
  assetsTable: [],
  landAssetsTable: []
}

const actions = {
  LOAD_CURRENCIES_LIST ({commit}) {
    Api().get('currencies').then((response) =>{
      commit('SET_CURRENCIES_LIST', response.data )
    }, (err) => {
      console.log(err)
    })
  },
  GET_TABLE ({commit}, name) {
    Api().get('/get-table?name=' + name).then((response) =>{
      commit('SET_TABLE', {data: response.data, name: name} )
    }, (err) => {
      console.log(err)
    })
  },
  SAVE_TABLE ({commit}, name) {
    let obj = {}
    obj[name] = {table: this.state[name]}
    Api().post('/save-table', obj).then((response) =>{
      console.log(response.data)
    }, (err) => {
      console.log(err)
    })
  }
}

const mutations = {
    SET_CURRENCIES_LIST: (state, list ) => {
      state.currencies = list.currencies.currency
    },
    SET_TABLE: (state, table ) => {
      state[table.name] = table.data[table.name].table
    }
  }

export default new Vuex.Store({
  state,
  actions,
  mutations
})

