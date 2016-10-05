'use strict';
const electron = require('electron');
const Conf = require('conf');

class ElectronConfig extends Conf {
	constructor(opts) {
		opts = Object.assign({
			name: 'config',
			prefix: 'json'
		}, opts);
		opts.cwd = (electron.app || electron.remote.app).getPath('userData');
		opts.configName = opts.name;
		opts.configPrefix = opts.prefix;
		delete opts.name;
		delete opts.prefix;
		super(opts);
	}
}

module.exports = ElectronConfig;
