// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.calendar.prototype.month
description: Throw a TypeError if the receiver is invalid
features: [Symbol, Temporal]
---*/

const month = Temporal.Calendar.prototype.month;

assert.sameValue(typeof month, "function");

assert.throws(TypeError, () => month.call(undefined), "undefined");
assert.throws(TypeError, () => month.call(null), "null");
assert.throws(TypeError, () => month.call(true), "true");
assert.throws(TypeError, () => month.call(""), "empty string");
assert.throws(TypeError, () => month.call(Symbol()), "symbol");
assert.throws(TypeError, () => month.call(1), "1");
assert.throws(TypeError, () => month.call({}), "plain object");
assert.throws(TypeError, () => month.call(Temporal.Calendar), "Temporal.Calendar");
assert.throws(TypeError, () => month.call(Temporal.Calendar.prototype), "Temporal.Calendar.prototype");
