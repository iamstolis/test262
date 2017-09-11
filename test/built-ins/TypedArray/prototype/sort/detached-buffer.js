// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-%typedarray%.prototype.sort
description: Throws a TypeError if this has a detached buffer
info: >
  22.2.3.26 %TypedArray%.prototype.sort ( comparefn )

  1. Let obj be the this value.
  2. Let buffer be ? ValidateTypedArray(obj).

  22.2.3.5.1 Runtime Semantics: ValidateTypedArray ( O )

  ...
  5. If IsDetachedBuffer(buffer) is true, throw a TypeError exception.
  ...
includes: [testTypedArray.js, detachArrayBuffer.js]
features: [TypedArray]
---*/

var comparefn = function() {
  throw new Test262Error();
};

testWithTypedArrayConstructors(function(TA) {
  var sample = new TA(1);
  $DETACHBUFFER(sample.buffer);
  assert.throws(TypeError, function() {
    sample.sort(comparefn);
  });
});
