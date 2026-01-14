function generatemermaidname() {
    prefix= getPrefix();
    firstName=getFirstName();
    middleName=getMiddleName();
    lastName=getLastName();
    suffix=getSuffix();
    return prefix + firstName + middleName + lastName  + suffix;
}

function getPrefix() {
    if (gender="Female") {
        prefix = "Mermaid ";
    } else {
        prefix = "Captain ";
    }
}

function getFirstName() {
    if (namelength >= 5) {
        firstName ="Coral ";
    } else if ("AEIOU".includes(firstLetter.toUpperCase()))  {
        firstName="Pearl ";
    } else {
        firstName="Ocean ";
    }
}

function getMiddleName() {
    switch(true) {
        case (howhappy >= 1 && howhappy <=3):
            return "Sea ";
        case (howhappy >=4 && howhappy <=7):
            return "Orca ";
        case (howhappy >=8 && howhappy <=10):
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
