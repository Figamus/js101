console.log("hello main.js")

let races = ["Human", "Elf", "Dwarf", "Halfling", "Draconin", "Wolfen", "Katar"]
let mainCharacter = {
    name: "",
    age: 0,
    race: "",
}

var characterName = prompt("What is your name Adveturer?")
var characterAge = prompt("How old are you, " + characterName)
var characterRace = prompt(characterName + ", I don't recognize your species. Could you tell me?")

mainCharacter.name = characterName
mainCharacter.age = 35
mainCharacter.race = characterRace


console.log(mainCharacter.name, mainCharacter.age, mainCharacter.race)