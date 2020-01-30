export default {
    SET_RESULTS(state, data) {
      state.results = data;
    },
  
    SET_FACETS(state, data) {
      state.facets = data;
    },
  
    SET_RESULTS_COUNT(state, count) {
      state.resultsCount = count;
    },

    SET_SEARCHSTRING(state, value) {
      state.searchString = value;
    },

    SET_FILTERS(state, payload) {
        if (payload.selected == null) {
          delete state.filters[payload.facet];
        } else {
          state.filters[payload.facet] = Array.isArray(payload.selected)
            ? payload.selected
            : payload.selected.split();
        }
    
        let allFilters = [];
        let allFiltersString = "";
    
        const keys = Object.keys(state.filters);
        keys.map(key => {
          const filterArray = [];
          let filterString = "";
          state.filters[key].map(selectedValue => {
            // handle query string for numbers or strings, add quotes depending
            const filter =
              typeof selectedValue === "number"
                ? selectedValue
                : `'${selectedValue}'`;
            return filterArray.push(`${key} eq ${filter}`);
          });
          filterString += filterArray.join(" or ");
          return allFilters.push(`(${filterString})`);
        });
    
        allFilters = allFilters.filter(f => f.length && f !== '()');
        allFiltersString = allFilters.join(" and ");
        state.filterString = allFiltersString;
      },
    
      CLEAR_FILTERS(state) {
        state.filters = {};
        state.filterString = "";
      },

      SET_CURRENT_PAGE(state, page) {
        state.currentPage = page;
      },
    
      SET_RESULTS_PER_PAGE(state, count) {
        state.resultsPerPage = count;
      },
        
      SET_ORDERBY(state, value) {
        state.orderBy = value;
      }
  };