import { defineStore } from 'pinia';
import { ref } from 'vue';

defineStore('AuthUserStore', () => {
    const user = ref ({
        name: '',
        email: '',
        role: ''
    })
})
