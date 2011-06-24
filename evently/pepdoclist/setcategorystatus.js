function (e, o) {
  $$(this).category = o[0];
  $$(this).status = o[1];
  $(this).trigger('loaddoclist');
}
