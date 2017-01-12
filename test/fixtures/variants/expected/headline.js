'use strict';

const path = require('path');

module.exports = {
    name: 'headline',
    handle: 'headline',
    isCollated: true,
    label: 'Headline',
    title: 'Headline',
    baseHandle: 'headline',
    viewPath: path.join(__dirname, '../components/headline/headline.hbs'),
    variants: {
        name: 'GGeadline-variants',
        handle: 'headline-variants',
        label: 'Headline Variants',
        title: 'Headline Variants',
        order: 10000,
        alias: null,
        isCollection: true,
        items: [{
            name: 'main',
            handle: 'headline--main',
            label: 'Main',
            title: 'Headline: Main',
            order: 1,
            isHidden: false,
            alias: 'headline',
            isEntity: true,
            isVariant: true,
            baseHandle: 'headline',
            
            status: {
                label: 'Ready',
                description: 'Ready to implement.',
                color: '#29CC29'
            },
            
            isDefault: true,
            viewPath: path.join(__dirname,'../components/headline/headline.hbs'),
            
            context: { variant: 'main', tag: 'h1', text: 'Headline text' },
            
            content: '<{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}} class="Headline Headline--{{variant}}">{{ text }}</{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}}>\n'
        }, {
            name: 'hero',
            handle: 'headline--hero',
            label: 'Hero',
            title: 'Headline: Hero',
            order: 2,
            isHidden: false,
            alias: null,
            isEntity: true,
            isVariant: true,
            baseHandle: 'headline',
            
            status: {
                label: 'Ready',
                description: 'Ready to implement.',
                color: '#29CC29'
            },
            
            isDefault: false,
            viewPath: path.join(__dirname,'../components/headline/headline.hbs'),
            
            context: { variant: 'hero', tag: 'h1', text: 'Headline text' },
            
            content: '<{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}} class="Headline Headline--{{variant}}">{{ text }}</{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}}>\n'
        }, {
            name: 'body',
            handle: 'headline--body',
            label: 'Body',
            title: 'Headline: Body',
            order: 3,
            isHidden: false,
            alias: null,
            isEntity: true,
            isVariant: true,
            baseHandle: 'headline',
            
            status: {
                label: 'Ready',
                description: 'Ready to implement.',
                color: '#29CC29'
            },
            
            isDefault: false,
            viewPath: path.join(__dirname,'../components/headline/headline.hbs'),
            
            context: { variant: 'body', tag: 'h2', text: 'Headline text' },
            
            content: '<{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}} class="Headline Headline--{{variant}}">{{ text }}</{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}}>\n'
        }, {
            name: 'block',
            handle: 'headline--block',
            label: 'Block',
            title: 'Headline: Block',
            order: 4,
            isHidden: false,
            alias: null,
            isEntity: true,
            isVariant: true,
            baseHandle: 'headline',
            
            status: {
                label: 'Ready',
                description: 'Ready to implement.',
                color: '#29CC29'
            },
            
            isDefault: false,
            viewPath: path.join(__dirname,'../components/headline/headline.hbs'),
            
            context: { variant: 'block', tag: 'h2', text: 'Headline text' },
            
            content: '<{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}} class="Headline Headline--{{variant}}">{{ text }}</{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}}>\n'
        }, {
            name: 'tertiary',
            handle: 'headline--tertiary',
            label: 'Tertiary',
            title: 'Headline: Tertiary',
            order: 5,
            isHidden: false,
            alias: null,
            isEntity: true,
            isVariant: true,
            baseHandle: 'headline',
            
            status: {
                label: 'Ready',
                description: 'Ready to implement.',
                color: '#29CC29'
            },
            
            isDefault: false,
            viewPath: path.join(__dirname,'../components/headline/headline.hbs'),
            
            context: { variant: 'tertiary', tag: 'h3', text: 'Headline text' },
            
            content: '<{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}} class="Headline Headline--{{variant}}">{{ text }}</{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}}>\n'
        }, {
            name: 'supporting',
            handle: 'headline--supporting',
            label: 'Supporting',
            title: 'Headline: Supporting',
            order: 6,
            isHidden: false,
            alias: null,
            isEntity
: true,
            isVariant: true,
            baseHandle: 'headline',
            
            status: {
                label: 'Ready',
                description: 'Ready to implement.',
                color: '#29CC29'
            },
            
            isDefault: false,
            viewPath: path.join(__dirname,'../components/headline/headline.hbs'),
            
            context: { variant: 'supporting', tag: 'h4', text: 'Headline text' },
            
            content: '<{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}} class="Headline Headline--{{variant}}">{{ text }}</{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}}>\n'
        }, {
            name: 'smallquote',
            handle: 'headline--smallquote',
            label: 'Smallquote',
            title: 'Headline: Smallquote',
            order: 7,
            isHidden: false,
            alias: null,
            isEntity: true,
            isVariant: true,
            baseHandle: 'headline',
            
            status: {
                label: 'Ready',
                description: 'Ready to implement.',
                color: '#29CC29'
            },
            
            isDefault: false,
            viewPath: path.join(__dirname,'../components/headline/headline.hbs'),
            
            context: { variant: 'smallQuote', tag: 'h4', text: 'Headline text' },
            
            content: '<{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}} class="Headline Headline--{{variant}}">{{ text }}</{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}}>\n'
        }, {
            name: 'sub',
            handle: 'headline--sub',
            label: 'Sub',
            title: 'Headline: Sub',
            order: 8,
            isHidden: false,
            alias: null,
            isEntity: true,
            isVariant: true,
            baseHandle: 'headline',
            
            status: {
                label: 'Ready',
                description: 'Ready to implement.',
                color: '#29CC29'
            },
            
            isDefault: false,
            viewPath: path.join(__dirname,'../components/headline/headline.hbs'),
            
            context: { variant: 'sub', tag: 'h4', text: 'Headline text' },
            
            content: '<{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}} class="Headline Headline--{{variant}}">{{ text }}</{{#if tag}}{{tag}}{{/if}}{{#unless tag}}h1{{/unless}}>\n'
        }]
    }
};
