function(doc) {
  if (doc.type == 'pep') {
    emit([doc.category, doc.status, parseInt(doc.num)], doc);
  }
}
