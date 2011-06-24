function () {
  var category = $$(this).category;
  var status = $$(this).status;
  return {
    view: "doclist",
    "startkey": [category, status],
    "endkey": [category, status, {}]
  };
}
