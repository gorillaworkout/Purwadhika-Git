// console.log('bayu darmawan')

// var nama = `Bayu "Sekarang Lapar"`

// console.log(nama)
//  nama = true;
//  console.log(nama)


//  var kabar = prompt('Apa Kabar')
//  console.log(kabar)

//  let nama = 'bayu'
//  let usia = 24;
//  let jomblo = false;
//  let kerja;
//  console.log(typeof(nama))
// console.log(typeof(usia))
// console.log(typeof(jomblo))
// console.log(typeof(kerja))
// console.log(kerja)

// let x  = 'Dunia Haloo Halo Halo Halo ';
// console.log(x.length) // 11
// console.log(x.indexOf('Dunia'));
// console.log(x.substr(7,10))
// console.log(x.slice(1,3))

// console.log(x.replace('Ha', 'mi'));
// console.log(x.replace(/Ha/g, 'mi'))


var angka = "123"
// console.log(typeof(angka))
angka = parseInt(angka)
// console.log(angka)


// console.log(tanggal.getFullYear())
// console.log(tanggal.getMonth())
// console.log(tanggal.getDate())
// console.log(tanggal.getDay())
// console.log(tanggal.getHours())
// console.log(tanggal.getMinutes())
// console.log(tanggal.getSeconds())
// console.log(tanggal.getMilliseconds())
// console.log(tanggal.getTime())

let date = new Date()
let tanggal = date.getDate()
let tanggalKmrn = date.getDate() -1
let tanggalBsk = date.getDate() +1
let bulan = date.getMonth() +1
let tahun = date.getFullYear()
let jam = date.getHours()
let minute = date.getMinutes()
console.log( `${tanggal}/${bulan}/${tahun} \n ${jam} : ${minute}`)

//solve it 4 (blm kelar)
// tanpa modulus
// var hari = 485;
// var tahunan = Math.floor(hari / 360)
// var untukBulan = hari-360

// var bulanan = Math.floor((untukBulan)/30)

// var minggu = Math.floor((untukBulan-120)/7)

// var  harian = untukBulan - 120;

var hari = 485;
var tahunan = Math.floor(hari/360); 
var sisaTahun = hari%360; // 125 
var bulanan = Math.floor((sisaTahun)/30)
var sisaBulan = sisaTahun % 30; // 5

var minggu = Math.floor(sisaBulan/7) 

console.log(`${hari} ada : ${tahunan} tahun, ${bulanan} bulan, ${minggu} minggu, ${sisaBulan}  hari`)

// console.log(`${hari} hari : ${tahunan} tahun, ${bulanan} bulan, ${minggu} minggu, ${harian} hari`)
// document.getElementById("s4").innerHTML = `Solve it 4 \n ${hari} hari : ${tahunan} tahun, ${bulanan} bulan, ${minggu} minggu, ${harian} hari`


//solve it 1
let x = 4;
let y = 3;
let z = 2;

let w =Math.pow((x + (y * z))/(x*y),z)
document.getElementById("s1").innerHTML = `Solve it 1 \n : ${w}`
console.log(w)
console.log(x + y * z / (x*y))
//solve it 2

var pertanyaan = prompt('Solve it 2 \n Silahkan Masukan Angka Berapapun : ')
var jawaban = Math.pow(pertanyaan,2)
// alert(`Kuadrat dari ${pertanyaan} =  ${jawaban}`)
document.getElementById("s2").innerHTML = `Solve it 2  \n : Kuadrat Dari ${pertanyaan}  = ${jawaban}`


// solve it 3

let num = 8
let answ = Math.cbrt(num)
console.log(answ)
document.getElementById("s3").innerHTML = `Solve it 3 \n : ${answ}`









// 0,4 = 4/10 : 2
// 2 : 5
// andi : 2n
// budi : 5n
// 2n + 5n = 49;
// 7 n = 49
// n = 49 : 7
// n = 7
// andi : 2 * 7 : 14
// budi : 5*7 = 35
// 2 tahun : 16, 37


// solve it 5
var andi = 2
var budi = 5
var usiaP = andi + budi
var totalUsia  =49
var hitung = totalUsia / usiaP;
var umurAndi2thn = andi * hitung + 2;
var umurBudi2thn = budi * hitung + 2;


