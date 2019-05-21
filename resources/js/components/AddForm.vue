<template>
    <div class="container">
        <form @submit.prevent="addTask">
            <div class="form-group">
                <label for="title">Titre</label>
                <input type="text" class="form-control" v-bind:class="{ 'is-invalid': hasTitleError() && title != ''}" id="title" placeholder="Acheter des œufs" v-model="title">
                <div class="invalid-feedback">{{ getTitleError() }}</div>
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
    mounted() {
        this.$root.$on('saveForm', () => {
            this.addTask();
        });
    },
    methods: {
        addTask() {
            this.$store.commit('addThing', this.title);
        },
        getTitleError() {
            return this.$store.state.errors.title != undefined ? this.$store.state.errors.title[0] : ""; 
        },
        hasTitleError() {
            return this.$store.state.errors.title != undefined;
        }
    },
   
}
</script>
