const tap = require('tap');

const transform = require('./transform');

tap.equal('HELLO', transform('hello'));
