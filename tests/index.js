/* global chai */

import helloWorld from '../src/index';
// console.log(helloWorld);

const expect = chai.expect;

describe('helloWorld', () => {
    it('is a function', () => {
        expect(helloWorld).to.be.a('function');
    });

    it('returns "Hello world!"', () => {
        const result = helloWorld();
        expect(result).to.equal('Hello world!');
    });
});
