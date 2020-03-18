<template>
    <v-container class="pa-md-4 pa-sm-3 pa-2" fluid>
        <v-row justify="center" no-gutters>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <v-alert
                    color="secondary"
                    class="my-4 pl-6"
                    border="left"
                    icon="mdi-transition-masked"
                    colored-border
                    prominent
                    text
                    tile
                >
                    <div class="title secondary--text">v-motion</div>
                    <span>进行转场动画的指令，下面来看一个例子，只是提供一个简单的思路</span>
                </v-alert>
            </v-col>
            <v-col cols="12" md="6" class="mb-md-4 mb-sm-3 mb-2 d-flex flex-column">
                <v-tabs v-model="tab" background-color="primary" class="flex-grow-0" dark>
                    <v-tab>html</v-tab>
                    <v-tab>js</v-tab>
                    <v-tab>css</v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab" class="flex-grow-1">
                    <v-tab-item eager>
                        <pre style="height:460px;overflow:auto"><code class="language-html">
                            {{ code }}
                        </code></pre>
                    </v-tab-item>
                    <v-tab-item eager>
                       <pre style="height:460px;overflow:auto"><code class="language-js">
                            import prism from 'prismjs'
                            import childMotion from '../../components/bulb/childMotion'

                            export default {
                                name: 'Motion',
                                components: {
                                    childMotion
                                },
                                data() {
                                    return {
                                        items: [{
                                            header: '今天'
                                        }, {
                                            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                                            title: '这个周末早午餐？',
                                            subtitle: "<span class='text--primary'>阿里·康纳斯</span> &mdash; 这个周末我要去你家附近办事。你想出去玩吗?",
                                        }, {
                                            divider: true, inset: true
                                        }, {
                                            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                                            title: '夏季烧烤',
                                            subtitle: "<span class='text--primary'>致亚历克斯、斯科特和詹妮弗</span> &mdash; 我希望我能来，但这个周末我不在城里。",
                                        }, {
                                            divider: true, inset: true
                                        }, {
                                            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                                            title: '是的 是的',
                                            subtitle: "<span class='text--primary'>桑德拉·亚当斯</span> &mdash; 您对巴黎有建议吗？你去过吗",
                                        }, {
                                            divider: true, inset: true
                                        }, {
                                            avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                                            title: '生日礼物',
                                            subtitle: "<span class='text--primary'>特雷弗·汉森</span> &mdash; 你知道我们应该给海蒂买什么生日礼物吗?",
                                        }, {
                                            divider: true, inset: true
                                        }, {
                                            avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                                            title: '尝试食谱',
                                            subtitle: "<span class='text--primary'>布里塔·霍尔特</span> &mdash; 我们应该吃这个:磨碎的、南瓜、玉米和墨西哥卷饼。",
                                        }],
                                        tab: null,
                                        toggle: true,   // 转场状态
                                        index: 0
                                    }
                                },
                                mounted() {
                                    prism.highlightAll()
                                },
                                methods: {
                                    motionEnter(index) {
                                        setTimeout(() => {
                                            this.toggle = false
                                        }, 30);
                                        this.index = index
                                    }
                                }
                            }
                        </code></pre>
                    </v-tab-item>
                    <v-tab-item eager>
                        <pre><code class="language-css" style="height:428px">
                            &lt;style lang="scss"&gt;
                                #cutto {
                                    .v-card {
                                        transition: margin 200ms;
                                        margin-top: -77px;
                                    }
                                    &.close-mt .v-card {
                                        margin-top: 0;
                                    }
                                }
                            &lt;/style&gt;
                        </code></pre>
                    </v-tab-item>
                </v-tabs-items>
            </v-col>
            <v-col cols="12" md="4" class="mb-md-4 mb-sm-3 mb-2 d-flex justify-end">
                <v-card width="360" tile>
                    <v-system-bar color="#5013dd" dark>
                        <v-spacer></v-spacer>
                        <v-icon>mdi-square</v-icon>
                        <v-icon>mdi-circle</v-icon>
                        <v-icon>mdi-wifi-strength-4</v-icon>
                    </v-system-bar>
                    <v-app-bar height="56" color="#6716f7" style="position:relative; z-index:2" dark>
                        <v-btn v-motion:cutto="false" @click="toggle=true" icon>
                            <v-scale-transition origin="center center" leave-absolute>
                                <v-icon v-show="toggle">mdi-menu</v-icon>
                            </v-scale-transition>
                            <v-scale-transition origin="center center" leave-absolute>
                                <v-icon v-show="!toggle">mdi-arrow-left</v-icon>
                            </v-scale-transition>
                        </v-btn>
                        <v-toolbar-title>收件箱</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-scale-transition origin="center center" hide-on-leave>
                            <v-btn v-show="!toggle" icon><v-icon>mdi-delete</v-icon></v-btn>
                        </v-scale-transition>
                        <v-scale-transition origin="center center" hide-on-leave>
                            <v-btn v-show="!toggle" icon><v-icon>mdi-email</v-icon></v-btn>
                        </v-scale-transition>
                        <v-scale-transition origin="center center" hide-on-leave>
                            <v-btn v-show="toggle" icon><v-icon>mdi-magnify</v-icon></v-btn>
                        </v-scale-transition>
                        <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
                    </v-app-bar>
                    <v-list two-line tile>
                        <template v-for="(item, index) in items">
                            <v-subheader
                                v-if="item.header"
                                :key="item.header"
                                v-text="item.header"
                            ></v-subheader>
                            <v-divider
                                v-else-if="item.divider"
                                :key="index"
                                :inset="item.inset"
                            ></v-divider>
                            <v-list-item v-else :key="item.title" v-motion:cutto="true" @click="motionEnter(index)">
                                <v-list-item-avatar>
                                    <v-img :src="item.avatar"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title v-text="item.title"></v-list-item-title>
                                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                        <v-overlay :value="!toggle" opacity="0.3" z-index="1" absolute></v-overlay>
                        <childMotion id="cutto" :index="index" :class="toggle?'':'close-mt'" />
                    </v-list>
                </v-card>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <p class="title">使用说明</p>
                <p>组件中可以直接使用，重要：<span class="orange--text">需要转场的标签和被转场标签最好是拥有相同的父标签</span></p>
                <pre><code class="language-js">
                    v-motion:cutto="true"   // true 表示转场前
                    v-motion:cutto="false"  // false 表示转场后
                </code></pre>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <p><code>cutto</code> 名字可变，对应的是你需要转场的标签的 id，示例里面用的cutto</p>
                <pre><code class="language-js">
                    // motion.js
                    export default {
                        bind(el, binding) {
                            el.addEventListener('click', () => {
                                let cutto = document.getElementById(binding.arg)
                                let initStyle = `
                                    display:none;
                                    position:absolute;
                                    left:0;
                                    right:0;
                                    height:0;
                                    z-index:1;
                                    transition:all 200ms;
                                    overflow:hidden;`
                                if(binding.value) {
                                    let motionActive = 'display:block;top:' + el.offsetTop + 'px;height:' + el.offsetHeight + 'px'
                                    cutto.setAttribute('motion-enter', motionActive)
                                    cutto.style = initStyle + motionActive
                                    setTimeout(() => {
                                        cutto.style = initStyle + 'display:block;top:0;height:100%'
                                    }, 30)
                                    setTimeout(() => {
                                        cutto.style.overflowY = 'auto'
                                    }, 200)
                                } else {
                                    cutto.scrollTop = 0
                                    cutto.style = initStyle + cutto.getAttribute('motion-enter')
                                    setTimeout(() => {
                                        cutto.style.opacity = 0
                                        setTimeout(() => {
                                            cutto.style = initStyle
                                        }, 200)
                                    }, 200)
                                }
                            })
                        },
                        inserted(el, binding) {
                            el.parentNode.style.position = 'relative'
                            document.getElementById(binding.arg).style = `
                                display:none;
                                position:absolute;
                                left:0;
                                right:0;
                                height:0;
                                z-index:1;
                                transition:all 200ms;
                                overflow:hidden;`
                        }
                    }
                </code></pre>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <p>全局使用</p>
                <pre><code class="language-js">
                    // main.js
                    import Vue from 'vue'
                    import motion from './plugins/motion'
                    
                    Vue.directive('motion', motion)
                </code></pre>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import prism from 'prismjs'
