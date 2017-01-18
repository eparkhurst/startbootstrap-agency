/*!
 * Agency v1.0.x (http://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
const photoList = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg"
,"12.jpg","13.jpg","14.jpg","15.jpg","Andrehh.jpg", "Andrelidedhorn.jpg","Andrepitf.jpg","Andresodiumvase.jpg"
,"AP-pot.jpg", "AP-pots6.jpg","AP-pots15.jpg","doyalBowl.JPG", "doyalDblDrape.JPG", "DoyalDrape.JPG", "Doyalplates.JPG"
,"DoyalSquarebnw.JPG", "DoyalWhbowl.JPG", "pots8.jpg","pots9.jpg","pots10.jpg", "Reneebeanpots.JPG", "ReneeBlkonred.jpg"
,"Reneecatyarn.jpg", "ReneeKtycupnyarn.jpg", "Reneelid.JPG", "reneepuppymugs.JPG", "reneesPot.jpg"]
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


for (var i = 0; i < photoList.length; i++) {
  $(".port").append( "<img src='img/portfolio/"+ photoList[i] +"'>" );
}
