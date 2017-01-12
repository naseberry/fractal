'use strict';

var variants = [
    { type: 'h1', variant: 'main' },
    { type: 'h1', variant: 'hero' },
    { type: 'h2', variant: 'body' },
    { type: 'h2', variant: 'block' },
    { type: 'h3', variant: 'tertiary' },
    { type: 'h4', variant: 'supporting' },
    { type: 'h4', variant: 'smallQuote' },
    { type: 'h4', variant: 'sub' }
];

variants = variants.map(function(variant) {
    return {
        name: variant.variant,
        context: {
            variant: variant.variant,
            tag: variant.type,
            text: 'Headline text'
        }
    };
});

module.exports = {
    status: 'ready',
    collated: true,
    default: 'main',
    context: {
        variant: 'main',
        text: "An exclusive event for association executives at IMEX"
    },
    variants: variants
};
