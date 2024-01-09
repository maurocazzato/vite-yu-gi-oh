<script>
import card from './card.vue';


export default {
  name: "characterList",
  components: {
    card
  },

};
</script>


<template>
  <div class="found">
    <p>Found ...</p>
  </div>
  <section class="container">
    <card />
  </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;

.container {
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 12px;
  font-weight: bold;
  color: white;
  margin-left: 20px;
}

.found {
  background-color: rgba(33, 37, 41, 255);
  padding: 3px;
}
</style>