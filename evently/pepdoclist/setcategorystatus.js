function (e, category, status) {
  $$(this).category = category;
  $$(this).status = status;
  $(this).trigger('loaddoclist');
}
