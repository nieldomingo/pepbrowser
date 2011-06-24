function () {
  $(this).trigger('setcategorystatus', [$(this).attr('title').split('|')]);
}
