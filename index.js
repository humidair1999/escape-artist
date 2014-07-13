module.exports = {
  escape: function(html) {
    return String(html)
      .replace(/#/g, '&#35;')
      .replace(/\s/g, '&#32;')
      .replace(/!/g, '&#33;')
      .replace(/\$/g, '&#36;')
      .replace(/%/g, '&#37;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;')
      .replace(/\(/g, '&#40;')
      .replace(/\)/g, '&#41;')
      .replace(/\*/g, '&#42;')
      .replace(/\+/g, '&#43;')
      .replace(/,/g, '&#44;')
      .replace(/-/g, '&#45;')
      .replace(/\./g, '&#46;')
      .replace(/\//g, '&#47;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  },
  unescape: function(html) {
    return String(html)
      .replace(/&#35;/g, '#')
      .replace(/&#32;/g, ' ')
      .replace(/&#33;/g, '!')
      .replace(/&#36;/g, '$')
      .replace(/&#37;/g, '%')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, '\'')
      .replace(/&#40;/g, '(')
      .replace(/&#41;/g, ')')
      .replace(/&#42;/g, '*')
      .replace(/&#43;/g, '+')
      .replace(/&#44;/g, ',')
      .replace(/&#45;/g, '-')
      .replace(/&#46;/g, '.')
      .replace(/&#47;/g, '/')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
};