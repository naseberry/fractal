'use strict';

const path = require('path');

module.exports = {
    name: 'input',
    handle: 'input',
    label: 'Input',
    title: 'Input',
    order: 1000000,
    isHidden: false,
    alias: null,
    isEntity: true,
    isComponent: true,
    baseHandle: 'input',
    notes: null,
    tags: [ undefined ],
    isCollated: false,
    preview: null,
    display: {},
    viewPath: path.join(__dirname, '../components/input/input.hbs'),
    resources: { assets: [] },
};
