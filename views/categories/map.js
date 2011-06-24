function(doc) {
  if (doc.type == 'pep') {
    emit(doc.category, 1);
  }
}