# azuresearch-vuex

A results viewer for Azure Cognitive Search implemented in Vue and vuex.
To be used with an Azure Search Index containing realestate-us-sample data as set up in this [Quickstart](https://docs.microsoft.com/en-us/azure/search/search-get-started-portal)

## Main third-party components used

- [azure-search](https://www.npmjs.com/package/azure-search)
- [BootstrapVue](https://bootstrap-vue.js.org/)

## Project setup
```
yarn install
```
### Setting up environment variables
Create a .env file containing the following values
```
VUE_APP_SEARCHURL=<your search service url>
VUE_APP_SEARCHKEY=<your query key>
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
