<template>
    <v-container class="pa-md-4 pa-sm-3 pa-2" fluid>
        <v-row justify="center" no-gutters>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <v-alert
                    color="secondary"
                    class="my-4 pl-6"
                    border="left"
                    icon="mdi-triangle"
                    colored-border
                    prominent
                    text
                    tile
                >
                    <div class="title secondary--text">Prism</div> 
                    <span>网页代码高亮插件，支持205种语言的高亮，自带8种主题皮肤，Let's go ~</span>
                </v-alert>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <p class="title">Prism 安装</p>
                <pre data-language="npm"><code class="language-js">
                    $ npm install prismjs
                </code></pre>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <p>然后在 <code>.vue</code> 文件使用它；本来是想全局安装的，但是并没有生效，知道怎么全局声明的小伙伴可以告诉我 <v-icon size="20">mdi-emoticon-outline</v-icon></p>
                <pre data-language="js"><code class="language-js">
                    &lt;sctipt&gt;
                    import Prism from 'prismjs';
                    export default {
                        data() {
                            return {}
                        },
                        mounted() { // 需要执行highlightAll()才会加载
                            prism.highlightAll()
                        }
                    }
                    &lt;/sctipt&gt;
                </code></pre>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <p>prism 支持的语言种类太多了，有很多是你不会使用到的，推荐你使用 Babel 插件 <code>babel-plugin-prismjs</code> 管理 prismjs，你可以随意的选择加载需要使用的语言</p>
                <p class="title">babel-plugin-prismjs 安装</p>
                <pre data-language="npm"><code class="language-js">
                    npm install babel-plugin-prismjs -D
                </code></pre>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <p>theme 可选值：<br/>
                    <ul>
                        <li><code>default</code></li>
                        <li><code>dark</code></li>
                        <li><code>funky</code></li>
                        <li><code>okaidia</code></li>
                        <li><code>twilight</code></li>
                        <li><code>coy</code></li>
                        <li><code>solarized</code></li>
                        <li><code>tomorrow</code></li>
                    </ul>
                </p>
                <p>plugins 可选值：<br/>
                    <ul>
                        <li><code>line-numbers</code> 代码显示行数。</li>
                        <li><code>show-language</code> 在代码块中显示语言标签（内联代码不显示标签）</li>
                        <li><code>normalize-whitespace</code> 自动排版格式化，相当好用，解救强迫症</li>
                    </ul>
                </p>
                <p>更多配置请转到：
                    <a class="mr-4 secondary--text" href="https://prismjs.com/#plugins" target="_blank">prism-plugins<v-icon color="secondary" size="16">mdi-open-in-new</v-icon></a>
                    <a class="secondary--text" href="https://prismjs.com/#supported-languages" target="_blank">prism-languages<v-icon color="secondary" size="16">mdi-open-in-new</v-icon></a>
                </p>
                <p>在 babel.config.js 文件中配置</p>
                <pre data-language="js"><code class="language-js">
                    // babel.config.js
                    plugins: [
                        ["prismjs", {
                            "languages": ["javascript", "css", "html", "markup"],
                            "plugins": ["line-numbers", "show-language", "normalize-whitespace"],
                            "theme": "tomorrow",
                            "css": true
                        }]
                    ]
                </code></pre>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                <p>完成以上步骤，接下来你可以在HTML中愉快的使用代码块了，vuetify 自己处理过 <code>&lt;code&gt;</code> 标签，代码块会有阴影和第一行会有一点点的缩进，如果你介意的话，可以加入以下样式</p>
                <pre class="line-numbers"><code class="language-css">
                    /* App.vue */
                    // 清除vuetify的默认pre下的code伪元素和阴影
                    .v-application pre>code {
                        box-shadow: none;
                        &::before,
                        &::after {
                            content: none;
                        }
                    }
                </code></pre>
            </v-col>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-2">
                如果你喜欢 vuetify-admin 或者这正是你需要的，可以给颗心吗！或者想给些建议
                <v-icon>mdi-git</v-icon>
                <a class="mr-4 secondary--text" href="https://github.com/Kirito001/vuetify-admin" target="_blank">vuetify-admin</a>你的鼓励就是我的动力！<br/><br/><br/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import prism from 'prismjs'

export default {
    name: 'Prism',
    mounted() {
        prism.highlightAll()
    }
}
</script>