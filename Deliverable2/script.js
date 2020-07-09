let vacationType;
let travelDestination;
let groupSize;
let travelSuggestion;


vacationType = prompt("What kind of vacation are interested in? A musical , something tropical, or a adventurous trip?");
groupSize = prompt("How many people in your group?");

if(vacationType === "musical") {
    travelDestination = "New Orleans";
} else if(vacationType === "tropical") {
    travelDestination = "beach vacation in Mexico";
} else if(vacationType === "adventurous") {
    travelDestination = "Whitewater Rafting the Grand Canyon";
}

if(groupSize < 3){
    travelSuggestion = "First Class seat";
} else if(groupSize >= 3 && groupSize < 6){
    travelSuggestion = "Helicopter";
} else if(groupSize >= 6){
    travelSuggestion = "Charter Flight seat";
}

let result = " If your'e interested in " + vacationType + " and have " + groupSize + " people going with you, you should try " + travelDestination + " in a " + travelSuggestion;

console.log(result);