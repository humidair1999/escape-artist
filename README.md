# escape-artist

It escapes and unescapes HTML entities in strings! Simple, really.

Just require escape-artist after installing via npm:

`var escapeArtist = require('escape-artist');`

Then use the following functions:

### `escape()`

Escape HTML entities in a string:

`escapeArtist.escape('here's a sample string & stuff!');`

### `unescape()`

Unescape HTML entities in a string:

`escapeArtist.unescape('here&#39;s&#32;a&#32;sample&#32;string&#32;&&#32;stuff&#33;');`