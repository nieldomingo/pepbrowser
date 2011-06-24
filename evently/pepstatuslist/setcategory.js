function (e, category) {
  $$(this).category = category;
  $(this).trigger('loadstatuslist');
}