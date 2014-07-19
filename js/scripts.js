var Tamagotchi = {
	initialize : function(name, foodLevel, activityLevel, sleepLevel) {
		this.name = name;
		this.foodLevel = foodLevel;
		this.activityLevel = activityLevel;
		this.sleepLevel = sleepLevel;
	},
	timePasses : function() {
		this.foodLevel === (this.foodLevel - 1);
		this.activityLevel === (this.activityLevel - 1);
		this.sleepLevel === (this.sleepLevel - 1);
	},


};