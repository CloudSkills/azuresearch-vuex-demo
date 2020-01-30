<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">azuresearch-vuex</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav >
        <b-nav-form>
          <b-form-input @keydown.enter.prevent="handleInputEnter" lazy v-model="searchString" size="sm" class="mr-sm-6" placeholder="Search"></b-form-input>
          <b-button size="sm" variant="info" @click="executeSearch">Search</b-button>
          <b-button size="sm" variant="primary" @click="resetSearchString">Reset</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  computed: {
    searchString: {
      get() {
        return this.$store.state.searchString;
      },
      set(value) {
        this.$store.dispatch('setSearchString', value);
      },
    },
  },
  methods: {
    executeSearch() {
      this.$store.dispatch('setSearchString', this.searchString);
    },
    resetSearchString() {
      this.$store.dispatch('setSearchString');
    },
    handleInputEnter(e) {
      this.$store.dispatch('setSearchString', e.target.value);
    }
  }
  
}
</script>