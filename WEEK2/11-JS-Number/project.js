let email = 'duranel78@gmail.com';
console.log(email);

//Birleştirme
let ad = "Zekeriya"
let soyad = "Duranel HHH"
let isim = ad + " " + soyad;
console.log(isim);
console.log(isim[2]); //k

//kaç karakter ?
console.log(isim.length) 

//string methodlar

console.log(isim.toUpperCase());

let kucukAd = isim.toLowerCase();
console.log(kucukAd);

//kaçıncı indexte bulunduğu
let index = isim.indexOf('k');
let indexLast = isim.lastIndexOf('a');
console.log(index); // k 2. indexte
console.log(indexLast); //sondan başlar taramaya 12.indexte 

//Slice kullanımı

let ilkisim = isim.slice(0,8); // 0 ile 8 arasındaki karakteri alır
console.log(ilkisim); //çıktı: Zekeriya

//Replace
let yerdegistir = isim.replace(" ","") // " " olanları "" yap ilk gördüğünü yapar
console.log(yerdegistir); // ZekeriyaDuranel HHH

//Replace All
let yerdegistirAll = isim.replaceAll(" ","")   //Bütün " " olanları "" yap
console.log(yerdegistirAll); // ZekeriyaDuranelHHH