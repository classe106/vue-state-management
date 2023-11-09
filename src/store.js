import { reactive } from 'vue'

export const store = reactive({
    counter: 0,
    // Metodo interno allo store e accessibile ai componenti (vedi ComponenteB.vue)
    storeAdd() {
        // Con il this faccio riferimento alle proprietà dello store
        this.counter++;
    }
});