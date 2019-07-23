<template>
    <v-navigation-drawer
        width="340"
        right
        temporary
        hide-overlay
        stateless
        v-model="dra"
        fixed
        class="setting"
    >
        <v-toolbar flat absolute>
            <v-toolbar-title>
                <span class="title">布局设置</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
                @click.stop="updateSetting"
                fab
                top
                right
                depressed
                small
            >
                <v-icon>close</v-icon>
            </v-btn>
        </v-toolbar>
        <div class="pa-3" style="margin-top: 64px">
            <v-flex class="mb-3 subtitle-1">主题颜色</v-flex>
            <v-color-picker width="308" class="mb-3" v-model="primary" hide-inputs></v-color-picker>
            <!-- <v-flex class="mb-3 subtitle-1">辅色</v-flex>
            <v-color-picker width="308" class="mb-3" v-model="$vuetify.theme.themes.light.secondary"></v-color-picker> -->
            <v-flex class="mb-3 subtitle-1">顶部颜色</v-flex>
            <v-color-picker width="308" class="mb-3" v-model="accent" hide-inputs></v-color-picker>
            <v-switch v-model="$vuetify.theme.dark" label="夜间模式"></v-switch>
        </div>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Setting',
    data() {
        return {
            colors: [],
            BaseColor: []
        }
    },
    methods: {
        ...mapActions(['updateSetting'])
    },
    computed: {
        ...mapGetters(['setting']),
        dra: {
            get: function() {
                return this.setting
            },
            set: function() {
                this.updateSetting
            }
        },
        accent: {
            get: function() {
                return this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.accent : this.$vuetify.theme.themes.light.accent
            },
            set: function(newValue) {
                if(this.$vuetify.theme.dark) {
                    this.$vuetify.theme.themes.dark.accent = newValue
                } else {
                    this.$vuetify.theme.themes.light.accent = newValue
                }
            }
        },
        primary: {
            get: function() {
                return this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.primary : this.$vuetify.theme.themes.light.primary
            },
            set: function(newValue) {
                if(this.$vuetify.theme.dark) {
                    this.$vuetify.theme.themes.dark.primary = newValue
                } else {
                    this.$vuetify.theme.themes.light.primary = newValue
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .setting {
        box-sizing: border-box;
        .v-navigation-drawer__content::-webkit-scrollbar {
            width: 1px;
            height: 1px;
        }
    }
</style>
