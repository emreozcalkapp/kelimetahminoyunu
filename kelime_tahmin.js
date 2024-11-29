alert("Merhaba, kelime tahmin oyunumuza hoşgeldiniz. Oyunun kurallarından bahsetmek gerekirse hafızamızda bir kelime saklıdır ve siz bu kelimeyi bulmaya çalışacaksınız. Toplamda 7 kelime tahmini hakkkınız bulunmaktadır. Hadi başlayalım. :)");

const kelime = "kalem";
const denemeHakki = 7;
let kalanHakki = 7;
for(let index = 1; index <= denemeHakki; index++){

    let kelimeTahmin = prompt("Kelime tahmininiz nedir ?").toLocaleLowerCase("tr");

    if(kelimeTahmin === "kalem"){
        alert("Kelimeyi doğru tahmin ettiniz. Tebrikler!");
        break;
        
    }
    else {
        
        kalanHakki--;
        alert("Kelimeyi yanlış tahmin ettiniz" + " " + kalanHakki + " " + "hakkınız kaldı.");

        if(kalanHakki === 0){
            alert("Tahmin hakkınız bitti. :/");
            alert("Doğru kelime:" + " " + kelime);
        }
    }
}



