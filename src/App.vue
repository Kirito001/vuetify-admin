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

// 去除Google游览器自动填充账号出现的背景
input {
	background-color: transparent !important;
}
input:-webkit-autofill {
	-webkit-transition: background-color 1s ease-in-out 6000s;
	-webkit-text-fill-color: #fff !important;
}
</style>