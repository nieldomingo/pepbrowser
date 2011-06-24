function(doc) {
  if (doc.type == 'pep') {
    emit([doc.category, doc.status], 1);
  }
}