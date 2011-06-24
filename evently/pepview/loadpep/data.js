function (data) {
  var html = data.rows[0].value['html'];
  // remove internal links
  html = html.replace(/href="(?!http:)[^"]+"/g, '');
  return {'html': html};
};
