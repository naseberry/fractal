'use strict';

const path = require('path');

module.exports = {
    name: 'button',
    handle: 'button',
    label: 'Button',
    title: 'Button',
    order: 1000000,    
    isComponent: true,
    baseHandle: 'button',    
    viewPath: path.join(__dirname, '../components/button/button.hbs'),
};
