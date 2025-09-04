/*** Ticket fare Calculator - Children (age < 10): free - Students get a 50% discount - Senior citizens (age >= 60) gets a 15% Discount - Otherwise Regular ticket fare 800 tk */

var age = 59;
var fare;
var isStudent = true;

if (age < 10) {
    fare = 0;
    console.log('Children Free');
}
else if (age >= 60) {
    fare = 800 * 0.85;
    console.log('85% discount for senior citizen');
}
else if (isStudent) {
    fare = 800 * 0.5;
    console.log('50% discount for student');
}
else {
    fare = 800;
    console.log('Regular ticket');
}

console.log('Ticket fare:', fare);
