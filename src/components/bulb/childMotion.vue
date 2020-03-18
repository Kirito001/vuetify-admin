<template>
    <v-sheet tile>
        <v-card min-height="100%" tile>
            <v-card-title>{{ items[index].title }}
                <v-spacer></v-spacer>
                <v-btn icon large>
                    <v-icon>mdi-star-outline</v-icon>
                </v-btn>
            </v-card-title>
            <v-divider></v-divider>
            <v-list-item>
                <v-list-item-avatar>
                    <img :src="items[index].avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title v-text="items[index].sender"></v-list-item-title>
                    <v-list-item-subtitle v-html="items[index].subtitle"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            <v-card-text v-html="items[index].content"></v-card-text>
            <v-card-text v-html="items[index].content"></v-card-text>
            <v-card-text v-html="items[index].content"></v-card-text>
            <v-card-text v-html="items[index].content"></v-card-text>
            <v-card-text v-html="items[index].content"></v-card-text>
        </v-card>
    </v-sheet>
</template>

<script>
export default {
    name: 'ChildMotion',
    props: {
        index: Number
    },
    data() {
        return {
            items: [{
                header: '今天'
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: '这个周末早午餐？',
                sender: '阿里·康纳斯',
                subtitle: '致杰森·奥纳',
                content: '这个周末我要去你家附近。要不要一起出去玩？'
            }, {
                divider: true, inset: true
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: '夏季烧烤',
                sender: '约纳斯·埃克特',
                subtitle: '致亚历克斯、斯科特和詹妮弗',
                content: '嗨，朋友们，<br/><br/>星期天我在杂货店晚上……当我遇到吉灵威廉姆斯的时候！20年过去了，我几乎认不出她了!。'
            }, {
                divider: true, inset: true
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: '是的 是的',
                sender: '桑德拉·亚当斯',
                subtitle: '致亚历克斯、斯科特和詹妮弗',
                content: '你有巴黎的建议吗？你去过吗？',
            }, {
                divider: true, inset: true
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: '生日礼物',
                sender: '特雷弗·汉森',
                subtitle: '致蕾妮·卡尔森',
                content: '有什么想法让海蒂过生日吗？',
            }, {
                divider: true, inset: true
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: '尝试食谱',
                sender: '布里塔·霍尔特',
                subtitle: '致辛迪·贝克',
                content: '我们应该吃这个：炉排，南瓜，玉米和番茄炸玉米饼。',
            }]
        }
    }
}
</script>