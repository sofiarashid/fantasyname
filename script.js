function generatemermaidname() {
    get prefix();
    get firstName();
    get middleName();
    get lastName();
    get suffix();
    return prefix + firstName + middleName + lastName  + suffix;
}

function get prefix() {
    if (gender="Female") {
        prefix = "Mermaid ";
    } else {
        prefix = "Captain ";
    }
}

function get firstName() {
    if (namelength >= 5) {
        firstName ="Coral ";
    } else if (first letter is A or E or I or O or UI)  {
        firstName="Pearl ";
    } else {
        firstName="Ocean ";
    }
}

function get middleName() {
    switch(howhappy) {
        case 1-3:
            middleName="Sea ";
            break;
        case 4-7:
            middleName="Orca ";
            break;
        case 8-10:
            middleName="Wave ";
    }
}

function get lastName() {
    if (favcolor is pink) {
        lastName="Poseidon ";
    } else if (favcolor is red) {
        lastName="Loch Ness ";
    } else if (favcolor is orange) {
        lastName="Megladon ";
    } else if (favcolor is yellow) {
        lastName="Oceanus ";
    } else if (favcolor is green) {
        lastName="Siren ";
    } else if (favcolor is blue) {
        lastName="Odysseus ";
    } else {
        lastName="Kraken ";
    }
}

function get suffix() {
    if (haircolor="blonde") {
        suffix="of the Sunlight Zone"
    } else if (haircolor="brunette") {
        suffix="of the Twilight Zone"
    } else if (haircolor="black") {
        suffix="of the Midnight Zone"
    } else if (haircolor="ginger") {
        suffix="of the Abyssal Zone"
    } else {
        suffix="of the Hadal Zone"
    }
}