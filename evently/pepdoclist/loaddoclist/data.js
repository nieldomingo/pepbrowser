function (data) {
  var l = [];
  for (var i=0; i < data.rows.length; i++) {
    l.push({'title': data.rows[i].value['title'], 'num': data.rows[i].value['num']});
  }
  return {'doclist': l};
};
