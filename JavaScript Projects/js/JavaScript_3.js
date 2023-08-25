function displayType(character) {
    let characterType = character.getAttribute(`data-character-type`);
    alert(characterType + ` is in the ` + character.innerHTML + ` universe!`);
}