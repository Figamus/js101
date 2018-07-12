console.log("hello main.js")

let mainCharacter = {
    name: "",
    age: 0,
    race: "",
}
window.onload = console.log("Loaded")
var characterName = prompt("What is your name Adveturer?")
var characterAge = prompt("How old are you, " + characterName)
var characterRace = prompt(characterName + ", I don't recognize your species. Could you tell me?")

mainCharacter.name = characterName
mainCharacter.age = 35
mainCharacter.race = characterRace
 console.log(`${mainCharacter.name}, ${mainCharacter.age}, ${mainCharacter.race}`)
document.getElementById("actionScreen").innerHTML = `<p>Greetings Traveler. Your name is ${mainCharacter.name}. You tell me you are ${mainCharacter.age} year of age and that you are ${mainCharacter.race}</p>`;

// Turn the form data into string with a .value at the end.