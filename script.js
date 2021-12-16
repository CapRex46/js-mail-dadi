const mail = ['test1@mail.com', 'test2@mail.com', 'test3@mail.com', 'test4@mail.com'];
let mailcheck = false;

const userEmail = prompt('Dimmi la tua email');


for (let i = 0; i < mail.length; i++) {
    if (mail[i].toLocaleLowerCase() === userEmail.toLocaleLowerCase()) {
        mailcheck = true;
    }
}

if (mailcheck) {
    console.log('Benvenuto!')
} else {
    console.log('Impossibile accedere')
}


const playernum = Math.round(Math.random() * (6 - 1)) + 1;
const cpunum = Math.round(Math.random() * (6 - 1)) + 1;

console.log(playernum, cpunum)


if (playernum > cpunum) {
    console.log("hai vinto");
} else if (cpunum > playernum) {
    console.log("hai perso");
} else {
    console.log("pari")
}