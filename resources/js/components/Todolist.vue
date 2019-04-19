<template>
    <div class="container">
        <h2 class="">{{ total }} choses à faire :</h2>

        <div v-if="total == 0" class="alert alert-success">
            Il n'y a plus rien à faire \o/ !
        </div>

        <div v-else class="card mb-3" v-for="thing in things" v-bind:key="thing.id">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-9">
                        {{ thing.title }}<br>
                        <span class="text-muted">Ajouté le {{ thing.created_at }}</span>
                    </div>
                    <div class="col-md-3 text-right">
                        <div class="btn-group">
                            <button class="btn btn-link text-secondary">Éditer</button>
                            <button class="btn btn-link text-danger" @click="deleteThing(thing.id)">Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <pagination></pagination>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                pagination: {}
            }
        },
        created() {
            this.$store.commit('fetchThings');
        },
        computed: {
            things() {
                return this.$store.state.things;
            },
            total() {
                return this.$store.state.pagination.total;
            }
        },
        methods: {            
            deleteThing(id) {
                this.$store.commit('deleteThing', id);
            }
        }
    }
</script>