<template>
    <v-app>
        <v-app-bar height="64" color="primary" :elevation="appbarShadow" clipped-left app dark>
            <v-toolbar-title>
                <v-avatar tile>
                    <v-icon size="40" style="transform: rotate(180deg)">mdi-android-auto</v-icon>
                </v-avatar> Vuetify-Admin
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn class="d-md-flex d-none" @click="fullscreen" text>
                    <v-icon v-text="fullscreenIcon"></v-icon>
                </v-btn>
                <v-btn @click="setting=!setting" text>
                    <v-icon>mdi-palette</v-icon>
                </v-btn>
                <v-btn text @click="logout">
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
            </v-toolbar-items>
        </v-app-bar>
        <v-navigation-drawer
            width="240"
            class="d-sm-flex d-none"
            :mini-variant="miniNav"
            mini-variant-width="64"
            src="../assets/background.png"
            :color="backgroundNav?'primary':null"
            :dark="backgroundNav"
            hide-overlay
            clipped
            app
        >
            <v-list flat>
                <template v-for="list in navList">
                    <v-list-group
                        class="white--text"
                        v-if="list.items.length"
                        :key="list.path"
                        :prepend-icon="list.icon"
                        :active-class="backgroundNav||$vuetify.theme.dark?'white--text':'grey--text text--darken-3'"
                        :group="list.group"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title v-text="list.title"></v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                            v-for="item in list.items"
                            :key="item.title"
                            active-class="secondary white--text"
                            :to="item.path"
                        >
                            <v-list-item-action><v-icon v-text="item.icon"></v-icon></v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item
                        :key="list.title"
                        :active-class="backgroundNav?'secondary white--text':'primary--text'"
                        :to="list.path"
                        v-else
                    >
                        <v-list-item-action><v-icon v-text="list.icon"></v-icon></v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title v-text="list.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-content class="divder pb-12" :style="background">
            <v-expand-transition>
                <v-tabs color="secondary" style="position: sticky; top: 64px;z-index: 6" v-show="tabsView && tabList.length" show-arrows>
                    <v-tab :name="i" @contextmenu="showMenu" v-for="(item, i) in tabList" :key="item.name" :to="item.path">
                        {{ item.title }}
                        <v-icon size="20" v-if="item.title!='首页'" @click.stop.prevent="closeTab(i)" @contextmenu.stop.prevent="">mdi-close</v-icon>
                    </v-tab>
                </v-tabs>
            </v-expand-transition>
            <v-menu
                v-model="tabMenu"
                :position-x="x"
                :position-y="y"
                absolute
                offset-y
                min-width="110"
            >
                <v-list dense>
                    <v-list-item @click="closeTab(index)" v-ripple="{ class: 'secondary--text' }">
                        <v-list-item-title>关闭</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="closeOther(index)" v-ripple="{ class: 'secondary--text' }">
                        <v-list-item-title>关闭其他</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="closeAll" v-ripple="{ class: 'secondary--text' }">
                        <v-list-item-title>关闭所有</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </v-content>
        <v-navigation-drawer width="300" v-model="setting" overlay-opacity="0" floating temporary right app>
            <v-sheet class="ma-4" color="transparent">
                <v-flex class="mb-3 subtitle-1">主题颜色</v-flex>
                <v-color-picker width="268" canvas-height="100" class="mb-3" v-model="primarySet" hide-inputs flat dark></v-color-picker>
                <v-flex class="mb-3 subtitle-1">关键颜色</v-flex>
                <v-color-picker width="268" canvas-height="100" class="mb-3" v-model="secondarySet" hide-inputs flat dark></v-color-picker>
                <v-slider v-model="appbarShadow" color="primary" label="应用栏阴影" max="8" thumb-label hide-details></v-slider>
                <v-switch v-model="tabsView" label="开启菜单选项卡" thumb-label hide-details></v-switch>
                <v-switch v-model="miniNav" label="菜单栏收起" thumb-label hide-details></v-switch>
                <v-switch v-model="backgroundNav" label="菜单栏背景" hide-details></v-switch>
                <v-switch v-model="$vuetify.theme.dark" label="夜间模式" hide-details></v-switch>
            </v-sheet>
        </v-navigation-drawer>
        <v-footer color="primary" class="d-md-none d-flex align-start" padless fixed>
            <v-toolbar class="v-bottom-black-bar" color="transparent" flat dark>
                <v-toolbar-items>
                    <v-btn text>
                        <v-icon>mdi-chevron-up</v-icon>
                    </v-btn>
                    <v-btn text>
                        <v-icon>mdi-star</v-icon>
                    </v-btn>
                </v-toolbar-items>
                <v-btn
                    color="secondary"
                    fab
                    large
                    absolute
                    top
                    right
                    v-ripple="{ center: true }"
                >
                    <v-icon>mdi-reply</v-icon>
                </v-btn>
            </v-toolbar>
        </v-footer>
    </v-app>
