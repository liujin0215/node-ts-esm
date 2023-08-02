import { expect } from 'chai';
import { describe, it } from "mocha";
import { hello } from "./hello.js";

describe('hello', () => {
    it('hello', async () => {
        const ret = hello()
        expect(ret).to.equal('hello world');
    })
})