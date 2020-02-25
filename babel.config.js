module.exports = {
	presets: [
		'@vue/cli-plugin-babel/preset'
	],
	plugins: [
		["prismjs", {
			"languages": ["javascript", "css", "html", "markup"],
			"plugins": ["line-numbers", "show-language", "normalize-whitespace"],
			"theme": "tomorrow",
			"css": true
		}]
	]
}
