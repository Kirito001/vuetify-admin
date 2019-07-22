<template>
    <div>
        <v-layout
            row
            wrap
            justify-space-around
        >
            <v-switch
                v-model="icons"
                class="mx-2"
                label="Text + icons"
            ></v-switch>
            <v-switch
                v-model="centered"
                class="mx-2"
                label="Centered"
                :disabled="vertical"
            ></v-switch>
            <v-switch
                v-model="grow"
                class="mx-2"
                label="Grow"
            ></v-switch>
            <v-switch
                v-model="vertical"
                class="mx-2"
                label="Vertical"
            ></v-switch>
            <v-switch
                v-model="right"
                class="mx-2"
                label="Right"
            ></v-switch>
            <v-switch
                v-model="arrows"
                class="mx-2"
                label="show-arrows"
            ></v-switch>
            <v-flex xs12>
                <v-slider
                    v-model="tabs"
                    min="0"
                    max="30"
                    label="选项卡数量"
                ></v-slider>
            </v-flex>
        </v-layout>

        <v-card
            flat
            tile
        >
            <v-tabs
                v-model="tab"
                background-color="accent"
                color="primary"
                class="elevation-2"
                :centered="centered"
                :grow="grow"
                :vertical="vertical"
                :right="right"
                dark
                :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
                :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
                :icons-and-text="icons"
                :show-arrows="arrows"
            >
                <v-tabs-slider></v-tabs-slider>
                <v-tab
                    v-for="i in tabs"
                    :key="i"
                    :href="`#tab-${i}`"
                >
                    第 {{ i }} 项
                    <v-icon v-if="icons">phone</v-icon>
                </v-tab>

                <v-tab-item
                    v-for="i in tabs"
                    :key="i"
                    :value="'tab-' + i"
                >
                        <v-card-text>{{ text }}</v-card-text>
                </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Tab',
    data () {
        return {
            tab: null,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            icons: false,
            centered: false,
            grow: false,
            vertical: false,
            prevIcon: false,
            nextIcon: false,
            right: false,
            tabs: 5,
            arrows: false
        }
    }
}
</script>
