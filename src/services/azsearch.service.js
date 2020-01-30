import AzureSearch from 'azure-search';

const searchClient = AzureSearch({
  url: process.env.VUE_APP_SEARCHURL,
  key: process.env.VUE_APP_SEARCHKEY,
});

export default searchClient;