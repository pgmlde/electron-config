'use strict';
const electron = require('electron');
const Conf = require('conf');

class ElectronConfig extends Conf {
	constructor(opts) {
		opts = Object.assign({
			name: 'config',
			extension: 'json'
		}, opts);
		opts.cwd = (electron.app || electron.remote.app).getPath('userData');
		opts.configName = opts.name;
		opts.configExtension = opts.extension;
		delete opts.name;
		delete opts.extension;
		super(opts);
	}
}

module.exports = ElectronConfig;
