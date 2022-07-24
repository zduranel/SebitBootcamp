// const button = document.querySelector('button');    İLK YÖNTEm
// const button = document.querySelector('#buttonId'); ikinci yöntem id ile çekme
//const button = document.querySelector('.buttonClass'); üçüncü yöntem class ile çekme

// const button = document.getElementById('buttonId'); İD İLE ÇEKME
// const button = document.getElementsByClassName('buttonClass')[0]; CLASS İLE ÇEKME


const button = document.getElementById('buttonId');


//ilk yöntem direk
        // button.addEventListener('click',() =>{
        //     console.log("tiklandi");
        // })
//ikinci yöntem html onclick ile
// function add(){
//     console.log("tiklandi");
    
// }
console.log(button);

const liElemanlari = document.querySelectorAll('li');
console.log(liElemanlari);


//her bir li ye tekabül ediyor
liElemanlari.forEach(eleman =>{
    eleman.addEventListener('click', e =>{
        //console.log("tiklandi");
        console.log(e.target);  //tıklanılan texte ulaşıldı EX: <li>React</li>
        e.target.style.color='blue'; // tıklanılan text mavi renk olur
    })

})



const ulDegerlerim = document.querySelector('ul');
console.log(ulDegerlerim);
//ulElemenlari.remove();

liElemanlari.forEach(eleman =>{
    eleman.addEventListener('click', e =>{
        e.target.remove();
    })

})

const liElemanim = document.createElement('li');
liElemanim.textContent = 'Javascript';
// append // SONA ELEMAN EKLER
// prepend // BAŞA ELEMAN EKLER

button.addEventListener('click',() =>{
    const liElemanim = document.createElement('li');
    liElemanim.textContent = 'Javascript';
    ulDegerlerim.prepend(liElemanim);

})






