// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-dataview-buffer-byteoffset-bytelength
description: >
  Return abrupt from ToNumber(byteOffset)
info: |
  24.2.2.1 DataView (buffer, byteOffset, byteLength )

  ...
  4. Let numberOffset be ? ToNumber(byteOffset).
  ...
features: [ArrayBuffer, DataView]
---*/

var obj = {
  valueOf: function() {
    throw new Test262Error();
  }
};

var ab = new ArrayBuffer(0);

assert.throws(Test262Error, function() {
  new DataView(ab, obj);
});
