function (data) {
  var l = [];
  for (var i=0; i < data.rows.length; i++) {
    l.push({'category': data.rows[i].key[0], 'status': data.rows[i].key[1], 'count': data.rows[i].value});
  }
  return {'statuslist': l};
};