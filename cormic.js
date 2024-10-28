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
onEvent("option2screen2", "click", function( ) {
  setScreen("screen8");
  place = "frontGate";
  storyOutput = "The gate is locked, try to knock on the door."+"\n"+"\n"+"What do you want to do?";
  option1 = "Knock on the door.";
  option2 = "Leave.";
  setProperty("storyOutputScreen8", "text", storyOutput);
  setProperty("option1screen8", "text", option1);
  setProperty("option2screen8", "text", option2);
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
onEvent("option1screen6", "click", function( ) {
  setScreen("screen7");
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
