<template>
  <b-form-group :disabled="options.length <= 1 && selected.length == 0">
      <b-list-group>
        <b-list-group-item>{{field}}</b-list-group-item>
        <b-list-group-item>
          <b-form-group :id="'dropdown-'+facet.field">
            <b-form-select
              :id="field"
              v-model="selected"
              :options="options"
            ></b-form-select>
          </b-form-group>
        </b-list-group-item>
      </b-list-group>
    </b-form-group>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: [
    'facet',
    'field',
  ],
  data() {
    return {
      selected: [],
      options: [{ text: 'All', value: null }, ...(this.facet.map(item => ({
        text: `${item.value}`,
        value: item.value,
        count: item.count,
      }))).sort((a, b) => a.value - b.value)]
      ,
    };
  },
  watch: {
    selected() {
      const payload = {
        facet: this.field,
        selected: this.selected,
      };
      this.$store.dispatch('setFilter', payload);
    },
    filters() {
      if (!this.filters[this.field]) {
        this.selected = [];
      }
    },
  },
  computed: {
    ...mapState([
      'filters',
    ]),
  },
};
</script>
<style>
  .form-group {
    margin-top: 20px;
  }
  .list-group-item {
    border: none;
  }
</style>