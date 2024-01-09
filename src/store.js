import { reactive } from 'vue'

export const store = reactive({
    characterList: [],
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    searchText: "",


})