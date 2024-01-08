<script>
import axios from 'axios';
import appHeader from './components/appHeader.vue';
import characterList from './components/characterList.vue';

import { store } from './store';


export default {
  components: {
    appHeader,
    characterList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      axios
        .get(store.apiUrl)

    }
  }
};
</script>

<template>
  <appHeader />
  <main>
    <characterList />

  </main>
</template>

<style lang="scss">
@use './styles/partials/_variables' as *;
@use './styles/_general.scss' as *;
</style>
