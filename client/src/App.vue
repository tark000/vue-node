<template>
  <div id="app">
    <app-nav/>
    <router-view/>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'
export default {
  name: 'app',
  components: {
    'AppNav': AppNav
  },
  beforeCreate: function () {
    this.$store.dispatch('LOAD_CURRENCIES_LIST')
  }
}
</script>

<style>
  .content {
    max-width: 1024px;
    margin: 0 auto;
  }

  button {
    padding: 5px 10px;
    text-transform: uppercase;
    background-color: #4CAF50;
    border: 0;
    cursor: pointer;
  }

  a, button {
    -webkit-transition: .3s all;
      -moz-transition: .3s all;
      -ms-transition: .3s all;
      -o-transition: .3s all;
      transition: .3s all;
      text-decoration: none;
  }

  a:hover, button:hover {
    opacity: 0.8;
  }

</style>
