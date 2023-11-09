<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store: store,

        }
    },
    methods: {
        add() {
            // Modifico il valore di una proprietà dello store
            this.store.counter++;
        }
    }
}
</script>

<template>
    <!-- Chiamo un metodo del componente -->
    <button @click="add()">Counter++ COMPONENTE</button>

    <!-- Chiamo un metodo dello store -->
    <button @click="store.storeAdd()">Counter++ STORE</button>
</template>