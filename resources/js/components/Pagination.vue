<template>
    <nav v-if="total > 0">
        <ul class="pagination justify-content-center">
            <li class="page-item" v-bind:class="[{disabled: !previousPage}]">
                <a class="page-link" href="#" tabindex="-1" @click="prev()">Précédent</a>
            </li>
            <li class="page-item disabled"><a class="page-link" href="#">Page {{ currentPage }} sur {{ lastPage }}</a></li>
            <li class="page-item" v-bind:class="[{disabled: !nextPage}]">
                <a class="page-link" href="#" @click="next()">Suivant</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    computed: {
        total() {
            return this.$store.state.pagination.total;
        },
        previousPage() {
            return this.$store.state.pagination.prev;
        },        
        nextPage() {
            return this.$store.state.pagination.next;
        },
        currentPage() {
            return this.$store.state.pagination.current_page;
        },
        lastPage() {
            return this.$store.state.pagination.last_page;
        },
    },
    methods: {
        prev() {
            this.$store.commit('fetchThings', this.$store.state.pagination.prev);
        },
        next() {
            this.$store.commit('fetchThings', this.$store.state.pagination.next);
        }
    }
}
</script>
