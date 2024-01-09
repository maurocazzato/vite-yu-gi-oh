<script>
import { store } from '../store';
import card from './card.vue';

export default {
  name: "characterList",
  components: {
    card,
  },
  data() {
    return {
      store,
    }
  },
  computed: {
    filteredCharacterList() {
      // Filtra la lista dei personaggi in base all'archetipo selezionato
      return store.characterList.filter(character => {
        return store.searchText ? character.type === store.searchText : true;
      });
    },
  },

};
</script>


<template>
  <div class="found">
    <p v-if="store.searchText">Numero di carte trovate: {{ filteredCharacterList.length }}</p>
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