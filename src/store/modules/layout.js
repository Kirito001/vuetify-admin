import router from '../../router'

const state = {
    drawer: true,
    setting: false,
    tabs: [{
        name: '首页',
        href: '/home'
    }]
}

const getters = {
    drawer: state => state.drawer,
    setting: state => state.setting,
    tabs: state => state.tabs
}

const actions = {
    async updateDrawer({ commit }) {
        commit('setDrawer')
    },
    async updateSetting({ commit }) {
        commit('setSetting')
    },
    async updateTabs({ commit }, params) {
        commit('setTabs', params)
    },
    async closeTab({ commit }, index) {
        commit('closeTab', index)
    },
    async closeOther({ commit }, route) {
        commit('closeOther', route)
    },
    async closeAll({ commit }) {
        commit('closeAll')
    }
}

const mutations = {
    setDrawer(state) {
        state.drawer = !state.drawer
    },
    setSetting(state) {
        state.setting = !state.setting
    },
    setTabs(state, params) {
        let isCover = state.tabs.some((val) => {    // 查找tabs里面是否已经包含该路由
            return val.name == params.name
        });
        !isCover && params.href !== '/login' && state.tabs.push(params)
    },
    closeTab(state, index) {   // 关闭当前tab
        state.tabs.splice(index, 1)
        router.push({ path: state.tabs[state.tabs.length - 1].href })
    },
    closeOther(state, index) {  // 关闭其他tab
        let obj = state.tabs[index]
        state.tabs = [{
            name: '首页',
            href: '/home'
        }]
        state.tabs.push(obj)    // 切换到当前所选的tab
    },
    closeAll(state) {   // 关闭所有tab
        state.tabs = []
        router.push({ path: '/home' })  // 切换到首页
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}