'use strict';

const path = require('path');

module.exports = {
    name: 'button',
    handle: 'button',
    label: 'Button',
    title: 'Button',
    order: 1000000,
    isHidden: false,
    alias: null,
    isEntity: true,
    isComponent: true,
    baseHandle: 'button',
    notes: null,
    tags: [ undefined ],
    isCollated: false,
    preview: null,
    display: {},
    viewPath: path.join(__dirname, '../components/button/button.hbs'),
    resources: { assets: [] },
};
