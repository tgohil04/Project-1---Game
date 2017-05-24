// Load JS to webpage.

$(function() {
	console.log("DOM ready");

	// Hide gamepage, instructions and leaderboard.
	$("#gamepage").css("visibility", "hidden");
	$("#instructions").css("visibility", "hidden");
	$("#scoreboard").css("visibility", "hidden");

	// Click event to begin game. Upon click of "begin game" button the gamepage becomes visible.
	$("#beginGame").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#gamepage").css("visibility", "visible");
  		

  			// Spaceship needs to appear and rotate with cursor.
  			$("#gamepage").mousemove(function(event) {
  				
  				console.log(event.pageY);
  				console.log(event.pageX);
  				
 				var radAngle = (Math.atan2(parseFloat(event.pageY) - 900, parseFloat(event.pageX)- 580));
 				var degAngle = radAngle * (360 / (2 * Math.PI));
 				
 				if (degAngle < 0){
   					 degAngle = degAngle + 90;
				}

	  			$("#ship").css({'transform' : 'rotate('+ (degAngle) +'deg)'});
	  			
	  		
			});
  			// To determine ships coordinates.
  			// $("#gamepage").click(function (event) {
  			// 	var ship = event.pageX + ' , ' + event.pageY;
  			// 	console.log(ship);
  				
  			// })

  			// Asteroids need to fly across screen

  			$("#a1").css("visibility", "hidden");
  			$("#a2").css("visibility", "hidden");
  			$("#a3").css("visibility", "hidden");
  			$("#a4").css("visibility", "hidden");
  			$("#a5").css("visibility", "hidden");
  			$("#a6").css("visibility", "hidden");

  			$("#point1").css("visibility", "hidden");
  			$("#point2").css("visibility", "hidden");
  			$("#point3").css("visibility", "hidden");
  			$("#point4").css("visibility", "hidden");
  			$("#point5").css("visibility", "hidden");
  			$("#point6").css("visibility", "hidden");
  			
  			move10("#a1");
  			clickCheck("#a1", "#point1", "#a2");
  			clickCheck("#a2", "#point2", "#a3");
  			clickCheck("#a3", "#point3", "#a4");
  			clickCheck("#a4", "#point4", "#a5");
  			clickCheck("#a5", "#point5", "#a6");
  			final("#point6", '#a6');


  			function move (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 150, left: 710}).animate({top:"-180px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");

	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
	  			});
  			};

  			function move2 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 400, left: 210}).animate({left:"850px"}, 5000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
	  			});
  			};

  			function move3 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 500, left: 1050}).animate({left:"0px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
	  			});
  			};

  			function move4 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 150, left: 410}).animate({top:"-125px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
	  			});
  			};

  			function move5 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 600, left: 210}).animate({left:"850px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
		  		});
  			};

  			function move6 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 300, left: 1050}).animate({left:"0px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
	  			});
  			};

  			function move7 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 150, left: 830}).animate({top:"-125px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
	  			});
  			};

  			function move8 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 550, left: 210}).animate({left:"850px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
	  			});
  			};

  			function move9 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 700, left: 1050}).animate({left:"450px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
	  			});
  			};

  			function move10 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 300, left: 1050}).animate({left:"0px"}, 10000, "linear", function () {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
	  				setTimeout(function(){
		  				$(x).remove();
		  				alert("GAME OVER!");
		  				return "Game Over!";
		  			}, 1000);
	  			});
  			};

  			function clickCheck (x, y, z) {

	  			$(x).click(function (event) {
	  				$(x).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");

	  				setTimeout(function(){
  						$(x).stop().remove();
	  					$(y).css("visibility", "visible");
					}, 1000);

	  				

	  				// var mousePos = event.pageX + ' , ' + event.pageY;
	  				
	  				// var angle = Math.atan(event.pageY, event.pageX);
	  				// $("#ship").css({'transform' : 'rotate('+ 180-angle +'deg)'});

	  				var choice = Math.floor(Math.random() * 10);


	  				if (choice === 0) {
	  					move(z);
	  					return choice;
	  				} else if (choice === 1) {
	  					move2(z);
	  					return choice;
	  				} else if (choice === 2) {
	  					move3(z);
	  					return choice;
	  				} else if (choice === 3) {
	  					move4(z);
	  					return choice;
	  				} else if (choice === 4) {
	  					move5(z);
	  					return choice;
	  				} else if (choice === 5) {
	  					move6(z);
	  					return choice;
	  				} else if (choice === 6) {
	  					move7(z);
	  					return choice;
	  				} else if (choice === 7) {
	  					move8(z);
	  					return choice;
	  				} else if (choice === 8) {
	  					move9(z);
	  					return choice;
	  				} else {
	  					move10(z);
	  					return choice;
	  				} 

	  			});
	  		};

	  		function final (y, z) {
	  			$(z).click(function (event) {
	  				$(z).attr("src", "https://media.giphy.com/media/d4aVHC1HKnButuXC/giphy.gif");
		  			setTimeout(function(){
		  				$(y).css("visibility", "visible");
		  				$(z).stop().remove();
		  			}, 1000);
	  				
	  				alert("Well done you won!");
	  				return "You've won!";
	  			});
	  		};
  			
	  		// Make a quit button which returns user back to homepage when clicked.
  			$("#quit").click(function (event) {
  				location.reload();
  			});

  			// XP bar needs to increase

  			// Points bar needs to increase

  		});

  	});

	// Click event to show instructions. Upon click of "how to play" button the instruction page becomes visible.
	$("#howToPlay").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#instructions").css("visibility", "visible");
  			$("#home").click(function (event) {
  				location.reload();
  			});

  		});
  	});

	// Click event to show leaderboard. Upon click of "leaderboard" button the leaderboard page becomes visible.
  	$("#leaderboard").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#scoreboard").css("visibility", "visible");
  			

  		});

  	});


});
