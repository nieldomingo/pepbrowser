function(doc) {
  if (doc.type == 'pep') {
    emit(doc.num, doc);
  }
}