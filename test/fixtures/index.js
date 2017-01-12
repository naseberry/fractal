'use strict';

const fs = require('fs');
const path = require('path');

function getFiles(type) {
    return fs.readdirSync(path.join(__dirname, type, 'expected'));
}

function getBaseNames(type) {
    return getFiles(type).map(file => path.basename(file, path.extname(file)));
}

function getTypes() {
	return fs.readdirSync(__dirname).filter(function(file) {
    return fs.statSync(path.join(__dirname, file)).isDirectory();
  });
}

module.exports = {
    getFiles,
    getTypes,
    getBaseNames
}
