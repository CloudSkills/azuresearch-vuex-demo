<template>
  <b-card
    :title="item.street"
    :img-src="item.thumbnail"
    img-alt="Image"
    img-top
    tag="article"
    class="overflow-hidden" 
    style="max-width: 300px; min-width: 300px;"
  >
    <b-card-text>
      {{item.description}}
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  props: [
    'item',
  ],
};
</script>
<style>
.card {
  margin: 5px 5px;
}
</style>