import { reactive } from 'vue';

export const cards = reactive({
    cardsList: [],
    baseUrl: 'https://db.ygoprodeck.com/api/v7/',
    endpoint: ''
})