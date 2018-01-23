<template>
    <div>
        <h2>Packages</h2>
        <div v-for="p in packages" :key="p.id">
            {{ p.name }}
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        packages() {
            return this.$store.getters.packagesWithType(
                this.$route.params.type
            );
        },
    },
}
</script>
