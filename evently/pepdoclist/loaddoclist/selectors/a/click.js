function () {
  var num = $(this).attr('title');
  $(this).trigger('setpepnum', [num]);
}
