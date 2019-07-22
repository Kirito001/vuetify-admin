<template>
    <v-app-bar
        color="accent"
        height="58px"
        clipped-left
        flat
        dark
        app
    >
        <v-toolbar-title style="width: 260px">
            <v-avatar size="38px" tile>
                <img src="../assets/logo.svg" alt="Vuetify" />
            </v-avatar>

            <span class="toolbar-title ml-3 mr-3">Vuetify-<span class="primary--text">Admin</span></span>

            <v-app-bar-nav-icon @click.native="updateDrawer"></v-app-bar-nav-icon>
        </v-toolbar-title>
        
        <v-text-field
            flat
            :solo-inverted="!$vuetify.theme.dark"
            :solo="$vuetify.theme.dark"
            append-icon="search"
            label="Search"
            hide-details
        ></v-text-field>

        <v-spacer></v-spacer>
        <v-toolbar-items>
            <v-menu offset-y left>
                <template v-slot:activator="{ on }">
                    <v-btn text v-on="on">
                        <v-avatar size="40" class="avatar">
                            <img src="../assets/avd.jpg" alt="avatar">
                        </v-avatar>
                    </v-btn>
                </template>
                <v-card>
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                            <img src="../assets/avd.jpg" alt="John">
                            </v-list-item-avatar>

                            <v-list-item-content>
                            <v-list-item-title>John Leider</v-list-item-title>
                            <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
                            </v-list-item-content>

                            <v-list-item-action>
                            <v-btn
                                icon
                                :class="fav ? 'red--text' : ''"
                                @click="fav = !fav"
                            >
                                <v-icon>favorite</v-icon>
                            </v-btn>
                            </v-list-item-action>
                        </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                        <v-list-item>
                            <v-list-item-action>
                            <v-switch v-model="message"></v-switch>
                            </v-list-item-action>
                            <v-list-item-title>Enable messages</v-list-item-title>
                        </v-list-item>

                        <v-list-item>
                            <v-list-item-action>
                            <v-switch v-model="hints"></v-switch>
                            </v-list-item-action>
                            <v-list-item-title>Enable hints</v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn text @click="menu = false">取消</v-btn>
                        <v-btn color="primary" text @click="menu = false">保存</v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
            <v-btn text @click.stop="updateSetting">
                <v-icon>palette</v-icon>
            </v-btn>
            <v-btn text @click="logout">
                <v-icon>logout</v-icon>
            </v-btn>
        </v-toolbar-items>
    </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Toolbar',
    data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true
    }),
    methods: {
        ...mapActions(['updateDrawer', 'updateSetting']),
        logout() {
            localStorage.removeItem('accessToken');
            this.$router.push({ path: '/login' });
        }
    }
}
</script>
