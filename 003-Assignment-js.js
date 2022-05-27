console.log(`\\************ -- Assignment-1 -- ************/`);
//! ÖDEV1:
//? fiyatlar dizisinde her bir fiyata % 10 zam yapalım.NOT: FOREACH kullanılmalı ve orjinal dizi değiştirilmeli.

const fiyatlar = [100, 250, 50, 89];
const zamlıFiyat = fiyatlar.forEach((value, i, arr) => {
    // arr[i] = (arr[i] * 1.1).toFixed(2);
    arr[i] = (value * 1.1).toFixed(2);
});
console.log(fiyatlar);

console.log(``);

console.log(`\\************ -- Assignment-2 -- ************/`);

//! ÖDEV2:
//? fiyatlar dizisindeki fiyatı 90'dan büyük olan değerleri konsola tek tek bastırınız.

const fiyatlar1 = [100, 250, 50, 89];
const biggerThan90 = fiyatlar1.filter((i) => i > 90).forEach((q) => console.log(q));

console.log(``);

console.log(`\\************ -- Assignment-3 -- ************/`);

//! ÖDEV3:
//? fiyatlar dizisindeki fiyatı 110'dan küçük olan değerlere %10 artış yapın ve bu değerleri konsola tek tek bastırınız.

const fiyatlar2 = [100, 250, 50, 89];

console.log(fiyatlar2);
const artmıs = fiyatlar2.filter((i) => i < 110).map((q) => (q * 1.1).toFixed(2)).forEach((q) => console.log(q));

console.log(``);


console.log(`\\************ -- Assignment-4 -- ************/`);
//! ÖDEV4:
//? maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 2500, 4000, 6000, 6500];

const artıss = maaslar.filter((k) => k < 4000).map((a) => a * 1.5).forEach((y) => console.log(y));

console.log(``);

console.log(`\\************ -- Assignment-5 -- ************/`);

//! ÖDEV5:
//? Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari konsolda yazdiralim.

const art = maaslar.filter((r) => r > 4000).map((z) => z * 1.25).forEach((y) => console.log(y));

console.log(``);

console.log(`\\************ -- Assignment-6 -- ************/`);

//! ÖDEV6:
//? Maaslarin toplamini hem forEach ile hem de reduce methodu ile çözünüz.


const maaslar1 = [3000, 5000, 2500, 4000, 6000, 6500];
let sum = 0;
maaslar1.forEach((q) => sum += q)
console.log(sum);

//* Using reduce()
const toplam = maaslar1.reduce(((tpl, value) => tpl + value), 0)
console.log("Verilen maaşların toplam değeri :", toplam);


console.log(`\\************ -- Assignment-7 -- ************/`);
//? For the salary series, let's put the increased salaries in a separate series by giving a 20% increase to those whose salaries are below the average.

const ortalama = maaslar1.reduce((topla, maas) => topla + maas, 0) / maaslar1.length;
console.log(ortalama);
const artıs = maaslar1.filter((maas) => maas < maaslar1.reduce((topla, maas) => topla + maas, 0) / maaslar1.length).map((art) => (art * 1.2).toFixed(2));
console.log(artıs);