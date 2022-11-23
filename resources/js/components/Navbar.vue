<template>
    <div>
        <v-app-bar color="primary">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer">
            </v-app-bar-nav-icon>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer">
            <v-list>
                <v-list-item v-for="item in items" :to="item.ruta">
                    <template v-slot:prepend>
                        <v-icon :icon="item.icon" color="primary"></v-icon>
                    </template>
                    {{ item.nombre }}
                </v-list-item>
            </v-list>
            <template v-slot:append>
                <div class="pa-2">
                    <v-btn color="error" variant="text" block to="/login">
                        Salir
                    </v-btn>
                </div>
            </template>
        </v-navigation-drawer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { nombre: "Inicio", icon: "mdi-home", ruta: "/" },
                {
                    nombre: "Usuarios",
                    icon: "mdi-account-group",
                    ruta: "/usuario",
                },
                { nombre: "Mi musica", icon: "mdi-music", ruta: "/musica" },
                {
                    nombre: "Artistas",
                    icon: "mdi-account-music",
                    ruta: "/artista",
                },
                { nombre: "Albums", icon: "mdi-album", ruta: "/album" },
                {
                    nombre: "Contacto",
                    icon: "mdi-card-account-phone",
                    ruta: "/contacto",
                },
            ],
            drawer: null,
        };
    },
};
</script>
