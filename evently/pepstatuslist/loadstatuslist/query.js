function () {
  var category = $$(this).category;
  return {
    view: "categorystatus",
    group_level: 2,
    "startkey": [category],
    "endkey": [category, {}]
  };
}