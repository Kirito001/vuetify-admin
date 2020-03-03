<template>
    <v-container class="pa-md-4 pa-sm-3 pa-2" fluid>
        <v-row justify="center" no-gutters>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <v-alert
                    color="secondary"
                    class="my-4"
                    border="left"
                    colored-border
                    prominent
                    text
                    tile
                >
                    <v-avatar size="62" class="float-left mr-2">
                        <v-img src="../../assets/icons.svg"></v-img>
                    </v-avatar>
                    <v-btn class="ma-2 float-right" tile color="pink" outlined dark>V 4.8.95</v-btn>
                    <div class="title secondary--text">Material Design Icons</div>
                    <span>材质图标是常见动作和物品的精美设计符号。我将它们展示出来</span>
                </v-alert>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <v-text-field
                    v-model="search"
                    @click:append="searchIcons"
                    prepend-inner-icon="mdi-magnify"
                    append-icon="mdi-subdirectory-arrow-left"
                    color="secondary"
                    label="搜索图标"
                    solo-inverted
                    hide-details
                    flat
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <v-row dense>
                    <v-col md="2" sm="3" cols="4" v-for="item in pageEnd" :key="iconsList[current+item].name">
                        <v-sheet
                            class="text-center pa-5"
                            v-clipboard:copy="iconsList[current+item].name"
                            v-clipboard:success="copySuccess"
                            v-clipboard:error="copyError"
                            v-ripple
                        >
                            <v-icon size="40">mdi-{{ iconsList[current+item].name }}</v-icon>
                            <div class="body-2 text-truncate mt-4" v-text="iconsList[current+item].name"></div>
                        </v-sheet>
                    </v-col>
                </v-row>
                <v-pagination
                    v-model="pageNo"
                    class="my-8"
                    color="secondary"
                    :total-visible="9"
                    :length="totalPages"
                ></v-pagination>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import icons from '../../plugins/iconsList'
import { mapActions } from 'vuex'

export default {
    name: 'Icons',
    data() {
        return {
            pageNo: 1,
            pageSize: 60,
            iconsList: icons,
            search: null
        }
    },
    computed: {
        pageEnd() {
            if(this.pageSize * this.pageNo < this.iconsList.length) {
                return this.pageSize
            } else {
                return this.iconsList.length - (this.pageSize * (this.pageNo - 1)) -1
            }
        },
        current() {
            return this.pageSize * (this.pageNo - 1)
        },
        totalPages() {
            return Math.ceil(this.iconsList.length / this.pageSize)
        }
    },
    methods: {
        ...mapActions(['showSnackbar']),
        searchIcons() {
            if(this.search) {
                this.pageNo = 1
                let newList = []
                let patt = RegExp(this.search)
                icons.map(current => {
                    if(patt.test(current.name)) {
                        newList.push(current)
                    }
                })
                !newList.length || (this.iconsList = newList)
            } else {
                this.iconsList = icons
            }
        },
        copySuccess(e) {
            this.showSnackbar({
                show: true,
                text: '已复制到剪贴板：' + e.text
            })
        },
        copyError() {
            this.showSnackbar({
                show: true,
                color: 'error',
                text: '无法复制文本'
            })
        }
    }
}
</script>