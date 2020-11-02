// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview.prototype.getfloat64
description: >
  DataView.prototype.getFloat64.length is 1.
info: |
  DataView.prototype.getFloat64 ( byteOffset [ , littleEndian ] )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, has a length
    property whose value is an integer. Unless otherwise specified, this
    value is equal to the largest number of named arguments shown in the
    subclause headings for the function description. Optional parameters
    (which are indicated with brackets: [ ]) or rest parameters (which
    are shown using the form «...name») are not included in the default
    argument count.

    Unless otherwise specified, the length property of a built-in Function
    object has the attributes { [[Writable]]: false, [[Enumerable]]: false,
    [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [DataView]
---*/

assert.sameValue(DataView.prototype.getFloat64.length, 1);

verifyNotEnumerable(DataView.prototype.getFloat64, "length");
verifyNotWritable(DataView.prototype.getFloat64, "length");
verifyConfigurable(DataView.prototype.getFloat64, "length");
