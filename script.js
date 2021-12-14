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