var storyOutput = "";
var option1 = "";
var option2 = "";
var place = "";
setScreen("screen1");
onEvent("startbtn", "click", function( ) {
  setScreen("screen2");
  place = "start";
  storyOutput = "It’s Halloween night, and a thick fog blankets your neighborhood. You and your friends decide to explore the old, abandoned mansion at the end of the street. Legends say it’s haunted by the spirits of those who once lived there. With your heart racing, you step onto the creaky porch."+"\n"+"\n"+"What do you want to do?";
  option1 = "Knock on the door.";
  option2 = "Try to open the front gate.";
  setProperty("storyOutputScreen2", "text", storyOutput);
  setProperty("option1screen2", "text", option1);
  setProperty("option2screen2", "text", option2);
});
onEvent("option1screen2", "click", function( ) {
  setScreen("screen3");
  place = "door";
  storyOutput = "The door swings open slowly, revealing a dark foyer. A cold breeze rushes past you, carrying whispers that seem to beckon you inside."+"\n"+"\n"+"What do you want to do?";
  option1 = "Step inside the mansion.";
  option2 = "Leave.";
  setProperty("storyOutputScreen3", "text", storyOutput);
  setProperty("option1screen3", "text", option1);
  setProperty("option2screen3", "text", option2);
});
onEvent("option2screen3", "click", function( ) {
  setScreen("screen10");
  place = "aboutToLeave";
  storyOutput = ("You decide this is too creepy and turn away to leave. Just as you do, the door swings open again, and you hear a voice whisper, “Stay… please.”"+"\n")+"\n"+"What do you want to do?";
  option1 = "Ignore the voice and leave.";
  option2 = "Stay and investigate.";
  setProperty("storyOutputScreen10", "text", storyOutput);
  setProperty("option1screen10", "text", option1);
  setProperty("option2screen10", "text", option2);
});
onEvent("option1screen10", "click", function( ) {
  setScreen("screen13");
  place = "leaveAfterVoice";
  storyOutput = ("You make it out safely, but the voice lingers in your mind, a reminder of the souls you left behind."+"\n")+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang."+"\n"+"Story written by: ChatGPT";
  option1 = "Ignore the voice and leave.";
  option2 = "Stay and investigate.";
  setProperty("storyOutputScreen10", "text", storyOutput);
  setProperty("option1screen10", "text", option1);
  setProperty("option2screen10", "text", option2);
});
onEvent("option2screen10", "click", function( ) {
  setScreen("screen12");
  place = "followVoice";
  storyOutput = (("The door slams shut behind you, and the laughter echoes, trapping you in a never-ending Halloween party with the spirits of the mansion."+"\n")+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang.")+"\n"+"Story written by: ChatGPT";
  option1 = "Ending.";
  option2 = "Ending.";
  setProperty("storyOutputScreen12", "text", storyOutput);
  setProperty("option1screen12", "text", option1);
  setProperty("option2screen12", "text", option2);
  hideElement("option1screen12");
  hideElement("option2screen12");
});
onEvent("option2screen2", "click", function( ) {
  setScreen("screen8");
  place = "frontGate";
  storyOutput = ("The gate is locked and there is no way in, try to knock on the door."+"\n")+"\n"+"What do you want to do?";
  option1 = "Try the door.";
  option2 = "Leave.";
  setProperty("storyOutputScreen8", "text", storyOutput);
  setProperty("option1screen8", "text", option1);
  setProperty("option2screen8", "text", option2);
});
onEvent("option1screen8", "click", function( ) {
  setScreen("screen3");
  place = "door";
  storyOutput = "The door swings open slowly, revealing a dark foyer. A cold breeze rushes past you, carrying whispers that seem to beckon you inside."+"\n"+"\n"+"What do you want to do?";
  option1 = "Step inside the mansion.";
  option2 = "Leave.";
  setProperty("storyOutputScreen3", "text", storyOutput);
  setProperty("option1screen3", "text", option1);
  setProperty("option2screen3", "text", option2);
});
onEvent("option2screen8", "click", function( ) {
  setScreen("screen9");
  place = "leavingFrontGate";
  storyOutput = ("You decide to leave the haunted house, and never gaze upon it again."+"\n")+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang."+"\n"+"Story written by: ChatGPT";
  option1 = "Ending.";
  option2 = "Ending.";
  setProperty("storyOutputScreen9", "text", storyOutput);
  setProperty("option1screen9", "text", option1);
  setProperty("option2screen9", "text", option2);
  hideElement("option1screen9");
  hideElement("option2screen9");
});
onEvent("option1screen3", "click", function( ) {
  setScreen("screen4");
  place = "mansionEntrance";
  storyOutput = "You enter the mansion, and the door slams shut behind you. Dust covers everything, and a grand chandelier hangs precariously above. You hear a creaking noise from upstairs."+"\n"+"\n"+"What do you want to do?";
  option1 = "Investigate the noise upstairs.";
  option2 = "Explore the ground floor.";
  setProperty("storyOutputScreen4", "text", storyOutput);
  setProperty("option1screen4", "text", option1);
  setProperty("option2screen4", "text", option2);
});
onEvent("option2screen4", "click", function( ) {
  setScreen("screen16");
  place = "searchGroundFloor";
  storyOutput = ("You find a dusty parlor filled with portraits of the family. As you examine them, one portrait's eyes seem to follow you. Suddenly, you hear laughter coming from the kitchen."+"\n")+"\n"+"What do you want to do?";
  option1 = "Investigate the laughter.";
  option2 = "Leave the mansion.";
  setProperty("storyOutputScreen16", "text", storyOutput);
  setProperty("option1screen16", "text", option1);
  setProperty("option2screen16", "text", option2);
});
onEvent("option1screen16", "click", function( ) {
  setScreen("screen17");
  place = "investigateLaughter";
  storyOutput = ("You enter the kitchen to find a table set for a feast, but no one is there. The laughter fades, replaced by an eerie silence. On the table lies a single, rotting apple."+"\n")+"\n"+"What do you want to do?";
  option1 = "Touch the apple.";
  option2 = "Leave the kitchen.";
  setProperty("storyOutputScreen17", "text", storyOutput);
  setProperty("option1screen17", "text", option1);
  setProperty("option2screen17", "text", option2);
});
onEvent("option1screen17", "click", function( ) {
  setScreen("screen21");
  place = "touchApple";
  storyOutput = ("The room spins, and you are transported to a time long ago, where you relive the family’s last night together, witnessing their tragic fate."+"\n")+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang."+"\n"+"Story written by: ChatGPT";
  option1 = "Ending.";
  option2 = "Ending.";
  setProperty("storyOutputScreen21", "text", storyOutput);
  setProperty("option1screen21", "text", option1);
  setProperty("option2screen21", "text", option2);
  hideElement("option1screen21");
  hideElement("option2screen21");
});
onEvent("option2screen17", "click", function( ) {
  setScreen("screen15");
  place = "leaveKitchen";
  storyOutput = ("You decide to leave the haunted house, and never gaze upon it again."+"\n")+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang."+"\n"+"Story written by: ChatGPT";
  option1 = "Ending.";
  option2 = "Ending.";
  setProperty("storyOutputScreen15", "text", storyOutput);
  setProperty("option1screen15", "text", option1);
  setProperty("option2screen15", "text", option2);
  hideElement("option1screen15");
  hideElement("option2screen15");
});
onEvent("option2screen16", "click", function( ) {
  setScreen("screen14");
  place = "leaveGroundFloor";
  storyOutput = ("You decide to leave the haunted house, and never gaze upon it again."+"\n")+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang."+"\n"+"Story written by: ChatGPT";
  option1 = "Ending.";
  option2 = "Ending.";
  setProperty("storyOutputScreen14", "text", storyOutput);
  setProperty("option1screen14", "text", option1);
  setProperty("option2screen14", "text", option2);
  hideElement("option1screen14");
  hideElement("option2screen14");
});
onEvent("option1screen4", "click", function( ) {
  setScreen("screen5");
  place = "bedroom";
  storyOutput = "As you climb the stairs, the creaking intensifies. You find an open door to a bedroom filled with old toys. Suddenly, a shadow darts past the window!"+"\n"+"\n"+"What do you want to do?";
  option1 = "Look out the window.";
  option2 = "Search the bedroom for clues.";
  setProperty("storyOutputScreen5", "text", storyOutput);
  setProperty("option1screen5", "text", option1);
  setProperty("option2screen5", "text", option2);
});
onEvent("option2screen5", "click", function( ) {
  setScreen("screen18");
  place = "searchBedroom";
  storyOutput = ("You discover an old diary hidden under a bed. Flipping through its pages, you learn about a family tragedy that occurred here. As you read, a voice whispers, “Leave this place!”"+"\n")+"\n"+"What do you want to do?";
  option1 = "Follow the voice.";
  option2 = "Run out of the room.";
  setProperty("storyOutputScreen18", "text", storyOutput);
  setProperty("option1screen18", "text", option1);
  setProperty("option2screen18", "text", option2);
});
onEvent("option2screen18", "click", function( ) {
  setScreen("screen11");
  place = "runOutOfRoom";
  storyOutput = ("As you escape, the door slams shut behind you, sealing the secrets of the mansion forever. You leave with a lingering sense of dread."+"\n")+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang."+"\n"+"Story written by: ChatGPT";
  option1 = "Ending.";
  option2 = "Ending.";
  setProperty("storyOutputScreen11", "text", storyOutput);
  setProperty("option1screen11", "text", option1);
  setProperty("option2screen11", "text", option2);
  hideElement("option1screen11");
  hideElement("option2screen11");
});
onEvent("option1screen18", "click", function( ) {
  setScreen("screen20");
  place = "hiddenMemories";
  storyOutput = ("You find a hidden room filled with old memories. The spirits welcome you, and you help them find peace, allowing you to leave unharmed."+"\n")+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang."+"\n"+"Story written by: ChatGPT";
  option1 = "Ending.";
  option2 = "Ending.";
  setProperty("storyOutputScreen20", "text", storyOutput);
  setProperty("option1screen20", "text", option1);
  setProperty("option2screen20", "text", option2);
  hideElement("option1screen20");
  hideElement("option2screen20");
});
onEvent("option1screen5", "click", function( ) {
  setScreen("screen6");
  place = "lookOutWindow";
  storyOutput = "You see a figure in the fog, staring up at you with hollow eyes. You feel a chill run down your spine as the figure raises a hand, beckoning you."+"\n"+"\n"+"What do you want to do?";
  option1 = "Wave back.";
  option2 = "Close the curtain and back away.";
  setProperty("storyOutputScreen6", "text", storyOutput);
  setProperty("option1screen6", "text", option1);
  setProperty("option2screen6", "text", option2);
});
onEvent("option2screen6", "click", function( ) {
  setScreen("screen19");
  place = "closeCurtain";
  storyOutput = ("The shadow disappears, but a hidden door opens, revealing a secret escape route. You flee the mansion, never looking back."+"\n")+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang."+"\n"+"Story written by: ChatGPT";
  option1 = "Ending.";
  option2 = "Ending.";
  setProperty("storyOutputScreen19", "text", storyOutput);
  setProperty("option1screen19", "text", option1);
  setProperty("option2screen19", "text", option2);
  hideElement("option1screen19");
  hideElement("option2screen19");
});
onEvent("option1screen6", "click", function( ) {
  updateScreen(7, true);
  place = "waveBack";
  storyOutput = "The figure vanishes, and the room goes dark. You become trapped in the mansion, destined to haunt it forever."+"\n"+"\n"+"Coded and designed by: Cormic Purcell, Austin Strong, and Ethan Chiang."+"\n"+"Story written by: ChatGPT";
  option1 = "Ending.";
  option2 = "Ending.";
  setProperty("storyOutputScreen7", "text", storyOutput);
  setProperty("option1screen7", "text", option1);
  setProperty("option2screen7", "text", option2);
  hideElement("option1screen7");
  hideElement("option2screen7");
});

function updateScreen(number, verification) {
  if (number == number && verification != false) {
    setScreen("screen" + number);
  } else {
    console.log("How did you manage to get this error?");
  }
}