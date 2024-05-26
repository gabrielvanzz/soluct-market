<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const { logout } = useUserStore();

</script>

<template>
    <div>
        <h1>Home</h1>
        <p>Welcome to the Home page</p>
        <button @click="logout">Logout</button>
    </div>
</template>