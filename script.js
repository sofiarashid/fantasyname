function generatemermaidname() {
    get prefix();
    get firstName();
    get middleName();
    get lastName();
    get suffix();
    return prefix + firstName + middleName + lastName  + suffix;
}