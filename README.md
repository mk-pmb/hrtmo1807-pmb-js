
<!--#echo json="package.json" key="name" underline="=" -->
hrtmo1807-pmb
=============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Human-readable timeouts (callback-timeout-flexible + timestring-notsep)
<!--/#echo -->



API
---

This module exports one function:

### hrtmo(opts)

`opts` is an options object that supports these keys:

* `limit` (required): Either `false` to immediately return `false`,
  or a timespan (as string).
* `cb`: Your callback, for delivery of the TimeoutError if triggered.
* all other options supported by `callback-timeout-flexible`
  that aren't about timespans.

### Quick recap from CTF

The result is __not__ an opaque timer ID or timer object, but instead
a callback function that can be used to decide the outcome early.

`cb` will carry a `timeout` property that holds the timeout control object
(TCO), which in turn has methods like `.renew()` and `.abandon()`.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
