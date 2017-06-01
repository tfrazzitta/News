
var postArray=[];

$(document).on("click", "#submit", function() {
   $("#notes").empty();
   $("#notes2").empty();
   $("#articles").css("background-color", "white")
   $("#articles").empty();
   $("#articles2").empty();
   $("#articles3").empty();
  
 $.ajax({
    method: "GET",
    url: "/articles/"
  }).done(function(data) { 
      var x = ("<div id ='strike' data-id='"+ data[0]._id +"'>");
      $("#articles").append(x)
        for (var i = 0; i <7; i++) {
          $("#articles").append("<div><p>" + data[i].title + "</p></div>");
        }
          $("#notes").append("<input id='titleinput'placeholder='name' name='title' >");
          $("#notes").append("<textarea id='bodyinput' placeholder='write a comment here' name='body'></textarea>");
          $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  })

  // $("#notes2").empty();
  //  var thisId = $("#strike").attr("data-id");
  //     console.log("THISID " + thisId)
  //     console.log("ID " + newsId)
  //         $.ajax({
  //           method: "GET",
  //           url: "/post",
  //            data: {
  //                 params: thisId,
  //               }
  //            }).done(function(array){
  //              for(i=0;i<array.length;i++){
  //             console.log("ID " +array[i]._id)
  //           //$("#notes2").append("<div class='panel panel-primary'> <div class='panel-heading'<div class='panel-title'>" + array[i].title+ "</div><div class='panel-body'>" + array[i].body+ "</div><button class='del' data-id='" + array[i]._id + "' id='delete'>Delete</button></div></div>" );
  //           $("#notes2").append("<div class='panel-body'><ul class='chat'> <li class='left clearfix'><span class='chat-img pull-left'> <img src='http://placehold.it/50/55C1E7/fff&amp;text=U' alt=''User Avatar' class='img-circle'></span> <div class='chat-body clearfix'> <div class='header'><strong class='primary-font'>"+ array[i].title+ "</strong></div><br><p>"+ array[i].body+"</p></li></ul><button data-id='" + array[i]._id + "' id='delete' class='btn-primary'>Delete</button></div></div>");
  //     }
});


$(document).on("click", "#submit2", function() {
  $("#notes").empty();
  $("#articles").css("background-color", "white")
  $("#notes2").empty();
  $("#articles").empty();
  $("#articles2").empty();
  $("#articles3").empty();
 
 $.ajax({
    method: "GET",
    url: "/articles/"
  }).done(function(data) {
    var x = ("<div id ='strike' data-id='"+ data[9]._id +"'>");
    $("#articles").append(x)
      for (var i = 9; i < 31; i++) {
        var b = $("#strike").append("<div><p>" + data[i].title + "</p></div>");
            b.append(x);
    }
      $("#notes").append("<input id='titleinput'placeholder='name' name='title' >");
      $("#notes").append("<textarea id='bodyinput' placeholder='write a comment here' name='body'></textarea>");
      $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

  })
 
});


$(document).on("click", "#submit3", function() {
   $("#notes").empty();
   $("#articles").css("background-color", "white")
   $("#notes2").empty();
   $("#articles").empty();
   $("#articles2").empty();
   $("#articles3").empty();
  
 $.ajax({
    method: "GET",
    url: "/articles/"
  }).done(function(data) {
      var x = ("<div id ='strike' data-id='"+ data[33]._id +"'>");
        $("#articles").append(x)
          for (var i = 33; i < 49; i++) {
            var b = $("#strike").append("<div><p>" + data[i].title + "</p></div>");
                b.append(x);
   }

      $("#notes").append("<input id='titleinput'placeholder='name' name='title' >");
      $("#notes").append("<textarea id='bodyinput' placeholder='write a comment here' name='body'>  </textarea>");
      $("#notes").append("<button data-id='" + data._id + "' id='savenote' class='btn-primary'>Save Post</button>");
  })






});

var del;
$(document).on("click", "#savenote", function() {
  $("#notes2").empty();
 var thisId = $("#strike").attr("data-id");
console.log($("#titleinput").val());
console.log("THIS ID " + thisId)

  $.ajax({
    method: "POST",
    url: "/post/"+ thisId,
    data: {
      title: $("#titleinput").val(),
      body: $("#bodyinput").val(),
      params: thisId
    }
  }).done(function(data) {});
  
    $.ajax({
    method: "GET",
    url: "/post/" + thisId,
      }).done(function(array) {
        del=array;
        console.log(array);
          for(i=0;i<array.length;i++){
              console.log("ID " +array[i]._id)
            //$("#notes2").append("<div class='panel panel-primary'> <div class='panel-heading'<div class='panel-title'>" + array[i].title+ "</div><div class='panel-body'>" + array[i].body+ "</div><button class='del' data-id='" + array[i]._id + "' id='delete'>Delete</button></div></div>" );
            $("#notes2").append("<div class='panel-body'><ul class='chat'> <li class='left clearfix'><span class='chat-img pull-left'> <img src='http://placehold.it/50/55C1E7/fff&amp;text=U' alt=''User Avatar' class='img-circle'></span> <div class='chat-body clearfix'> <div class='header'><strong class='primary-font'>"+ array[i].title+ "</strong></div><br><p>"+ array[i].body+"</p></li></ul><button data-id='" + array[i]._id + "' id='delete' class='btn-primary'>Delete</button></div></div>");
      }
})
  $("#titleinput").val("");
  $("#bodyinput").val("");
});


$(document).on("click", "#delete", function() {
  $("#notes2").empty();
   var thisId = $(this).attr("data-id");
   var newsId = $("#strike").attr("data-id");
      console.log("THISID " + thisId)
      console.log("ID " + newsId)
          $.ajax({
            method: "POST",
            url: "/delete/" + thisId,
             data: {
                  params: thisId,
                  title:newsId
                }
             }).done(function(array){
               for(i=0;i<array.length;i++){
              console.log("ID " +array[i]._id)
            //$("#notes2").append("<div class='panel panel-primary'> <div class='panel-heading'<div class='panel-title'>" + array[i].title+ "</div><div class='panel-body'>" + array[i].body+ "</div><button class='del' data-id='" + array[i]._id + "' id='delete'>Delete</button></div></div>" );
            $("#notes2").append("<div class='panel-body'><ul class='chat'> <li class='left clearfix'><span class='chat-img pull-left'> <img src='http://placehold.it/50/55C1E7/fff&amp;text=U' alt=''User Avatar' class='img-circle'></span> <div class='chat-body clearfix'> <div class='header'><strong class='primary-font'>"+ array[i].title+ "</strong></div><br><p>"+ array[i].body+"</p></li></ul><button data-id='" + array[i]._id + "' id='delete' class='btn-primary'>Delete</button></div></div>");
      }
        });

})

