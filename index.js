module.exports = function (kibana) {
	return new kibana.Plugin({
		version: '0.0.1',
		uiExports: {
			hacks: [
				'plugins/kpd_custom_theme/hacks'
			]
		}
	})
}