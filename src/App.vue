<template>
<app-header/>
<app-body/>
<app-footer/>

</template>

<script>
import AppBody from './components/AppBody'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
export default {
  name: 'App',
  components: {
    AppBody,
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-size: cover;
  background: rgb(221,221,221);
}
body{
  margin: 0;
  padding: 0;
}

</style>
