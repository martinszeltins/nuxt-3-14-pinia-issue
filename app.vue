<template>
    <div class="text-2xl p-10 h-screen bg-gray-950 text-gray-100">
        <h1>Hello Nuxt</h1>

        <p>
            <span>AppName: {{ appName }} (pinia store)</span>
        </p>
    </div>
</template>

<script setup lang="ts">
    const { appName } = storeToRefs(useAppStore())
</script>
