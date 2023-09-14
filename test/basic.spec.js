import { add } from "../src/index";
import { strict as assert } from 'assert';

describe("basic test", () => {
  it("add correctly", () => {
    assert.equal(add(1, 2), 3);
  })
})
