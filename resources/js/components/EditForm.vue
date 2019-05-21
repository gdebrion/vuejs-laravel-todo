<template>
    <div class="container">
        <form @submit.prevent="updateTask">
            <div class="form-group">
                <label for="title">Modifier la tâche</label>
                <input type="text" class="form-control" id="title" placeholder="Acheter des œufs" v-model="title">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: 0,
            title: ""
        }
    },
    created() {
        this.fetchThing();
    },
    mounted() {
        this.$root.$on('saveForm', () => {
            this.updateTask();
        });
    },
    methods: {
        updateTask() {
            this.$store.commit('updateThing', {id: this.id, title: this.title});
        },
        fetchThing() {
            axios.get(`/api/things/${this.$route.params.id}`)
                .then(res => res.data)
                .then(res => {
                    var item = res.data;

                    if(item !== undefined) {
                        this.id = item.id;
                        this.title = item.title;
                    }
                })
                .catch(err => console.error(err));
        }
    },
    watch: {
        '$route': 'fetchThing'
    }
}
</script>
