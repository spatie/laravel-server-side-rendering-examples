<template>
    <div>
        <p>
            Spatie is a webdesign agency based in Antwerp, Belgium.
            You'll find an overview of all our open source projects on our website.
        </p>
        <router-link
            v-for="type in types"
            :key="type"
            :to="{ name: 'packages', params: { type } }"
        >{{ type }}</router-link>
    </div>
</template>

<script>
export default {
    computed: {
        types() {
            return this.$store.getters.types;
        },
    },
}
</script>

