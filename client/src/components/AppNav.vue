<template>
  <header>
    <div class="content">
      <nav class="menu">
        <a href="index.html" class="logo">
          <img src="./../assets/logo.png" alt="Logo" class="logo-img">
      </a>
        <ul>
          <li> <router-link to="/">Finances</router-link></li>
          <li> <router-link to="/land-assets">Land Assets</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style scoped>

  /* Header */

  header {
    background-color: #4CAF50;
  }

  header .content {
    display: flex;
    justify-content: space-between;
  }

  .logo {
    margin: 5px 0;
  }

  .logo-img {
    max-width: 100px;
  }

  nav {
    display: flex;
      align-items: center;
  }

  .menu ul {
    margin: 0;
    padding: 0;
  }

  .menu ul li {
    display: inline-block;
  }

  .menu ul li a {
    padding: 5px 10px;
    font-size: 22px;
    text-transform: uppercase;
    color: #333;
  }
  .menu ul li a:hover {
    background-color: #6CcF70;
  }

</style>
