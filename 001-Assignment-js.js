console.log(`***** 001-Assignment Functions, Stirng Method and Arrays *****`);
console.log(`First Assignment : SORU1: Taban ve yükseklik değerlerini parametre olarak alan ve bir üçgenin alanını hesaplayarak ana programa döndüren fonksiyonu yazınız.`);
function areaOftriangle(a, h) {
    return (a * h) / 2;
}
console.log(`Area of Triangle is equla to`, areaOftriangle(4, 6));

function areaOftriangle1(a, h) {
    console.log(`Area of Triangle is equal to`, (a * h) / 2);
}
areaOftriangle1(4, 6);

console.log(`Second Assignment : SORU2: kareAl, küpAl, üsAl şeklinde üç adet farklı arrow fonksiyonu tanımlayın. Bu fonksiyonların ana programdan gereken parametreleri alarak sonuçları ana programa döndürmeli gerekmektedir.`);

const kareAl = (a) => a ** 2;
console.log(kareAl(3));

const küpAl = (y) => y ** 3;
console.log(küpAl(3));

const üsAl = (x, n) => x ** n;
console.log(üsAl(3, 4));

console.log(`Third Assignment :  Yıl değerini parametre olarak alan ve bu yılın artık yıl olup olmadığını hesaplayarak sonucu ana programa döndüren fonksiyonu function-expression yöntemi ile yazınız. NOT: Yıl 4’e tam bölünüyorsa VE (100'e tam bölünmüyorsa VEYA 400'e tam bölünüyorsa) artık yıldır aksi takdirde değildir.`);

const leapYear = function (year) {
    if ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) {
        console.log(`${year} is Leap Year`);
    } else {
        console.log(`${year} is not Leap Year`);
    }
}
leapYear(2012);

console.log(`Fourth Assignment :  Aşağıda görüldüğü gibi uzun olan youtube linklerini kısa formata çevirecek kodu yazınız.

https://www.youtube.com/watch?v=b7vfp5G4brE => uzun-link https://youtu.be/b7vfp5G4brE => kısa-link`);

let longLink1 = `https://www.youtube.com/watch?v=`;

let longLink = `https://www.youtube.com/watch?v=b7vfp5G4brE`;
let addLink = `https://youtu.be/`;

console.log(longLink.length);
console.log(longLink1.length);
let wantedText = longLink.length - longLink1.length

let resultLink = addLink.concat(longLink.slice(32));
console.log(resultLink);


let wanted = longLink.replace(`www.youtube.com/watch?v=`, `youtu.be/`);
console.log(wanted);