// let totalUsia = 49;
// let ageAndi =(Math.round(4/10*totalUsia));
// let ageBudi = (totalUsia - ageAndi)
// console.log(`umur andi & budi 2 tahun lagi , andi : ${ageAndi}, budi : ${ageBudi}`)

document.getElementById("outputs5").innerHTML = `umur andi & budi 2 tahun lagi , andi : ${umurAndi2thn}, budi : ${umurBudi2thn}`


// solve it 6

document.getElementById("s6").innerHTML = `Solve it 6 : Hari ini ${tanggal}/${bulan}/${tahun}\n
Kemarin ${tanggalKmrn}/${bulan}/${tahun} \n
Besok ${tanggalBsk}/${bulan}/${tahun}`

// solve it 7 
let word = 'Halo Duniaaaaa'
let count = (word.match(/a/g) || []).length
// let count  =  Math.split('a').length -1)
let jawaban3 = `total ada ${count}`
console.log(jawaban3)
document.getElementById("s7").innerHTML = `Solve it 7 : \n total ada ${count}`

// solve it 8 (blm kelar)
let va = 60;
let vb = 40;
let jarak = 120;
let berangkat = 9 ;

let hitungJ = jarak / (va+vb) // 1.2
let waktu = (hitungJ * 60) // 72
let menit = waktu - 60 // 12
let jam2 = (waktu - 12) / 60  // 1
let total2 = berangkat + jam2 + menit
console.log(`${menit} menit, ${jam2} ,${berangkat} berangkat `)
let tabrakan = berangkat + jam2
console.log(`${tabrakan} : ${menit}`)
document.getElementById("outputs8").innerHTML =`Tabrakan pada Pukul : ${tabrakan} : ${menit}`



// solve it 9 

var random = Math.floor(Math.random()*100)
console.log(random)
document.write(`Solve it 9 \n  Random Number : ${random}`)


//Tugas Tambahan 1 
var apple = prompt('Masukan Jumlah Apple');
var grape = prompt('Masukan Jumlah Grape');
var orange = prompt('Masukan Jumlah Orange')

var hargaAp = apple * 10000
var hargaGr = grape * 15000
var hargaOr = orange * 7500;
var total= hargaAp + hargaGr + hargaOr
alert(`Tugas Tambahan 1 : Detail Belanja : \n ${apple} apple  x 10000 \n, ${grape} grape x 15000 \n  ${orange} orange x 7500 \n \n Anda Harus Membayar : apple = ${hargaAp} grape = ${hargaGr} orange = ${hargaOr} \n 
total : ${total}`)
document.getElementById("tambahan-1").innerHTML = `Tugas Tambahan 1 : Detail Belanja : \n ${apple} apple  x 10000, ${grape} grape x 15000, ${orange} orange x 7500, \n Anda Harus Membayar : apple = ${hargaAp}, grape = ${hargaGr}, orange = ${hargaOr} \n 
total : ${total}`

//bikin stock buat buah tentuin sendiri. kalo melebihi , output jumlah apel dibuat 0, 
// masukan jumlah apel, anggur , orange, gak dibolehin 0, kalo 0 error cancel
// jumlah uang ygn kita punya
// kembalian, kalo uang kurang transaksi batal, karna uang kurang
// kalo uang pas output terimakasih/
// kalo uang lebih berarti ada output kembalian




// aplikasi parkir
// masuk parkir
// selesai
// total parkir berapa lama harus pake settingan jam

//upgrade tambahkan jam pagi/malam, gunakan if 

var masuk = prompt('Silahkan Masukan Jam Masuk Parkir')
var keluar = prompt('Silahkan Masukan Jam keluar Parkir')
var bayar = keluar - masuk;
var hitung = bayar * 2000;
alert(`Anda Parkir Selama ${bayar} Jam, Anda Harus Membayar ${hitung}`)

document.getElementById("tambahan-2").innerHTML = `Tugas Tambahan 2 : Anda Parkir Selama ${bayar} Jam, Anda Harus Membayar ${hitung}`



// Math.split('a').length -1)