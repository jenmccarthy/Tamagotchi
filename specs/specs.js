describe("Tamagotchi", function() {
	describe("initialize", function() {
		it("will set the name and other properties", function() {
			var myPet = Object.create(Tamagotchi);
			myPet.initialize("pickles", 10, 10, 10);
			myPet.name.should.equal("pickles");
			myPet.foodLevel.should.equal(10);
			myPet.activityLevel.should.equal(10);
			myPet.sleepLevel.should.equal(10);
		});
	});
	// describe("timePasses", function() {
	// 	it("will decrease the amount of food, sleep, and activity by one if those have not been addressed", function () {
	// 		var myPet = Object.create(Tamagotchi);
	// 		myPet.initialize("pickles");
	// 		myPet.timePasses();
	// 		myPet.foodLevel.should.equal(9);
	// 		myPet.activityLevel.should.equal(9);
	// 		myPet.sleepLevel.should.equal(9);
	// 	});
	// });
	// describe("feeding", function() {
	// 	it("will increase the food level by one and decrease the sleep and activity levels by 1", function() {
	// 		var MyPet = Object.create(Tamagotchi);
	// 		myPet.initialize("pickles");
	// 		myPet.feeding();
	// 		myPet.foodLevel.should.equal(11);
	// 		myPet.activityLevel.should.equal(9);
	// 		myPet.sleepLevel.should.equal(9);
	// 	});
	// });
	// describe("playing", function() {
	// 	it("will increase the activity level by one and decrease the sleep and food levels by 2", function () {
	// 		var myPet = Object.create(Tamagotchi);
	// 		myPet.initialize("pickles");
	// 		myPet.playing();
	// 		myPet.activityLevel.should.equal(11);
	// 		myPet.foodLevel.should.equal(8);
	// 		myPet.sleepLevel.should.equal(8);
	// 	});
	// });
	// describe("sleeping", function() {
	// 	it("will increase the sleep level by one and decrease the food and activity levels by 2", function() {
	// 		var myPet = Object.create(Tamagotchi);
	// 		myPet.initialize("pickles");
	// 		myPet.sleeping();
	// 		myPet.sleepLevel.should.equal(11);
	// 		myPet.foodLevel.should.equal(8);
	// 		myPet.activityLevel.should.equal(8);
	// 	});
	// });
	// describe("isAlive", function() {
	// 	it("will remain alive if food level is above 0", function() {
	// 		var myPet = Object.create(Tamagotchi);
	// 		myPet.initialize("pickles");
	// 		myPet.isAlive().should.equal(true);
	// 	});

	// 	it("will be dead if food level and sleep level are both 0", function() {
	// 		var myPet = Object.create(Tamagotchi);
	// 		myPet.initialize("pickles");
	// 		myPet.foodLevel = 0;
	// 		myPet.sleepLevel = 0;
	// 		myPet.isAlive().should.equal(false);
	// 	});
	// });
});