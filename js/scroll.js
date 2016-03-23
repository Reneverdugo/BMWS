//codigo para crear el scroll y fijar 
//un offset que en este caso es equivalente 
//a la altura del menu
$('a.smoothScroll').smoothScroll({
offset: -80,
scrollTarget: $(this).val()
});

//detectar la ubicación usando
// Waypoints
$('.post_article').waypoint(
function(direction) {
if (direction ==='down') {
var wayID = $(this).attr('id');
} else {
var previous = $(this).prev();
var wayID = $(previous).attr('id');
}
$('.current').removeClass('current');
$('#main_nav a[href=#'+wayID+']').addClass('current');
}, { offset: '40%' });