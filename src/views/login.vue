<template>
    <v-content>
        <v-btn
            fab
            dark
            fixed
            top
            right
            text
            @click.stop="updateSetting"
        >
            <v-icon>palette</v-icon>
        </v-btn>
        <!-- <v-btn
            fab
            dark
            large
            fixed
            top
            right
            text
        >
            <v-icon>github</v-icon>
        </v-btn> -->

        <v-container fluid fill-height>
            
            <Setting />
            <v-layout align-center justify-center>
                <v-flex xs12 sm6 md3>
                    <v-card class="elevation-8">
                        <v-toolbar flat class="pl-2 pr-2">
                            <v-avatar size="68" class="avatar">
                                <img src="../assets/logo.svg" alt="avatar">
                            </v-avatar>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" text>账号密码随便</v-btn>
                        </v-toolbar>
                        <v-card-text class="pl-4 pr-4 pt-1 pb-4">
                            <v-form ref="form" lazy-validation>
                                <v-text-field
                                    v-model="name"
                                    :rules="nameRules"
                                    type="text"
                                    placeholder="用户名"
                                    prepend-inner-icon="person"
                                ></v-text-field>
                                <v-text-field
                                    v-model="password"
                                    :rules="pwRules"
                                    placeholder=" 密码 "
                                    prepend-inner-icon="lock"
                                    :append-icon="show ? 'visibility' : 'visibility_off'"
                                    :type="show ? 'text' : 'password'"
                                    @click:append="show = !show"
                                    autocomplete="new-password"
                                ></v-text-field>
                                <v-checkbox
                                    v-model="checkbox"
                                    label="记住密码"
                                ></v-checkbox>
                                <v-btn
                                    color="primary"
                                    block
                                    dark
                                    min-height="46"
                                    @click="validate"
                                >登录</v-btn>
                            </v-form>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import { mapActions } from 'vuex'
import Setting from '../layout/setting'

export default {
    name: 'Login',
    data: () => ({
        name: '',
        password: '',
        show: false,
        checkbox: false,
        nameRules: [
            v => !!v || '用户名是必填的',
            v => (v && v.length > 7) || '用户名长度必须大于7位',
            v => (v && v.length < 16) || '用户名长度不能超过16位'
        ],
        pwRules: [
            v => !!v || '密码是必填的',
            v => (v && v.length > 7) || '密码长度必须大于7位',
            v => (v && v.length < 16) || '密码长度不能超过16位'
        ]
    }),
    methods: {
        ...mapActions(['updateSetting']),
        validate() {
            if(this.$refs.form.validate()) {
                localStorage.setItem('accessToken', 'token');
                this.$router.push({ path: '/' });
            }
        }
    },
    components: {
        Setting
    }
}
</script>

<style lang="scss" scoped>
    html{
        overflow: auto;
    }
    .v-content {
        background: url("../assets/loginBG.jpg") center center no-repeat;
        background-size: 100% auto;
    }
    .avatar {
        margin-top: -50px;
    }
</style>