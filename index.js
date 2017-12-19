'use strict';
const path = require('path');
const electron = require('electron');
const Conf = require('conf');

class ElectronStore extends Conf {
	constructor(opts) {
		const defaultCwd = (electron.app || electron.remote.app).getPath('userData');

		opts = Object.assign({
			name: 'config',
			extension: 'json'
		}, opts);

		if (opts.cwd) {
			opts.cwd = path.isAbsolute(opts.cwd) ? opts.cwd : path.join(defaultCwd, opts.cwd);
		} else {
			opts.cwd = defaultCwd;
		}

		opts.configName = opts.name;
		opts.configExtension = opts.extension;
		delete opts.name;
		delete opts.extension;
		super(opts);
	}

	openInEditor() {
		electron.shell.openItem(this.path);
	}
}

module.exports = ElectronStore;
