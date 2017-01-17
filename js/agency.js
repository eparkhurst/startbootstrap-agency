/*!
 * Agency v1.0.x (http://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin

// var eventList = []
//
// $.get("http://localhost:3000/events", function(data){
//   return data
// }).then(function(data){
//   eventList = data;
//   populateList(eventList)
// })
//
// function populateList(list){
//   for (var i = 0; i < list.length; i++) {
//     $(".event-list").append("<li>"+list[i].date+"  "+list[i].name+"</li>")
//   }
// }
//
// $(".event-list").append("<h1>This is the Event List</h1>");
//
// //submit button
// $(".eventButton").click(function(){
//   var date = $("#eventDate").val()
//   var name = $("#eventName").val()
//   console.log(date+" "+name);
//   var newEvent = {
//     date:date,
//     name:name
//   }
//
//   $.post("http://localhost:3000/newEvent", newEvent)
//     .done(function(data){
//     populateList(data)
//   })
// })



//scrolling stuff

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
    $('.navbar-toggle:visible').click();
});



$.get("img/portfolio",function(data){
    $(data).find("a").attr("href", function (i, val) {
        if( val.match(/\.(jpe?g|png|gif|JPG)$/) ) {
            $(".port").append( "<img src='"+ val +"'>" );
        }
    });
})
