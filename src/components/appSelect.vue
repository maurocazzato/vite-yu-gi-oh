<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: "appselect",
    data() {
        return {
            store,
        };
    },

    methods: {
        getCharacters() {
            axios
                .get(store.apiUrl)
                .then((res) => {
                    store.characterList = res.data.data;
                    this.updateArchetypes();
                });
        },
        updateArchetypes() {
            const archetypes = new Set();
            store.characterList.forEach((character) => {
                if (character.type) {
                    archetypes.add(character.type);
                }
            });
            store.archetypes = Array.from(archetypes);
        },
    },
    created() {
        this.getCharacters();
    },
};
</script>

<template>
    <div class="selectbar">
        <select v-model="store.searchText" id="archetypeSelect">
            <option value="">Tutte le tipologie</option>
            <option v-for="(archetype, index) in store.archetypes" :key="index" :value="archetype">
                {{ archetype }}
            </option>
        </select>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;

.selectbar {
    margin-bottom: 20px;
}
</style>