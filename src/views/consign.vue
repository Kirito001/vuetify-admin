<template>
    <v-container class="pa-5" fluid>
        <v-card flat>
            <v-card-title class="pb-0">
                <v-row>
                    <v-col md="4" sm="4" cols="12">
                        <v-text-field
                            color="secondary"
                            label="订单号/托运单号"
                            append-icon="mdi-magnify"
                            @click:append="console.log(1)"
                            hide-details
                            filled
                            dense
                        ></v-text-field>
                    </v-col>
                    <v-col md="4" sm="4" cols="12">
                        <v-select
                            color="secondary"
                            :items="['货物托运','行李托运']"
                            label="订单类型"
                            hide-details
                            clearable
                            filled
                            dense
                        ></v-select>
                    </v-col>
                    <v-col cols="12">
                        <span class="subheading">订单状态</span>
                        <v-btn-toggle mandatory active-class="secondary--text" group>
                            <v-btn v-for="tag in tags" :key="tag">{{ tag }}</v-btn>
                        </v-btn-toggle>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
                <v-data-table
                    :headers="headers"
                    :items="items"
                    :items-per-page="5"
                    locale="zhHant"
                >
                    <template v-slot:item.action="{ item }">
                        <v-btn
                            small
                            outlined
                            color="secondary"
                            class="mr-2"
                            @click="logItem(item)"
                        >日志</v-btn>
                        <v-btn
                            small
                            depressed
                            color="secondary"
                            @click="detailItem(item)"
                        >详情</v-btn>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Consign',
    data() {
        return {
            tags: ['全部', '待确认', '待付款', '待揽件', '待托运', '待运输', '运输中', '已到站', '已揽件', '待取件', '已取件', '已完成', '已取消'],
            headers: [
                { text: '序号', value: 'id', sortable: false },
                { text: '订单类型', value: 'type' },
                { text: '订单号', value: 'orderId' },
                { text: '托运单号', value: 'consignId' },
                { text: '托运人', value: 'shipper' },
                { text: '收件人', value: 'recipient' },
                { text: '商品明细', value: 'detailed' },
                { text: '服务要求', value: 'service' },
                { text: '订单状态', value: 'status' },
                { text: '订单金额', value: 'money' },
                { text: '操作', value: 'action', sortable: false }
            ],
            items: [
                { id: 1, type: '货物托运', orderId: '123123', consignId: '1231123', shipper: '赵高', recipient: '李斯', detailed: '1-4 衣服', service: '站点提货', status: '待确认', money: '30.00' },
                { id: 2, type: '货物托运', orderId: '123123', consignId: '1231123', shipper: '赵高', recipient: '李斯', detailed: '1-4 衣服', service: '站点提货', status: '待确认', money: '30.00' },
                { id: 3, type: '货物托运', orderId: '123123', consignId: '1231123', shipper: '赵高', recipient: '李斯', detailed: '1-4 衣服', service: '站点提货', status: '待确认', money: '30.00' },
                { id: 4, type: '货物托运', orderId: '123123', consignId: '1231123', shipper: '赵高', recipient: '李斯', detailed: '1-4 衣服', service: '站点提货', status: '待确认', money: '30.00' }
            ]
        }
    },
    methods: {
        logItem(item) {
            this.console.log(item)
        },
        detailItem(item) {
            this.console.log(item)
        }
    }
}
</script>