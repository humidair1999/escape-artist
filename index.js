module.exports = {
  escape: function(html) {
    return String(html)
      .replace(/&/g, '&amp;')
      .replace(/#/g, '&#35;')
      .replace(/\s/g, '&#32;')
      .replace(/!/g, '&#33;')
      .replace(/\$/g, '&#36;')
      .replace(/%/g, '&#37;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },
  unescape: function(html) {
    return String(html)
      .replace(/&amp;/g, '&')
      .replace(/&#35;/g, '#')
      .replace(/&#32;/g, ' ')
      .replace(/&#33;/g, '!')
      .replace(/&#36;/g, '$')
      .replace(/&#37;/g, '%')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
};