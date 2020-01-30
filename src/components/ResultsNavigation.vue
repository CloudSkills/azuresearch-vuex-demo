<template>
  <b-row>
      <b-col>
        <b-pagination
          v-model="currentPage"
          :total-rows="resultsCount"
          :per-page="resultsPerPage"
          aria-controls="results-group">
        </b-pagination>
      </b-col>
      <b-col>
        <b-input-group append="Per Page">
          <b-form-select v-model="resultsPerPage" :options="perPageOptions">
            <template v-slot:first>
              <option :value="null" disabled>-- Results Per Page --</option>
            </template>
          </b-form-select>
        </b-input-group>
      </b-col>
      <b-col>
        <b-input-group prepend="Sort">
          <b-form-select v-model="orderBy" :options="orderByOptions"></b-form-select>
        </b-input-group>
      </b-col>
    </b-row>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      perPageOptions: [
        { text: '10', value: 10, disabled: false },
        { text: '50', value: 50, disabled: false },
        { text: '100', value: 100, disabled: false },
      ],
      orderByOptions: [
        { text: 'Search Score', value: 'search.score() desc', disabled: false},
        { text: 'Price Low To High', value: 'price asc', disabled: false },
        { text: 'Price High to Low', value: 'price desc', disabled: false },
        { text: 'Sqft High to Low', value: 'sqft desc', disabled: false },
      ],
    };
  },
  computed: {
    ...mapState([
      'resultsCount',
      ]),
      currentPage: {
        get() {
          return this.$store.state.currentPage;
        },
        set(value) {
          this.$store.dispatch('setCurrentPage', value);
        },
      },
      resultsPerPage: {
        get() {
          return this.$store.state.resultsPerPage;
        },
        set(value) {
          this.$store.dispatch('setResultsPerPage', value);
        },
      },
      orderBy: {
        get() {
          return this.$store.state.orderBy;
        },
        set(value) {
          this.$store.dispatch('setOrderBy', value);
        },
      },
  }
}
</script>