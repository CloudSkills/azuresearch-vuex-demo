<template>
  <div>
    <results-navigation></results-navigation>
    <b-row>
      <b-card-group>
        <ResultItem v-for="result in results" :item="result" :key="result.listingId"/>
      </b-card-group>
    </b-row>
  </div>
    
</template>

<script>
import { mapState } from 'vuex';
import ResultItem from '@/components/ResultItem.vue';
import ResultsNavigation from '@/components/ResultsNavigation.vue';
export default {
  components: {
    ResultItem,
    ResultsNavigation,
  },
  computed: {
    ...mapState([
      'results',
      'resultsCount',
      'currentPage',
      'resultsPerPage',
      'orderBy',
      ]),
  }
}
</script>