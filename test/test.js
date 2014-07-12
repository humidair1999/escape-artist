var assert = require('assert'),
    escapeArtist = require('../index');

describe('.escape()', function() {
  it('converts & into &amp;', function() {
    assert.equal(escapeArtist.escape('&'), '&amp;');
  });

  it('converts " into &quot;', function() {
    assert.equal(escapeArtist.escape('"'), '&quot;');
  });

  it('converts \' into &#39;', function() {
    assert.equal(escapeArtist.escape('\''), '&#39;');
  });

  it('converts < into &lt;', function() {
    assert.equal(escapeArtist.escape('<'), '&lt;');
  });

  it('converts > into &gt;', function() {
    assert.equal(escapeArtist.escape('>'), '&gt;');
  });
});

describe('.unescape()', function() {
  it('converts &amp; into &', function() {
    assert.equal(escapeArtist.unescape('&amp;'), '&');
  });

  it('converts &quot; into "', function() {
    assert.equal(escapeArtist.unescape('&quot;'), '"');
  });

  it('converts &#39; into \'', function() {
    assert.equal(escapeArtist.unescape('&#39;'), '\'');
  });

  it('converts &lt; into <', function() {
    assert.equal(escapeArtist.unescape('&lt;'), '<');
  });

  it('converts &gt; into >', function() {
    assert.equal(escapeArtist.unescape('&gt;'), '>');
  });
});