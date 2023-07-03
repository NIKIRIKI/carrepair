let blockRevers = document.getElementById('blockRevers');
let itemContact = document.getElementsByClassName('item-contact');
let fastPlusBlock = document.getElementsByClassName('fast-plus__block');
let white = document.getElementsByClassName('white');

let arrItemContactBg = ['#fff', '#e5e5e5'];
let arrItemContactBoxShadow = ['0px 0px 15px rgba(0, 0, 0, 0.25)','none'];
let arrWhiteBg = ['#e5e5e5', '#fff'];

let check = 1;

blockRevers.addEventListener('click', function (){
    if(check < arrItemContactBg.length){
        for(let i = 0; i < itemContact.length; i++){
            itemContact[i].style.transition = '.5s';
            itemContact[i].style.backgroundColor = arrItemContactBg[check];
            itemContact[i].style.backgroundColor = arrItemContactBoxShadow[check];
        }
        for(let i = 0; i < fastPlusBlock.length; i++){
            fastPlusBlock[i].style.transition = '.5s';
            fastPlusBlock[i].style.backgroundColor = arrItemContactBg[check];
            fastPlusBlock[i].style.backgroundColor = arrItemContactBoxShadow[check];
        }
        for(let i = 0; i < white.length; i++){
            white[i].style.transition = '.5s';
            white[i].style.backgroundColor = arrWhiteBg[check];
        }
        check++;
        if(check >= arrItemContactBg.length){
            check = 0;
        }
    }
})