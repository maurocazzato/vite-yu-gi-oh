<script>
import card from './card.vue';

export default {
  name: "characterList",
  components: {
    card,
  }
};
</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-6 col-md-4 col-lg-3 mb-5">
        <card />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;
</style>