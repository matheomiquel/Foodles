import {
    count
} from "./exam.js"


//count("???", 3);

import assert from "assert"
it('count word', (resolve) => {
    assert.strictEqual(count("baz bar foo foo zblah zblah zblah baz toto bar", 3), `zblah : 3\nbar : 2\nbaz : 2\n`);
    resolve();
});
