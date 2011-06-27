function () {
	$(this).trigger('setcategory', [$(this).attr('title')]);
};