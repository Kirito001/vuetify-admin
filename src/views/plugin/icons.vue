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
                    prepend-inner-icon="mdi-magnify"
                    color="secondary"
                    label="搜索图标-搜索功能开发中"
                    solo-inverted
                    hide-details
                    flat
                ></v-text-field>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <v-row dense>
                    <v-col md="2" sm="3" cols="4" v-for="item in pageEnd" :key="iconsList[current+item].hex">
                        <v-sheet class="text-center pa-5">
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

export default {
    name: 'Icons',
    data() {
        return {
            pageNo: 1,
            pageSize: 60,
            iconsList: icons,
            iconsLength: icons.length
        }
    },
    computed: {
        pageEnd() {
            if(this.pageSize * this.pageNo < this.iconsLength) {
                return this.pageSize
            } else {
                return this.iconsLength - (this.pageSize * (this.pageNo - 1)) -1
            }
        },
        current() {
            return this.pageSize * (this.pageNo - 1)
        },
        totalPages() {
            return Math.ceil(this.iconsLength / this.pageSize)
        }
    }
}
</script>