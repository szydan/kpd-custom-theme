module.exports = function (kibana) {
	return new kibana.Plugin({
		uiExports: {
			hacks: [
				'plugins/kpd_custom_theme/hacks',
				'plugins/kpd_custom_theme/css/style.css'
			]
		}
	})
}