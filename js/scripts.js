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
		alert (myPet);

		$("input#name").val("");
		$(".show-name").text(inputtedPetName);
		$(".keep-alive").show();

		$("#feed").click(function() {
			myPet.feeding();
			alert("Food Level is now at " + myPet.foodLevel);
			console.log(myPet.foodLevel)
			console.log(myPet.activityLevel)
			console.log(myPet.sleepLevel)
		});

		$("#play").click(function() {
			myPet.playing();
			alert("Activity Level is now at " + myPet.activityLevel);
			console.log(myPet.foodLevel)
			console.log(myPet.activityLevel)
			console.log(myPet.sleepLevel)
		})
;		$("#sleep").click(function() {
			myPet.sleeping();
			alert("Sleep Level is now at " + myPet.sleepLevel);
			console.log(myPet.foodLevel)
			console.log(myPet.activityLevel)
			console.log(myPet.sleepLevel)
		});


	});
});