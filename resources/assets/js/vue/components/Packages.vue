<template>
    <div>
        <h1>{{ type }} packages by Spatie</h1>
        <ul class="list-reset">
            <li
                v-for="p in packages"
                :key="p.id">
                <a
                    :href="p.url"
                    class="block no-underline bg-white p-6 mb-4 rounded-sm shadow border border-grey-lightest hover:border-grey-lighter"
                    target="_blank"
                >
                    <h2 class="text-base text-gold uppercase mb-1">
                        {{ p.name }}
                    </h2>
                    <div
                        class="text-sm text-grey-darker"
                        v-html="p.description"
                    />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import sortBy from 'lodash/sortBy';

export default {
    computed: {
        type() {
            return this.$route.params.type;
        },

        packages() {
            const packages = this.$store.getters.packagesWithType(this.type);

            return sortBy(packages, 'name');
        },
    },
};
</script>
