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