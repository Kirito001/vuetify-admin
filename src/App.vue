<template>
	<router-view></router-view>
</template>

<script>
export default {
	name: "App",
	data: () => ({})
};
</script>

<style lang="scss">
html {
	height: 100%;
	overflow-y: auto !important;
}
.v-bottom-black-bar {	// 适应底部小黑条
    margin-bottom: constant(safe-area-inset-bottom);
	margin-bottom: env(safe-area-inset-bottom);
}

// 去除Google游览器自动填充账号出现的背景
input {
	background-color: transparent !important;
}
input:-webkit-autofill {
	-webkit-transition: background-color 1s ease-in-out 6000s;
	-webkit-text-fill-color: #fff !important;
}

// 清除vuetify的默认pre下的code伪元素和阴影
.v-application pre>code {
	box-shadow: none;
	&::before,
	&::after {
		content: none;
	}
}
pre[class*="language-"] {
	margin: auto 0 !important;
}
</style>