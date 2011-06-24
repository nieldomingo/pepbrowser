function (data) {
  var html = data.rows[0].value['html'];
  // remove internal links
  html = html.replace(/href="(?!http:)[^"]+"/g, '');
  var title = data.rows[0].value['title'];
  var pepnum = data.rows[0].value['num'];
  return {'html': html, 'title': title, 'pepnum': pepnum};
};
