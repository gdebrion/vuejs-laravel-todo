<template>
    <nav class="navbar navbar-dark bg-primary sticky-top mb-4 navbar-expand-md">
        <div class="container">
            <router-link to="/" exact class="navbar-brand">To-do List avec <strong>VueJS</strong> et <strong>Laravel</strong></router-link>

            <div class="collapse navbar-collapse justify-content-end">
                <div class="navbar-nav">
                    <router-link to="/add" active-class="active" class="nav-link nav-item" v-show="!onForm">Ajouter une tâche</router-link>
                    <a id="add-btn" class="nav-link nav-item" v-show="onForm" @click="save">Sauvegarder</a>
                </div>
            </div>
        </div>
    </nav>    
</template>

<style>
#add-btn {
    cursor: pointer;
}
</style>
 
<script>
export default {
    computed: {
        onForm() {
            return this.$route.path == '/add' || this.$route.path.substr(0, 5) == '/edit';
        }
    },
    methods: {
        save() {
            this.$root.$emit('saveForm');
        }
    }
}
</script>
