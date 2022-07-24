const sifre = "asdsgddssdsfds"

if(sifre.length > 12)
{
    console.log("Güçlü Şifre")
}
else if(sifre.length >= 8 && sifre.length <=12)
{
    console.log("Yeterli Şifre")
}
else(sifre.length < 8)
{
    console.log("Yetersiz Şifre")
}