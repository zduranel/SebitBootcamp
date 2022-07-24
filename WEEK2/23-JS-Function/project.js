function hello(){
    console.log("Hello")
}

hello();

//fonksiyonlara parametre gönderme

const canboz = function(ad,soyad){
    console.log(`Ad Soyad: ${ad} ${soyad}`)
}

const canboz2 = function(ad="aa",soyad="bb"){ //default değer aa bb
    console.log(`Ad Soyad: ${ad} ${soyad}`)
}

canboz('Zekeriya','Duranel')
canboz2();


//ESKİ TİPten Arrowa hafif geçiş
const kareAlani = function(kenar){
    return kenar*kenar;
}
//Arrow ilk versiyon
// const kareAlani2 = (kenar) =>{
//     return kenar*kenar;
// }

// tek parametre ise paranteze gerek olmaz
const kareAlani3 = kenar =>{
    return kenar*kenar;
}

// bu şekildede olur
const kareAlani4 = kenar => kenar*kenar;
console.log(kareAlani4(7)); //49




// let sonuc = kareAlani(6);
// console.log(sonuc); //36

const dönüs = () => {
    return "Zekeriya Duranel";
}
console.log(dönüs());

const dönüs2 = () => "Zekeriya Duranel2";
console.log(dönüs2());

//UYGULAMA
//ürünlerin ham fiyatını verip vergili halinin toplamını bulan bir hesaplama yapın

//NORMAL FUNCTİON
const urunSatis = function(urunler,vergi){
    let toplam = 0;
    for(let i=0;i<urunler.length;i++){
        // toplam = toplam + urunler[i] + urunler[i]*vergi;
        toplam += urunler[i] + urunler[i]*vergi;

    }
    return toplam;
}
console.log(urunSatis([10,20,30],0.25));

//ARROW FUNCTİON
const urunSatisArrow = (urunler,vergi) =>{
    let toplam = 0;
    for(let i=0;i<urunler.length;i++){
        toplam += urunler[i] + urunler[i]*vergi;

    }
    return toplam;
}
console.log(urunSatisArrow([10,20,30],0.25));








