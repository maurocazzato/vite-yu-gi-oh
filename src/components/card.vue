<script>
import axios from 'axios';
import { store } from '../store';
export default {
    name: "card",
    data() {
        return {
            store,
        }
    },
    methods: {
        getCharacters() {
            axios
                .get(store.apiUrl)
                .then((res => {
                    store.characterList = res.data.data;
                    console.log(res.data.data);
                }))

        }
    },
    created() {
        this.getCharacters()
    }


};
</script>

<template>
    <div v-for="(singlecard, id) in store.characterList" :key="id" class="card">
        <img :src="singlecard.card_images[0].image_url" alt="" />
        <h5 class="card-title">{{ singlecard.name }}</h5>
        <p class="card-text">{{ singlecard.type }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables' as *;
@use '../styles/partials/_mixins.scss' as *;

.card {
    width: calc(100%/5);
    background-color: rgba(212, 143, 56, 255);
    margin: 5px;
}

h5 {
    color: white;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
}

p {
    text-align: center;
}
</style>