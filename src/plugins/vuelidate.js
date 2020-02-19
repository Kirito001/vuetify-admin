// 自定义验证规则
import { helpers } from 'vuelidate/lib/validators'

const phone = helpers.regex('phone', /^1[3456789]\d{9}$/)

const password = helpers.regex('password', /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/)

export { phone, password }