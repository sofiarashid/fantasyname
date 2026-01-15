function generatemermaidnamebutton() {

    const name=document.getElementById("nameInput").value;
    const gender=document.querySelector('input[name="gender"]:checked')?.value || "male"
    const howhappy=Number(document.getElementById("howhappy").value);
    const favcolor=document.getElementById("favcolor").value;
    const haircolor=document.getElementById("haircolor").value;    
    
    const namelength=name.length;
    const firstLetter=name[0] || "";

    const prefix= getPrefix(gender);
    const firstName=getFirstName(namelength, firstLetter);
    const middleName=getMiddleName(howhappy);
    const lastName=getLastName(favcolor);
    const suffix=getSuffix(haircolor);
    
    const fullname = prefix + firstName + middleName + lastName  + suffix;
    document.getElementById("result").innerText = fullname;
}

function getPrefix(gender) {
    if (gender==="female") {
        return "Mermaid ";
    } else {
        return "Captain ";
    }
}

function getFirstName(namelength, firstLetter) {
    if (namelength >= 5) {
        return "Coral ";
    } else if ("AEIOU".includes(firstLetter.toUpperCase()))  {
        return "Pearl ";
    } else {
        return "Ocean ";
    }
}

function getMiddleName(howhappy) {
    switch(true) {
        case (howhappy <=3):
            return "Sea ";
        case (howhappy >=4 && howhappy <=7):
            return "Orca ";
        case (howhappy >=8):
            return "Wave ";
    }
}

function getLastName(favcolor) {
    const color = tinycolor(favcolor).toRgb();
    const { r, g, b } = color;
    if (r > g && b > g && r > 150 && b > 150) { /*pink*/
        return "Poseidon ";
    } else if (r > g && r > b) { /*red*/
        return "Loch Ness ";
    } else if (r > g && g > b) { /*orange*/
        return "Megladon ";
    } else if (r > 150 && g > 150 && b < 100) { /*yellow*/
        return "Oceanus ";
    } else if (g > r && g > b) { /*green*/
        return "Siren";
    } else if (b > r && b > g) { /*blue*/
        return "Odysseus ";
    } else { /*purple, brown, gray, black, white*/
        return "Kraken ";
    }
}

function getSuffix(haircolor) {
    if (haircolor==="blonde") {
        return "of the Sunlight Zone"
    } else if (haircolor==="brunette") {
        return "of the Twilight Zone"
    } else if (haircolor==="black") {
        return "of the Midnight Zone"
    } else if (haircolor==="ginger") {
        return "of the Abyssal Zone"
    } else {
        return "of the Hadal Zone"
    }
}
