let isimler = ['can','rıdvan','elif'];
// console.log(isimler[0]);

// isimler[1] = 'zekeriya';
// console.log(isimler);

let yaslar = [43,5,16,32];
console.log(yaslar[3]);

let rastgele = ['Zekeriya','Duranel',27,1995]
console.log(rastgele);

//Dizinin eleman sayısı

let tireli = isimler.join('-');  // aralarına - koyar
console.log(tireli);

let virgüllü = isimler.join(', ');  // (', ')
console.log(virgüllü);

let sira = isimler.indexOf('elif'); //2. indexte

//Concat method
let eklenmis = isimler.concat(['osman','merve']) // sonuna ekler
console.log(eklenmis);
console.log(isimler); //Ana dizin değişmez

isimler.push('leyla'); // sonuna ekler ana dizi değişir
console.log(isimler);

isimler.pop(); // sonundakini siler
console.log(isimler);

