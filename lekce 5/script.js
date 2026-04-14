let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    console.log("vítej na stránce");

    if (isAdmin) {
        console.log("Přístup do adminu povolen.");
    } else {
        console.log("Jsi přihlášen jako uživatel.");
    }
} else {
    console.log("Nejsi přihlášený.");
}

let age = 31;
let hasDriverLicense = true;

if (age >= 18 && hasDriverLicense ) {                         //& pravý altgr a C              
    console.log("Můžeš řídit!")
} else {
    console.log("Nemůžeš řídit!")
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {                          //pravý altgr a W
    console.log("Je čas relaxovat!");
} else {
    console.log("Musíme pracovat!");
}