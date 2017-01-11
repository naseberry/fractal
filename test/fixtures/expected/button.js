'use strict';

module.exports = {
    name: 'button',
    label: 'Button',
    files: [

    ],
    context: {
        buttonText: 'A button',
        class: 'Button'
    },
    variants: [{
        name: 'red',
        context: {
            buttonText: 'A red button',
            class: 'Button Button--red'
        }
    }]
};