import childMotion from '../../components/bulb/childMotion'

export default {
    name: 'Motion',
    components: {
        childMotion
    },
    data() {
        return {
            items: [{
                header: '今天'
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                title: '这个周末早午餐？',
                subtitle: "<span class='text--primary'>阿里·康纳斯</span> &mdash; 这个周末我要去你家附近办事。你想出去玩吗?",
            }, {
                divider: true, inset: true
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                title: '夏季烧烤',
                subtitle: "<span class='text--primary'>致亚历克斯、斯科特和詹妮弗</span> &mdash; 我希望我能来，但这个周末我不在城里。",
            }, {
                divider: true, inset: true
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                title: '是的 是的',
                subtitle: "<span class='text--primary'>桑德拉·亚当斯</span> &mdash; 您对巴黎有建议吗？你去过吗",
            }, {
                divider: true, inset: true
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                title: '生日礼物',
                subtitle: "<span class='text--primary'>特雷弗·汉森</span> &mdash; 你知道我们应该给海蒂买什么生日礼物吗?",
            }, {
                divider: true, inset: true
            }, {
                avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                title: '尝试食谱',
                subtitle: "<span class='text--primary'>布里塔·霍尔特</span> &mdash; 我们应该吃这个:磨碎的、南瓜、玉米和墨西哥卷饼。",
            }],
            tab: null,
            toggle: true,   // 转场状态
            index: 0,
            code: `<v-card width="360" tile>
                <v-system-bar color="#5013dd" dark>
                    <v-spacer></v-spacer>
                    <v-icon>mdi-square</v-icon>
                    <v-icon>mdi-circle</v-icon>
                    <v-icon>mdi-wifi-strength-4</v-icon>
                </v-system-bar>
                <v-app-bar height="56" color="#6716f7" style="position:relative; z-index:2" dark>
                    <v-btn v-motion:cutto="false" @click="toggle=true" icon>
                        <v-scale-transition origin="center center" leave-absolute>
                            <v-icon v-show="toggle">mdi-menu</v-icon>
                        </v-scale-transition>
                        <v-scale-transition origin="center center" leave-absolute>
                            <v-icon v-show="!toggle">mdi-arrow-left</v-icon>
                        </v-scale-transition>
                    </v-btn>
                    <v-toolbar-title>收件箱</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-scale-transition origin="center center" hide-on-leave>
                        <v-btn v-show="!toggle" icon><v-icon>mdi-delete</v-icon></v-btn>
                    </v-scale-transition>
                    <v-scale-transition origin="center center" hide-on-leave>
                        <v-btn v-show="!toggle" icon><v-icon>mdi-email</v-icon></v-btn>
                    </v-scale-transition>
                    <v-scale-transition origin="center center" hide-on-leave>
                        <v-btn v-show="toggle" icon><v-icon>mdi-magnify</v-icon></v-btn>
                    </v-scale-transition>
                    <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
                </v-app-bar>
                <v-list two-line tile>
                    <template v-for="(item, index) in items">
                        <v-subheader
                            v-if="item.header"
                            :key="item.header"
                            v-text="item.header"
                        ></v-subheader>
                        <v-divider
                            v-else-if="item.divider"
                            :key="index"
                            :inset="item.inset"
                        ></v-divider>
                        <v-list-item
                            v-else
                            :key="item.title"
                            v-motion:cutto="true"
                            @click="motionEnter(index)"
                        >
                            <v-list-item-avatar>
                                <v-img :src="item.avatar"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>
                                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </template>
                    <v-overlay :value="!toggle" opacity="0.3" z-index="1" absolute></v-overlay>
                    <childMotion id="cutto" :index="index" :class="toggle?'':'close-mt'" />
                </v-list>
            </v-card>`
        }
    },
    mounted() {
        prism.highlightAll()
    },
    methods: {
        motionEnter(index) {
            setTimeout(() => {
                this.toggle = false
            }, 30);
            this.index = index
        }
    }
}
</script>

<style lang="scss">
#cutto {
    .v-card {
        transition: margin 200ms;
        margin-top: -77px;
    }
    &.close-mt .v-card {
        margin-top: 0;
    }
}
</style>