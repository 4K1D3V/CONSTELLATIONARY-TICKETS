const { StdinCommand } = require('@eartharoid/dbf');
const { version } = require('../../package.json');

module.exports = class extends StdinCommand {
	constructor(client, options) {
		super(client, {
			...options,
			id: 'version',
		});
	}
};