</template>

<script>
// 全屏插件
import screenfull from 'screenfull'
// vuetify提供的颜色变量
// import colors from 'vuetify/es5/util/colors'

export default {
    name: 'Home',
    data() {
        return {
            navList: [{
                title: '插件指南',
                icon: 'mdi-speedometer',
                group: '/plugin',
                items: [{
                    title: 'prism 安装',
                    path: '/plugin/prism',
                    icon: 'mdi-triangle-outline'
                }, {
                    title: 'mdi 图标',
                    path: '/plugin/icons',
                    icon: 'mdi-material-design'
                }]
            }],
            tabList: [],
            setting: false,
            miniNav: false,
            tabsView: true,
            backgroundNav: true,
            appbarShadow: 4,
            background: {
                backgroundImage: `url(${require('../assets/background.png')})`,
                backgroundAttachment: 'fixed'
            },
            fullscreenIcon: 'mdi-fullscreen',
            tabMenu: false,
            x: 0,
            y: 0
        }
    },
    mounted() {
        this.tabList.push({
            name: this.$route.name,
            path: this.$route.path,
            title: this.$route.meta
        })
        this.tabsView = JSON.parse(localStorage.getItem('tabsView') || true)
        this.miniNav = JSON.parse(localStorage.getItem('miniNav') || false)
        this.backgroundNav = JSON.parse(localStorage.getItem('backgroundNav') || true)
        this.appbarShadow = localStorage.getItem('appbarShadow') || 4
    },
    computed: {
        dark() {
            return this.$vuetify.theme.dark
        },
        lightPrimary() {
            return this.$vuetify.theme.themes.light.primary
        },
        lightSecondary() {
            return this.$vuetify.theme.themes.light.secondary
        },
        darkPrimary() {
            return this.$vuetify.theme.themes.dark.primary
        },
        darkSecondary() {
            return this.$vuetify.theme.themes.dark.secondary
        },
        primarySet: {
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
        },
        secondarySet: {
            get: function() {
                return this.$vuetify.theme.dark ? this.$vuetify.theme.themes.dark.secondary : this.$vuetify.theme.themes.light.secondary
            },
            set: function(newValue) {
                if(this.$vuetify.theme.dark) {
                    this.$vuetify.theme.themes.dark.secondary = newValue
                } else {
                    this.$vuetify.theme.themes.light.secondary = newValue
                }
            }
        }
    },
    methods: {
        fullscreen() {
            this.fullscreenIcon = screenfull.isFullscreen ? 'mdi-fullscreen':'mdi-fullscreen-exit'
            screenfull.toggle()
        },
        showMenu(e) {
            e.preventDefault();
            this.index = e.target.name;
            this.tabMenu = false
            this.x = e.clientX
            this.y = e.clientY
            this.$nextTick(() => {
                this.tabMenu = true
            })
        },
        closeTab(index) {
            this.tabList.splice(index, 1)
            this.$router.push(this.tabList[this.tabList.length - 1].path)
        },
        closeOther(index) {
            let list = this.tabList[index]
            this.tabList = []
            this.tabList.push(list)
            this.$router.push(list.path)
        },
        closeAll() {
            this.tabList = []
            this.$router.push('/home')
        },
        logout() {
            localStorage.removeItem('token')
            this.$router.push('/login')
        }
    },
    watch: {
        $route(to) {
            // 查找tabs里面是否已经包含该路由
            let isCover = this.tabList.some((val) => {
                return val.name == to.name
            });
            !isCover && this.tabList.push({
                name: to.name,
                path: to.path,
                title: to.meta
            })
        },
        tabsView(val) {
            localStorage.setItem('tabsView', val)
        },
        miniNav(val) {
            localStorage.setItem('miniNav', val)
        },
        backgroundNav(val) {
            localStorage.setItem('backgroundNav', val)
        },
        appbarShadow(val) {
            localStorage.setItem('appbarShadow', val)
        },
        dark(val) {
            localStorage.setItem('dark', val)
        },
        lightPrimary(val) {
            localStorage.setItem('lightPrimary', val)
        },
        darkPrimary(val) {
            localStorage.setItem('darkPrimary', val)
        },
        lightSecondary(val) {
            localStorage.setItem('lightSecondary', val)
        },
        darkSecondary(val) {
            localStorage.setItem('darkSecondary', val)
        }
    }
}
</script>