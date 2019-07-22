<template>
    <div>
        <v-tabs show-arrows color="primary" height="40px">
            <v-tab
                v-for="(tab, i) in tabs"
                :key="tab.name"
                :to="tab.href"
                :name="i"
                @contextmenu="show"
            >
                {{tab.name}}
                <v-btn
                    fab
                    icon
                    right
                    x-small
                    class="ml-2"
                    v-show="tab.name!='首页'"
                    @click.stop.prevent="closeTab(i)"
                >
                    <v-icon size="14" :color="$route.path==tab.href?'primary':''">close</v-icon>
                </v-btn>
            </v-tab>
        </v-tabs>
        <v-divider></v-divider>
        <v-menu
            v-model="showMenu"
            :position-x="x"
            :position-y="y"
            absolute
            offset-y
            min-width="110"
        >
            <v-list dense>
                <v-list-item @click="closeTab(index)">
                    <v-list-item-title>关闭</v-list-item-title>
                </v-list-item>
                <v-list-item @click="closeOther(index)">
                    <v-list-item-title>关闭其他</v-list-item-title>
                </v-list-item>
                <v-list-item @click="closeAll">
                    <v-list-item-title>关闭所有</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: "Tab",
    data() {
        return {
            showMenu: false,
            x: 0,
            y: 0,
            index: 0
        }
    },
    computed: {
        ...mapGetters(['tabs'])
    },
    methods: {
        ...mapActions(['closeTab', 'closeOther', 'closeAll']),
        show(e) {
            e.preventDefault();
            if(e.target.innerText.indexOf('首页') > -1){
                return false;
            }
            this.index = e.target.name;
            this.showMenu = false;
            this.x = e.clientX;
            this.y = e.clientY;
            this.$nextTick(() => {
                this.showMenu = true
            })
        }
    }
};
</script>