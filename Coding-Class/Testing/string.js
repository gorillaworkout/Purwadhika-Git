
let nama = ' Bayu ';
let usia = 24;
let jomblo = false;
let kerja;

console.log(typeof(nama))
console.log(typeof(usia))
console.log(typeof(jomblo))
console.log(typeof(kerja))
console.log(kerja)


var x = 'halo dunia';

console.log(x.length);
console.log(x.indexOf('Dunia'));
console.log(x.substr(5,3));
console.log(x.slice(5,8))
console.log(x.split(' ')) // buat bikin spasi

var x = 'halo halo halo ' ;
var y = 'DUNIA';
var z = 12345;

console.log(x.toUpperCase())
console.log(y.toLowerCase())

console.log(x.replace('ha', 'mi'));
console.log(x.replace(/ha/g, 'mi'))

console.log(z.toString());
console.log(typeof(z.toString()))


parseInt('123')
parseFloat('123')

let aa = parseInt('123')
let b = parseFloat('123');
let c = parseInt('1234.5678'); 
let d = parseFloat('1234.5678'); 
let e = parseInt('Halo Dunia'); 
let f = parseFloat('Halo Dunia');

console.log(aa)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)

console.log(typeof(aa))
console.log(typeof(b))
console.log(typeof(c))
console.log(typeof(d))
console.log(typeof(e))
console.log(typeof(f))


console.log(Math.PI);
 console.log(Math.abs(-4.7)); 
 console.log(Math.pow(8, 2)); // pangkat
  console.log(Math.sqrt(64)); 
  console.log(Math.cbrt(8));


  console.log(Math.round(4.7)); // bulat ke atas
   console.log(Math.round(4.4));  // bulat ke bawah
   console.log(Math.floor(4.7));  // bulat kebawah
   console.log(Math.ceil(4.4)); // bulat keatas


   console.log(Math.random());  // random angka decimal
   console.log(Math.max(1,3,5)); // angka terbesar
   console.log(Math.min(1,3,5)); // angka terkecil

   let a = new Date()
   // console.log(a.getFullYear())

// console.log(a.getMonth())
// console.log(a.getDate())
// console.log(a.getDay())
// console.log(a.getHours())
// console.log(a.getMinutes())
// console.log(a.getSeconds())
// console.log(a.getMilliseconds())



// SOAL 2
function soal() {
   let soal = prompt('Silahkan Masukan Angka Berapapun')
   let  kuadrat = Math.pow(soal,2)
   alert(`Kuadrat Dari ${soal} = ${kuadrat}`)
}


var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = now - start;
var oneDay = 1000 * 60 * 60 * 24;
var day = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);

// SOAL 5

/*
0,4 = 4/10 : 2
2 : 5
andi : 2n
budi : 5n
2n + 5n = 49;
7 n = 49
n = 49 : 7
n = 7
andi : 2 * 7 : 14
budi : 5*7 = 35
2 tahun : 16, 37
*/

let totalUmur = 49
let rasio = 0.4 * 10

let andi = rasio / 2;
let budi = 10/2
let tebak = 49 / (parseInt(andi) + parseInt(budi))
let umurA = tebak * andi + 2;
let umurB = tebak * budi + 2;

// soal tanggalan

let date = new Date()
let tanggal = date.getDate()
let tanggalKmrn = date.getDate() -1
let tanggalBsk = date.getDate() +1
let bulan = date.getMonth()
let tahun = date.getFullYear()
console.log('Sekarang ' + tanggal, bulan, tahun)

console.log('Kemarin '+ tanggalKmrn, bulan,tahun)

console.log('Besok ' + tanggalBsk,bulan,tahun)




// function fungsiKuLagi() {
//    var total = 0;
//    let kalimat1 = document.getElementById("kalimat1").value;
//    let kalimat2 = document.getElementById("kalimat2").value;
//    for(var i = 0; i <=kalimat1.length; i++) {
//        if(kalimat1.charAt(i) == kalimat2){
//            total +=1
//        }
//    }

//    document.getElementById("output5").innerHTML = `huruf ${kalimat2} ada ${total}`
//    console.log(total)
//    console.log(kalimat1)
//    console.log(kalimat2)

// }

/*
buatlah sebuah fungsi yang didalamnya ada variable kosong
buatlah fungsi pertama yang menghasilkan nilai dari html
buatlah fungsi kedua yang menghasilkan nilai dari html
looping jika i = 0, i kurang dari total banyaknya fungsi pertama.  i++
jika fungsi pertama.charAt(i) sama dengan fungsi kedua
maka tambahkan ke variable kosong + 1


)

function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

console.log(secondsToHms(360))




// soal Jarak


VA = 60km     VB = 40km
SA = 60t      SB = 40t
jarak = 60 + 40
120 = 100
120 = 100
t = 120/100 = 1.2jam
t = 1 jam 12 menit
berangkat : jam 9 + 1 jam 12 menit
tabrakan : jam 10.12
*/



// random = Math.floor(Math.random()*100)
// // console.log(random)
// // document.getElementById("angka").innerHTML= random;

// document.write(random)

/* tugas facebook 
let hasil = 0
while(true){
let angka = prompt('masukan angka')
if(angka == '='){
break
}
hasil += parseInt(angka)
console.log(hasil)
}

*/




