var storyOutput = "";
var option1 = "";
var option2 = "";
var option1check = false;
var option2check = false;
hideElement("option1btn");
hideElement("option2btn");
showElement("startbtn");
onEvent("startbtn", "click", function( ) {
  hideElement("startbtn");
  showElement("option1btn");
  showElement("option2btn");
  storyOutput = ("It's Halloween night in the small town of Hollow Creek. The streets are filled with kids in costumes, but something feels off this year. Whispers of a curse hang in the air, and eerie shadows dance beneath the flickering streetlights. Will you uncover the mystery of Hollow Creek, or will you become another lost soul?"+"\n")+"\n"+"You stand at the fork in the road just outside your house. To the left, the path leads toward the old cemetery, where strange lights have been reported. To the right, the haunted house on Elm Street beckons, known for its ghostly legends."+"\n"+"\n"+"What will you do?";
  option1 = "Go to the Cemetary";
  option2 = "Vist the Haunted House";
  updateScreen();
  chooseOption();
});
if (option1check != false) {
  storyOutput = "You walk down the narrow path to the cemetery. The air grows colder, and a thick fog rolls in, obscuring your vision. As you approach the old gravestones, you hear a soft whispering. Suddenly, a shadowy figure appears, hovering over a freshly dug grave." +"\n"+"\n"+"What will you do?";
  option1 = "Approach the figure";
  option2 = "Run back to the path";
  updateScreen();
} else if ((option2check != false)) {
  storyOutput = ("You head toward the haunted house, its decaying facade looming above you like a giant, hungry beast. As you step inside, the door creaks ominously. Cobwebs hang from the ceiling, and the air smells of mildew. You can hear strange noises coming from the upstairs. " +"\n")+"\n"+"What will you do?";
  option1 = "Investiagate the noise upstairs";
  option2 = "Search the ground floor";
  updateScreen();
} else {
  updateScreen();
}
function updateScreen() {
  setProperty("storyOutput", "text", storyOutput);
  setProperty("option1btn", "text", option1);
  setProperty("option2btn", "text", option2);
}
function chooseOption() {
  onEvent("option1btn", "click", function( ) {
    option1check = true;
  });
  onEvent("option2btn", "click", function( ) {
    option2check = true;
  });
}
