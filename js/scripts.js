var Tamagotchi = {
	initialize : function(name) {
		this.name = name;
		this.foodLevel = 10;
		this.activityLevel = 10;
		this.sleepLevel = 10;
	},
	timePasses : function() {
		this.foodLevel --;
		this.activityLevel --;
		this.sleepLevel --;
	},
	feeding : function() {
		this.foodLevel ++;
		this.activityLevel --;
		this.sleepLevel --;
	},	
	playing : function() {
		this.foodLevel --;
		this.activityLevel ++;
		this.sleepLevel --;
	},
	sleeping : function() {
		this.foodLevel --;
		this.activityLevel --;
		this.sleepLevel ++;
	},
	isAlive : function() {
		if (this.foodLevel < 1) {
			return false;
		} else {
			return true;
		};
	}
};

$(document).ready(function() {

	$("form#virtual-pet-name").submit(function(event) {
		event.preventDefault();

		var myPet = Object.create(Tamagotchi);
		var inputtedPetName = $("input#name").val();
		myPet.initialize(inputtedPetName);

		$("input#name").val("");
		$(".show-name").text(inputtedPetName);
		$(".keep-alive").show();

		var counter = window.setInterval(function() {myPet.timePasses();
			if (myPet.foodLevel === 0) {
				alert("You neglected " + inputtedPetName + ". Now he is dead!");
				window.clearInterval(counter);
			};

		}, 30000);

		    
		$("#feed").click(function() {
			myPet.feeding();
			if (myPet.foodLevel > 15) {
				alert("You overfed " + inputtedPetName + ". Now he's dead!");
			};
		});

		$("#play").click(function() {
			myPet.playing();
 			if (myPet.foodLevel === 0) {
 				alert("You forgot to feed " + inputtedPetName + ". Now he's dead!");
 			};
		});

		$("#sleep").click(function() {
			myPet.sleeping();
			if (myPet.foodLevel === 0) {
				alert("You forgot to feed " + inputtedPetName + ". Now he's dead!");
			};
		});
	});
});