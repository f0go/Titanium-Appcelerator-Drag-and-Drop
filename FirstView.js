function FirstView() {

	var self = Ti.UI.createView();

var circle = Titanium.UI.createView({
	height:200,
	width:200,
	backgroundColor:'#336699',
	top:10,
	left:50
});
 
self.add(circle);
 
var circlePosition = { top: circle.top, left: circle.left };
var xxx = 0;
var yyy = 0;
 
circle.addEventListener('touchstart', function(e) {
	xxx = e.x;
	yyy = e.y;
});
 
circle.addEventListener('touchmove', function(e) {
	circlePosition.top += e.y - yyy; 
	circlePosition.left += e.x - xxx;
	circle.animate({
		top: circlePosition.top, 
		left: circlePosition.left,
		duration: 1 
	});
});
 
circle.addEventListener('touchend', function(e) {
	xxx = 0;
	yyy = 0;
});

	return self;
}

module.exports = FirstView;
