<template>
  <div id="app">
    <Header/>
      <div class="container-fluid">
        <div class="row">
          <Sidebar/>
          <Main/>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Main from '@/components/Main.vue'
export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    Main,
  },
  mounted() {
    this.$store.dispatch('executeSearch');
  }
}
</script>