<template>
    <div
        id="app"
        class="max-w-md mt-8 sm:mt-16 mx-auto px-8">
        <router-link
            :to="{ name: 'home' }"
            :class="this.$route.name === 'home' ? 'invisible' : ''"
            class="text-xs text-grey-light inline-block mb-2"
        >
            ← <span class="underline">Back</span>
        </router-link>

        <router-view />
    </div>
</template>
