var assert = require('assert'),
    escapeArtist = require('../index');

describe('.escape()', function() {
  it('converts space into &#32;', function() {
    assert.equal(escapeArtist.escape(' '), '&#32;');
  });

  it('converts ! into &#33;', function() {
    assert.equal(escapeArtist.escape('!'), '&#33;');
  });

  it('converts # into &#35;', function() {
    assert.equal(escapeArtist.escape('#'), '&#35;');
  });

  it('converts $ into &#36;', function() {
    assert.equal(escapeArtist.escape('$'), '&#36;');
  });

  it('converts % into &#37;', function() {
    assert.equal(escapeArtist.escape('%'), '&#37;');
  });

  it('converts " into &quot;', function() {
    assert.equal(escapeArtist.escape('"'), '&quot;');
  });

  it('converts \' into &#39;', function() {
    assert.equal(escapeArtist.escape('\''), '&#39;');
  });

  it('converts ( into &#40;', function() {
    assert.equal(escapeArtist.escape('('), '&#40;');
  });

  it('converts ) into &#41;', function() {
    assert.equal(escapeArtist.escape(')'), '&#41;');
  });

  it('converts * into &#42;', function() {
    assert.equal(escapeArtist.escape('*'), '&#42;');
  });

  it('converts + into &#43;', function() {
    assert.equal(escapeArtist.escape('+'), '&#43;');
  });

  it('converts , into &#44;', function() {
    assert.equal(escapeArtist.escape(','), '&#44;');
  });

  it('converts - into &#45;', function() {
    assert.equal(escapeArtist.escape('-'), '&#45;');
  });

  it('converts . into &#46;', function() {
    assert.equal(escapeArtist.escape('.'), '&#46;');
  });

  it('converts / into &#47;', function() {
    assert.equal(escapeArtist.escape('/'), '&#47;');
  });

  it('converts = into &#61;', function() {
    assert.equal(escapeArtist.escape('='), '&#61;');
  });

  it('converts ? into &#63;', function() {
    assert.equal(escapeArtist.escape('?'), '&#63;');
  });

  it('converts < into &lt;', function() {
    assert.equal(escapeArtist.escape('<'), '&lt;');
  });

  it('converts > into &gt;', function() {
    assert.equal(escapeArtist.escape('>'), '&gt;');
  });
});

describe('.unescape()', function() {
  it('converts &#32; into space', function() {
    assert.equal(escapeArtist.unescape('&#32;'), ' ');
  });

  it('converts &#33; into !', function() {
    assert.equal(escapeArtist.unescape('&#33;'), '!');
  });

  it('converts &#35; into #', function() {
    assert.equal(escapeArtist.unescape('&#35;'), '#');
  });

  it('converts &#36; into $', function() {
    assert.equal(escapeArtist.unescape('&#36;'), '$');
  });

  it('converts &#37; into %', function() {
    assert.equal(escapeArtist.unescape('&#37;'), '%');
  });

  it('converts &quot; into "', function() {
    assert.equal(escapeArtist.unescape('&quot;'), '"');
  });

  it('converts &#39; into \'', function() {
    assert.equal(escapeArtist.unescape('&#39;'), '\'');
  });

  it('converts &#40; into (', function() {
    assert.equal(escapeArtist.unescape('&#40;'), '(');
  });

  it('converts &#41; into )', function() {
    assert.equal(escapeArtist.unescape('&#41;'), ')');
  });

  it('converts &#42; into *', function() {
    assert.equal(escapeArtist.unescape('&#42;'), '*');
  });

  it('converts &#43; into +', function() {
    assert.equal(escapeArtist.unescape('&#43;'), '+');
  });

  it('converts &#44; into ,', function() {
    assert.equal(escapeArtist.unescape('&#44;'), ',');
  });

  it('converts &#45; into -', function() {
    assert.equal(escapeArtist.unescape('&#45;'), '-');
  });

  it('converts &#46; into .', function() {
    assert.equal(escapeArtist.unescape('&#46;'), '.');
  });

  it('converts &#47; into /', function() {
    assert.equal(escapeArtist.unescape('&#47;'), '/');
  });

  it('converts &#61; into /', function() {
    assert.equal(escapeArtist.unescape('&#61;'), '=');
  });

  it('converts &#63; into ?', function() {
    assert.equal(escapeArtist.unescape('&#63;'), '?');
  });

  it('converts &lt; into <', function() {
    assert.equal(escapeArtist.unescape('&lt;'), '<');
  });

  it('converts &gt; into >', function() {
    assert.equal(escapeArtist.unescape('&gt;'), '>');
  });
});