let yaricap = 15;
const piSayisi = 3.14;

let alanDaire = piSayisi * yaricap**2;
console.log(alanDaire);

let kalan = yaricap % 4;
console.log(kalan);

let sonuc = 6 * (15-4)**2;
console.log(sonuc); //726

//Sayı arttırma
 
let sayi = 13;

// sayi += 1;
// sayi++;
// ++sayi;

// ++sayi ile sayi++ farkı
let sayim = sayi++; //arttırır ama öncekini döndürür, sayi 14 oldu
console.log(sayim); // 13

let yeniSayim = ++sayi; //arttırır ve döndürür
console.log(yeniSayim); // 15

// console.log(sayi);

//NaN Kullanımı
console.log(15/4);
console.log(15/"dsf");

let birlestirme = "Derdi " + sayi + " kere tekrar ettim"
console.log(birlestirme);
