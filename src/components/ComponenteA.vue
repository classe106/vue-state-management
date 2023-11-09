<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store: store
        }
    }
}
</script>

<template>
    <!-- Mostro in pagina una proprietà dello store -->
    <p>{{ store.counter }}</p>
</template>