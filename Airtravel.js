function displayData(data) {
  var retInfo;
  for (resultIndex in data.results) {
    retInfo += '<div class="resultBox">';
    var result = data.results[resultIndex];
    for (dataItem in result) {
      retInfo += dataItem + ':  ' + result[dataItem] + ' <br>';
    }
    retInfo += "</div>";
  }
  $(".results").html(retInfo);
}

$.get("https://api.myjson.com/bins/1gb9tf", function(data) {
  displayData(data);
  console.log(data);
});

