$(document).ready(function(){
  var groceryList = [];
  $("#groceries").submit(function(event){
    var grocery = $("input#item").val();
    if(grocery.length !== 0){
      groceryList.push(grocery);
    }
    $("input#item").val("");
    event.preventDefault();
  });
  $("button#seeList").click(function(){
    $("#gList").empty();
    groceryList.forEach(function(listItem) {
      $("#gList").append("<li>"+listItem+"</li>");

    })
    //$(#gList).show();


  });

});
