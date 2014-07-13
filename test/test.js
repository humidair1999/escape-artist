var assert = require('assert'),
    escapeArtist = require('../index');

describe('.escape()', function() {
  it('converts & into &amp;', function() {
    assert.equal(escapeArtist.escape('&'), '&amp;');
  });

  it('converts space into &#32;', function() {
    assert.equal(escapeArtist.escape(' '), '&#32;');
  });

  it('converts ! into &#33;', function() {
    assert.equal(escapeArtist.escape('!'), '&#33;');
  });

  it('converts # into &#35;', function() {
    assert.equal(escapeArtist.escape('#'), '&#35;');
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

  it('converts &#32; into space', function() {
    assert.equal(escapeArtist.unescape('&#32;'), ' ');
  });

  it('converts &#33; into !', function() {
    assert.equal(escapeArtist.unescape('&#33;'), '!');
  });

  it('converts &#35; into #', function() {
    assert.equal(escapeArtist.unescape('&#35;'), '#');
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