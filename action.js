let fortuneArray = [
    ', A family member will dump gravy onto your head this christmas',
    ', A friend will invite you to a Christmas party, and they will fail to mention its for Furries.',
    ', A loved one will take you christmas shopping for 5 hours, and will not buy anything',
    ', Its a Festivus Miracle!, Nothing bad happens!',
    ', Your grandmother will be ran over by a reindeer, The broken hip leads to severe medical debt'
];
let fortuneSound = document.getElementById('Snow');

let nameArray =['billy', 'bob','joe','ross', 'trent'];
let currentName = "";
let currentFortune = "";

function getFortune() {
    let randomFortune = Math.floor((Math.random() * fortuneArray.length));
    let randomName = Math.floor((Math.random() * nameArray.length));
    setFortune(fortuneArray[randomFortune],nameArray[randomName]);
    fortuneSound.play();
}

function setFortune(currentfortune,currentname) {
    currentFortune = currentfortune;
    currentName = currentname;
    document.getElementById('output').innerHTML = currentname+' '+currentfortune;

}
