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
  			// Make a quit button which returns user back to homepage when clicked.
  			$("#quit").click(function (event) {
  				$("#gamepage").css("visibility", "hidden");
  				$("#homepage").show("slow", function () {
  				});	
  			});

  			// Spaceship needs to appear and rotate with cursor.


  			// Asteroids need to fly across screen

  			$("#a1").css("visibility", "hidden");
  			$("#a2").css("visibility", "hidden");
  			$("#a3").css("visibility", "hidden");
  			$("#a4").css("visibility", "hidden");
  			$("#a5").css("visibility", "hidden");
  			$("#a6").css("visibility", "hidden");

  			
  			move("#a1");
  			clickCheck("#a1", "#a2");
  			clickCheck("#a2", "#a3");
  			clickCheck("#a3", "#a4");
  			clickCheck("#a4", "#a5");
  			clickCheck("#a5", "#a6");
  			final('#a6');


  			function move (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 150, left: 210}).animate({top:"200px"}, 10000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function move2 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 400, left: 210}).animate({left:"850px"}, 5000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function move3 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 500, left: 1050}).animate({left:"0px"}, 5000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function move4 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 150, left: 410}).animate({top:"200px"}, 10000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function move5 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 600, left: 210}).animate({left:"850px"}, 5000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function move6 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 300, left: 1050}).animate({left:"0px"}, 5000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function move7 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 150, left: 830}).animate({top:"200px"}, 10000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function move8 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 550, left: 210}).animate({left:"850px"}, 5000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function move9 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 700, left: 1050}).animate({left:"450px"}, 5000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function move10 (x) {
  				$(x).css("visibility", "visible");
	  			$(x).offset({top: 300, left: 1050}).animate({left:"0px"}, 5000, "linear", function () {
	  				$(x).css("visibility", "hidden");
	  			});
  			};

  			function clickCheck (x, y) {

	  			$(x).click(function (event) {
	  				$(x).css("visibility", "hidden");
	  				var choice = Math.floor(Math.random() * 10);

	  				if (choice === 0) {
	  					move(y);
	  				} else if (choice === 1) {
	  					move2(y);
	  				} else if (choice === 2) {
	  					move3(y);
	  				} else if (choice === 3) {
	  					move4(y);
	  				} else if (choice === 4) {
	  					move5(y);
	  				} else if (choice === 5) {
	  					move6(y);
	  				} else if (choice === 6) {
	  					move7(y);
	  				} else if (choice === 7) {
	  					move8(y);
	  				} else if (choice === 8) {
	  					move9(y);
	  				} else {
	  					move10(y);
	  				} 

	  			});
	  		};

	  		function final (z) {
	  			$(z).click(function (event) {
	  				$(z).css("visibility", "hidden");
	  			});
	  		};
  			


  			// XP bar needs to increase

  			// Points bar needs to increase

  		});

  	});

	// Click event to show instructions. Upon click of "how to play" button the instruction page becomes visible.
	$("#howToPlay").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#instructions").css("visibility", "visible");
  			

  		});
  	});

	// Click event to show leaderboard. Upon click of "leaderboard" button the leaderboard page becomes visible.
  	$("#leaderboard").click(function (event) {
  	
  		$("#homepage").hide("slow", function () {
  			$("#scoreboard").css("visibility", "visible");
  			

  		});

  	});


});
