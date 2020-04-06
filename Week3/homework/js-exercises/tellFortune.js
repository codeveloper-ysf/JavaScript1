'use strict';

const numChildren = [1, 2, 3, 4, 5];
const partnerNames = ["Alex", "Balex", "Calex", "Dalex", "Falex"];
const locations = ["Amsterdam", "Deventer", "Apeldoorn", "Groningen", "Zwolle"];
const jobs = ["cowboy", "teacher", "driver", "developer", "unemployed"];

function tellFortune(numChildren, partnerName, locations, jobs) {
    var numOfChildren = numChildren[Math.floor(Math.random()*numChildren.length)];
	var partnerName = partnerNames[Math.floor(Math.random()*partnerNames.length)];
	var geoLoc = locations[Math.floor(Math.random()*locations.length)];
	var jobTitle = jobs[Math.floor(Math.random()*jobs.length)];
    const msg = `you will be a ${jobTitle} in ${geoLoc}, and married to ${partnerName} with ${numOfChildren} kids.`;
    return msg;
}

console.log(tellFortune(numChildren, partnerNames, locations, jobs));
