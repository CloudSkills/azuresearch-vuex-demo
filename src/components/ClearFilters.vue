<template>
      <p>
      <a
        v-if="filtersActive"
        @click="clearFilters"
        class="action-link">
        clear filter(s)
      </a>
      <span v-else class="text-muted">
          clear filter(s)
      </span>
    </p>
</template>
<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState([
      'filterString',
    ]),
    filtersActive() {
      return !!this.filterString;
    }
  },
  methods: {
    clearFilters() {
      this.$store.dispatch('clearFilters');
    },
  },
};
</script>
<style scoped>
a,span {
  float:right;
}
a {
  cursor: pointer;
  color: lightblue!important;
}
</style>