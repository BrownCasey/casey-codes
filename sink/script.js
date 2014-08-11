$(document).ready(function(){
	var b = 33.5;
	var c = -112;
	$(document).ready(geolocateMe);	
	var count = 0;
	var div3replace = 
	"<form action='' method='post'>\
	<input name='name' placeholder='your name' required>\
	<br><br>\
	<input name='email' type='email' placeholder='your email' required>\
	<br><br>\
	<input type='submit' value='Send'>\
	</form>";
	var div2replace =
	"<div id='mask'>\
		<ul>\
			<li id='first' class='firstanim'>\
			<img src='lobster.jpg'/>\
			</li>\
			<li id='second' class='secondanim'>\
			<img src='burger.jpg'/>\
			</li>\
		</ul>\
	</div>";
	$("#div-2").click(function(){
		$(this).html(div2replace);
		$("#train").animate({left: '0'}, 2000);
	});
	$("#div-3").click(function(){
		if(count == 0){
		$(this).html(div3replace);
		count++;
		};
	});
	$("#div-4").click(function(){
		$("#train").css("visibility", "visible");
		$("#train").animate({left: '0px'}, 2000);
	});
	function geolocateMe(){
		navigator.geolocation.getCurrentPosition(LatLon);
	};
	function LatLon(position){
		b = position.coords.latitude;
		c = position.coords.longitude;
	};
	
	$("#div-1").click(function() {
	        var mapOptions = {
        	  center: new google.maps.LatLng(b, c),
	          zoom: 14
	        };
	        var map = new google.maps.Map(document.getElementById("div-1"),
	            mapOptions);
	      	var marker = new google.maps.Marker({
	      		position: new google.maps.LatLng(b, c),
	      		map: map
	      	});
	});
});
