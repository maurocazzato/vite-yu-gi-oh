<script>
import appHeader from './components/appHeader.vue';
import characterList from './components/characterList.vue';


export default {
  name: "app",
  components: {
    appHeader,
    characterList,
  },

};
</script>

<template>
  <appHeader />
  <main class="orange">
    <characterList />
  </main>
</template>

<style lang="scss">
@use './styles/partials/_variables' as *;
@use './styles/_general.scss' as *;

.orange {
  background-color: rgba(212, 143, 56, 255);
  max-width: 100%;
  padding: 60px;

}
</style>
