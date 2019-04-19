<template>
    <div class="container">
        <form @submit.prevent="addTask">
            <div class="form-group">
                <label for="title">Titre</label>
                <input type="text" class="form-control" id="title" placeholder="Acheter des œufs" v-model="title">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: ""
        }
    },
    methods: {
        addTask() {
            this.$store.commit('addThing', this.title);
        }
    }
}
</script>
