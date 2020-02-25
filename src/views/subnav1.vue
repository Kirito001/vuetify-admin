<template>
    <v-container class="pa-md-4 pa-sm-3 pa-2" fluid>
        <v-row justify="center" no-gutters>
            <v-col cols="12" md="10" class="mb-md-4 mb-sm-3 mb-1">
                <pre data-language="js">
                    <code class="language-js">
                        // babel.config.js
                        plugins: [
                            ["prismjs", {
                                "languages": ["javascript", "css", "html", "markup"],
                                "plugins": ["line-numbers", "show-language"],
                                "theme": "coy",
                                "css": true
                            }]
                        ]
                    </code>
                </pre>
        <pre class="line-numbers"><code class="language-css">/* App.vue */
// 清除vuetify的默认pre下的code伪元素和阴影
.v-application pre>code {
    box-shadow: none;
    &::before,
    &::after {
        content: none;
    }
}</code></pre>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import prism from 'prismjs'
export default {
    name: 'Subnav1',
    data() {
        return {
            html: `// babel.config.js\nlet a = 100;`
        }
    },
    mounted() {
        prism.highlightAll()
    }
}
</script>