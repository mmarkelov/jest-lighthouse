const lighthouse = require('lighthouse');

const DEFAULT_LIGHTHOUSE_OPTIONS = {
	output: 'json',
	logLevel: 'info',
}

module.exports = {
	async getLighthouseReport(url, port, options = {}) {
		return await lighthouse(url, {
			port,
			...DEFAULT_LIGHTHOUSE_OPTIONS,
			...options
		});
	},
}
