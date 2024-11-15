/**let a =10;
let b = "10";
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);
console.log(a>b);
-------------------------**/
/**let a =true;
let b = false;
console.log(a && b); ve iki koşulda olması lazım
console.log(a || b); iki koşuldan biri olabilir
console.log(!a); tersine çevir 
-----------------------------**/
/**let num =10;
num +=5; // num = num +5 
console.log(num);
num *=2; // num = num *2
console.log(num); topla ve çarp ve üstüne ata çıktısı 15,30
-----------------------------**/
/**  let not = 85;
 if (not >=90){
    console.log("AA");
 }
 else if(not>=70){
    console.log("BB");
 }
 else{
    console.log("C");
 }
--------------------------------**/
/**let gun = 3;
switch(gun){
    case 1:
    console.log('Pazartsi');
    break
    case 2:
    console.log('Salı');
    break
    case 3:
    console.log('Çaraşamba');
    break
    defuault:
    console.log('Haftaİçi')
}
    
----------------------------------**/
/**
let a = 10;
let b = 20;
let c = 30;
let ortalama = (a + b + c);
console.log(ortalama / 3);
--------------------------**/
/**-------------------------- 
let a = 10;
let b = 20;
let c = 30;

if (a >= b && a >= c) {
    console.log('En büyük A');
} else if (b >= a && b >= c) {
    console.log('En büyük B');
} else if (c >= a && c >= b) {
    console.log('En büyük C');
} else {
    console.log('Büyük yok');
}
----------------------------------*/
/** 
let yas_1 = 30;
if (yas_1 >= 18 || yas_1 <= 65){
    console.log('Çalışabilir');
} 
else{
console.log('Çalışamaz');
}
-------------------------------------*/
/** let maas= 10000;
maas+= maas*0.2

console.log(maas)
------------------------------------- */
/** 
let ogrenci = 86;

if (ogrenci >= 85) {
    console.log('AA');
} else if (ogrenci >= 70) {
    console.log('BB');
} else if (ogrenci >= 50) {
    console.log('CC');
} else {
    console.log('DD');
}
--------------------------------------------*/
/** 
let gun = 4;
switch (gun) {
    case 1:
        console.log('Pazartsi');
        break;

    case 2:
        console.log('Salı');
        break;

    case 3:
        console.log('Çarşamba');
        break;

    case 4:
        console.log('Perşembe');
        break;

    case 5:
        console.log('Cuma');
        break;

    case 6:
        console.log('Cumartesi');
        break;

    case 7:
        console.log('Pazar');
        break;
    default:
        console.log('8 Günmü olur dayı ? ');
        break;
}
----------------------------------------------------*/
/**
let sayı = 15;
let a = (sayı % 2);  
console.log(sayı % 2 === 0);
--------------------------------------------- */
/** 
let sayi1 = 10;  
let sayi2 = 5;   


let toplam = sayi1 + sayi2;
console.log("Toplam: " + toplam);

let fark = sayi1 - sayi2;
console.log("Fark: " + fark);

let carpim = sayi1 * sayi2;
console.log("Çarpım: " + carpim);


let bolum = sayi1 / sayi2;
console.log("Bölüm: " + bolum);
---------------------------------------------------*/
/**
let yas = 57;
let gelir = 4000;
if (yas >= 18 && gelir >= 5000){
    console.log('Kredi Alabilir');
} 
else{
    console.log('Şartlar Karşılanmıyor');
}
------------------------------------------------------- */
let ogrenci = 40;
if(ogrenci >= 50){
    console.log('Geçti');
}
else{
    console.log('Kaldı');
}

