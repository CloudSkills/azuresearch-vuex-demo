<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
              <li class="nav-item col-12">
                <b-list-group>
                  <b-list-group-item>
                    <span>
                      Showing {{resultsCount}} results
                    </span>
                  </b-list-group-item>
                </b-list-group>
                <ClearFilters />
              </li>
              <li class="nav-item col-12" v-if="facets.type">
                <DropdownFacet v-bind:facet="facets.type" field="type" />
              </li>
              <li class="nav-item col-12" v-if="facets.beds">
                <CheckboxFacet v-bind:facet="facets.beds" field="beds" />
              </li>
              <li class="nav-item col-12" v-if="facets.baths">
                <CheckboxFacet v-bind:facet="facets.baths" field="baths" />
              </li>
              <li class="nav-item col-12">
                <ClearFilters />
              </li>
            </ul>
    </div>
  </nav>
</template>
<script>
  import { mapState } from 'vuex';
  import CheckboxFacet from '@/components/CheckboxFacet.vue';
  import DropdownFacet from '@/components/DropdownFacet.vue';
  import ClearFilters from '@/components/ClearFilters.vue';
  export default {  
    components: {
      DropdownFacet,
      CheckboxFacet,
      ClearFilters,
    },
    computed: {
      ...mapState([
        'resultsCount',
        'facets',
        ])
    }
  }
</script>