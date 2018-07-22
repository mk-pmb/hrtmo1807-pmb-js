
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
