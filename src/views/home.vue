<template>
    <v-layout row wrap>
        <v-flex xs12>
            <Sparkline />
        </v-flex>
    </v-layout>
</template>
<script>
import Sparkline from '@/components/Sparkline'

export default {
    name: 'home',
    data() {
        return {
            carousel: [
                {
                    src: require('../assets/timg01.jpg')
                }, {
                    src: require('../assets/timg02.jpg')
                }, {
                    src: require('../assets/timg03.jpg')
                }
            ]
        }
    },
    components: {
        Sparkline
    }
}
</script>
