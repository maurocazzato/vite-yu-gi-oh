<script>
import appHeader from './components/appHeader.vue';
import characterList from './components/characterList.vue';
import appSelect from './components/appSelect.vue';



export default {
  name: "app",
  components: {
    appHeader,
    characterList,
    appSelect
  },

};
</script>

<template>
  <appHeader />
  <main class="orange">
    <appSelect />
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
