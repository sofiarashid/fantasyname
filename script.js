function generatemermaidname() {

    const name=document.getElementById("nameinput").value;
    const howhappy=document.getElementById("howhappy").value;
    const favcolor=document.getElementById("favcolor").value;
    const haircolor=document.getElementById("haircolor").value;    
    
    const prefix= getPrefix(gender);
    const firstName=getFirstName(namelength, firstLetter);
    const middleName=getMiddleName(howhappy);
    const lastName=getLastName(favcolor);
    const suffix=getSuffix(haircolor);
    
    const fullname = prefix + firstName + middleName + lastName  + suffix;
    document.getElementById("result").innertext = fullname;
}

function getPrefix() {
    if (gender==="Female") {
        return "Mermaid ";
    } else {
        return "Captain ";
    }
}

function getFirstName() {
    if (namelength >= 5) {
        return "Coral ";
    } else if ("AEIOU".includes(firstLetter.toUpperCase()))  {
        return "Pearl ";
    } else {
        return "Ocean ";
    }
}

function getMiddleName() {
    switch(true) {
        case (howhappy <=3):
            return "Sea ";
        case (howhappy >=4 && howhappy <=7):
            return "Orca ";
        case (howhappy >=8):
            return "Wave ";
    }
}

function getLastName() {
    if (favcolor==="pink") {
        return "Poseidon ";
    } else if (favcolor==="red") {
        return "Loch Ness ";
    } else if (favcolor==="orange") {
        return "Megladon ";
    } else if (favcolor==="yellow") {
        return "Oceanus ";
    } else if (favcolor==="green") {
        return "Siren ";
    } else if (favcolor==="blue") {
        return "Odysseus ";
    } else {
        return "Kraken ";
    }
}

function getSuffix() {
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
