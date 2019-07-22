<template>
    <v-navigation-drawer
        v-model="dra"
        :mini-variant="mini"
        mini-variant-width="68"
        clipped
        app
    >
        <v-list>
            <v-list-item @click.stop="mini = !mini">
                <v-list-item-icon>
                    <v-icon v-show="!mini">format_indent_decrease</v-icon>
                    <v-icon v-show="mini">format_indent_increase</v-icon>
                </v-list-item-icon>
                <v-list-item-title>收起</v-list-item-title>
            </v-list-item>
            <template v-for="item in items">
                <v-list-group
                    :prepend-icon="item.icon"
                    v-model="item.active"
                    no-action
                    v-if="item.items"
                    :key="item.title"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item :to="list.to" v-for="list in item.items" :key="list.title" ripple>
                        <v-list-item-icon>
                            <v-icon>{{list.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title >{{list.title}}</v-list-item-title>
                    </v-list-item>
                </v-list-group>
                <v-list-item :to="item.to" :key="item.title" ripple v-else>
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Navigation',
    data: () => ({
        mini: false,
        active: true,
        items: [
            {
                icon: 'home',
                title: '首页',
                to: '/home'
            }, {
                icon: 'dashboard',
                title: '组件',
                active: true,
                items: [
                    {
                        icon: 'tab',
                        title: '表格',
                        to: '/table'
                    }
                ]
            }, {
                icon: 'tab',
                title: '选项卡',
                to: '/tabs'
            }
        ]
    }),
    computed: {
        ...mapGetters(['drawer']),
        dra: {
            get: function() {
                return this.drawer
            },
            set: function() {
                this.updateDrawer
            }
        }
    },
    methods: {
        ...mapActions(['updateDrawer'])
    }
}
</script>