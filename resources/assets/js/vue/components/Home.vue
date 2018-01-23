<template>
    <div>
        <h1>SSR with Laravel & Vue </h1>
        <section class="text-xl mb-12">
            <p class="mb-8">
                This is a quick demo app for server side rendering Vue with Laravel. Below is a list of our open source packages, which our client-side app has
                divided by type.
            </p>
            <p>
                We're using vue-router for this page so each package type has its own permalink, and will be prerendered
                on the server if visited directly.
            </p>
        </section>
        <nav class="flex">
            <router-link
                v-for="type in types"
                :key="type"
                :to="{ name: 'packages', params: { type } }"
                class="bg-blue-light font-bold mr-4 px-4 py-2 no-underline rounded-sm text-white uppercase"
            >
                {{ type }}
            </router-link>
        </nav>
    </div>
</template>

<script>
export default {
    computed: {
        types() {
            return this.$store.getters.types.sort();
        },
    },
};
</script>
