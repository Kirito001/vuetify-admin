<template>
    <v-app>
        <v-app-bar color="accent" elevation="0" app dark>
            <v-toolbar-title>
                <v-avatar tile>
                    <v-icon>mdi-android-auto</v-icon>
                </v-avatar> FirebirdCRE-Admin
            </v-toolbar-title>
        </v-app-bar>
        <v-content class="accent">
            <v-container fill-height fluid>
                <v-layout align-center justify-center>
                    <v-form>
                        <v-card
                            max-width="100%"
                            color="transparent"
                            width="320"
                            align-self-center
                            flat
                            dark
                        >
                            <v-text-field
                                label="账号"
                                v-model="account"
                                :error-messages="accountErrors"
                                filled
                            ></v-text-field>
                            <v-text-field
                                :type="showPW?'text':'password'"
                                label="密码"
                                v-model="password"
                                :append-icon="showPW?'mdi-eye':'mdi-eye-off'"
                                :error-messages="passwordErrors"
                                filled
                                @click:append="showPW=!showPW"
                            ></v-text-field>
                            <v-card-actions class="px-0">
                                <v-btn
                                    color="secondary"
                                    depressed
                                    block
                                    large
                                    :loading="loading"
                                    @click="submit"
                                >登录</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-form>
                </v-layout>
            </v-container>
        </v-content>
        <v-snackbar
            :color="snackbar.color"
            v-model="snackbar.show"
            class="mt-12"
            absolute
            top
        >
            {{ snackbar.text }}
            <v-btn text @click="snackbar.show=false">关闭</v-btn>
		</v-snackbar>
    </v-app>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    data() {
        return {
            account: '',    // 账号
            password: '',   // 密码
            showPW: false,  // 是否显示密码
            loading: false,  // 登录中
            snackbar: {
                show: false,
                color: 'grey darken-4',
                text: ''
            }
        }
    },
    mixins: [validationMixin],
    validations: {
        account: { required, maxLength: maxLength(30) },
        password: { required }
    },
    computed: {
        accountErrors() {
            const err = [];
            if (!this.$v.account.$dirty) return err;
            !this.$v.account.required && err.push('账号还没填呢')
            !this.$v.account.maxLength && err.push('账号太长了')
            return err
        },
        passwordErrors() {
            const err = [];
            if(!this.$v.password.$dirty) return err;
            !this.$v.password.required && err.push('密码还没填呢')
            return err
        }
    },
    methods: {
        submit() {
            this.$v.$touch()
            if(!this.$v.$invalid) {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.$router.push('/home')
                }, 1500);
            }
        }
    }
}
</script>