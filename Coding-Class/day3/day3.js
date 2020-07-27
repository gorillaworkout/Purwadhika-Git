/*
let alaskaki = 'sandal';
let warna = 'biru';
let harga = 'discount';
switch(true) {
    case (alaskaki == 'sepatu' && warna == 'merah' && harga == 'murah') :
        console.log('saya suka sepatu merah dan murah.');
        break;
    case (alaskaki == 'sepatu' && warna == 'merah' && harga == 'mahal'):
        console.log('saya suka sepatu merah yang mahal')
        break;
    case (alaskaki == 'sepatu' && warna == 'biru' && harga == 'murah'):
        console.log('saya suka  sepatu biru murah')
        break;
    case (alaskaki == 'sepatu' && warna == 'biru' && harga =='mahal' ):
        console.log('saya suka sepatu biru yang mahal.');
        break;
    case (alaskaki == 'sandal' && warna == 'merah' && harga =='murah'):
        console.log('saya suka sandal merah yang murah')
        break;
    case (alaskaki == 'sandal' && warna == 'merah' && harga =='mahal'):
        console.log('saya suka sandal merah yang mahal');
        break;
    case (alaskaki == 'sandal' && warna == 'biru' && harga =='murah'):
        console.log('saya suka sandal biru yang murah');
        break;
    case (alaskaki == 'sandal' && warna == 'biru' && harga == 'mahal'):
        console.log('saya suka sandal biru yang mahal')
        break;
    default:
        console.log('tak suka alas kaki merah / biru')
}

// solve it 10
var angka = prompt('Masukan Angka:')
var bilangan = angka % 2
if(bilangan == 0 ){
   document.write(`${angka} adalah angka Genap`)
}
else if ( bilangan == 1 ){
    document.write(`${angka} adalah angka Ganjil;`)
}else {
    document.write(`${angka} anda bukan memasukan angka`)
}

// switch(true) {
//     case ( bilangan == 0):
//         alert(`${angka} Adalah angka genap`);
//         break;
//     case ( bilangan == 1):
//         alert(`${angka} adalah angka ganjil`);
//         break;
//     default:
//         alert(`${angka} bukan angka`)
// }
*/


// solve it 11 ,12 
/*
let date = new Date()
let bulan = date.getMonth() +1
let hari = date.getDay()
let tanggal = date.getDate()
console.log(tanggal)
var namaHari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumaat','Sabtu']
let tahun = date.getFullYear()
let jam = date.getHours()
let menit = date.getMinutes()
let detik = date.getSeconds()
console.log(jam +  ' : '+menit +  ' : '+parseInt(detik))

var tanggal2 = hari;
if(tanggal2 == 0){
    console.log('Minggu')
    namaHari = 'Minggu'
}else if (tanggal2 == 1){
    console.log('senin')
    namaHari = 'senin'
}else if (tanggal2 == 2){
    console.log('selasa')
    namaHari = 'Selasa'
}else if (tanggal2 == 3){
    console.log('rabu')
    namaHari = 'rabu'
}else if (tanggal2 == 4 ){
    console.log('kamis')
    namaHari = 'kamis'
}else if (tanggal2 == 5){
    console.log('jumaat')
    namaHari = 'jumaat'
}else if (tanggal2 ==6){
    console.log('Sabtu')
    namaHari = 'Sabtu'
}

if(bulan == 1 ){
        document.write(`Saat ini Bulan ${bulan} : Januari, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else if (bulan ==2){
    document.write(`Saat ini Bulan ${bulan} : February, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else if (bulan ==3){
    document.write(`Saat ini Bulan ${bulan} : March, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else if (bulan == 4){
    document.write(`Saat ini Bulan ${bulan} : April, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else if (bulan == 5){
    document.write(`Saat ini Bulan ${bulan} : May,tanggal ${tanggal} hari ${namaHari} Tahun ${tahun}`)
}else if (bulan == 6){
    document.write(`Saat ini Bulan ${bulan} : June, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else if (bulan == 7){
    document.write(`Saat ini Bulan ${bulan} : July, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else if (bulan == 8){
    document.write(`Saat ini Bulan ${bulan} : August, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else if (bulan == 9 ){
    document.write(`Saat ini Bulan ${bulan} : September, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else if (bulan == 10){
    document.write(`Saat ini Bulan ${bulan} : October, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else if (bulan == 11){
    document.write(`Saat ini Bulan ${bulan} : November, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}else{
    document.write(`Saat ini Bulan ${bulan} : December, tanggal ${tanggal} hari ${namaHari} Tahun ${tahun} Pukul \n ${parseInt(jam)} : ${parseInt(menit)} : ${parseInt(detik)}`)
}


*/
















// solve it 13
/*
var weight = prompt('Masukan berat anda : (dalam KG)')
var height = prompt('Masukan tinggi anda : (dalam Meter)')/100

var bmi = weight / (height * height)
console.log(bmi)
var bmio = bmi.toFixed(2)

if(bmio <=18.5){
    document.write(` <br><br>Solve it 13 <br> Berat badan anda kurang, BMI anda ${bmio}`)
}else if (bmio>18.5 && bmio <25){
    document.write(` <br><br>Solve it 13 <br> Berat badan anda Ideal, BMI anda ${bmio}`)
}else if (bmio>=25 && bmio <30){
    document.write(` <br><br> Solve it 13 <br> Berat badan ada Berlebih, BMI anda ${bmio} DIET BRO`)
}else if (bmio>=30 && bmio < 40){
    document.write(` <br><br>Solve it 13 <br>Berat banda anda sangat berlebih, BMI anda ${bmio} , ASLI DIET SEKARANG`)
}else {
    document.write(` <br><br>Solve it 13 <br> OBESITAS!!!!!! BMI LO ${bmio}`)
}
*/

//bikin stock buat buah tentuin sendiri. kalo melebihi , output jumlah apel dibuat 0, 
// masukan jumlah apel, anggur , orange, gak dibolehin 0, kalo 0 error cancel
// jumlah uang ygn kita punya
// kembalian, kalo uang kurang transaksi batal, karna uang kurang
// kalo uang pas output terimakasih/
// kalo uang lebih berarti ada output kembalian


/*
masuk jumlah apel
kalo melebihi jumlah stock ada looping check total buah
balik ke prompt sampai inputnya bener
atau salah input 

kalo masukin jumlah uang trus kurang. looping terus sampe uangnya melebihi total belanjaan
mau belanja lagi atau gak? kalo iya ngulang. kalo enggak berarti berenti
 1. selamat datang
 2. masuk/exit kalo exit udahan
 kalo masuk
 nerusin ke aplikasi buah
 */



var apple = prompt('Masukan Jumlah Apple');
var grape = prompt('Masukan Jumlah Grape');
var orange = prompt('Masukan Jumlah Orange');

var stockApple = 3;
var stockGrape = 10;
var stockOrange = 10;     

if(apple == 0){
    alert(`Anda Memasukan 0 Apple, ${grape} Grape, ${orange} Orange,Pembelian Gagal Karna anda membeli ${apple} Apple`)
    }else if(grape == 0){
    alert(`Anda Memasukan 0 Grape, ${apple} Apple, ${orange} Orange, Pembelian Gagal karna anda membeli ${grape} Grape`)
    }else if (orange == 0){
    alert(`Anda Memasukan 0 Orange, ${apple} Grape, ${grape} Orange, Pembelian Gagal Karna anda membeli ${orange} Orange`)
    }
    // else if(apple >=1 && grape >=1 && orange>= 1)
    else if (apple <= stockApple && grape <=stockGrape && orange<= stockOrange)
    {
        
        var hargaAp = parseInt(apple * 10000)
        var hargaGr = parseInt(grape * 15000)
        var hargaOr = parseInt(orange * 7500); 
            var total = hargaAp + hargaGr + hargaOr    
                var uangPembeli = prompt('Masukan Uang anda:')
            var kembalian = uangPembeli - total
     


        if(uangPembeli < total){
            alert(`Uang Anda Hanya ${uangPembeli}, Harga Buah ${total}Pembelian Gagal, silahkan Ulang dari Awal`)
        }else if ( uangPembeli == total){
            alert('Uang Anda Pas, Terimakasih Telah Berbelanja! Stay Healt')
        }else if (uangPembeli >= total){
            alert(`Terimakasih Telah Berbelanja! Anda membeli\n 
            ${apple} Apple = ${apple} x 10.000\n
            ${grape} Grape = ${grape} x 15.000\n
            ${orange} Orange = ${orange} x 7500\n
            Kembalian anda ${kembalian}`)
        }
}else{
alert(`Anda Membeli  Melebihi Stock yang Ada, 
Stock Apple : ${stockApple}
Stock Grape : ${stockGrape}
Stock Orange : ${stockOrange}
`)
}


//upgrade parkir
// pilihan mobil/motor
// masuk parkir (0-11)
// pagi/malem
//masuk jam keluar
// pagi/ malem
// total jam 
// hitung biaya parkir
//2 jam pertama 10rb, kalo 3 jam 12rb. jam berikutnya 2rb
//2 jam pertama 6rb, kalo 3 jam 7rb, per jam nya 1rb jadi parkir 13 jam : 17000



// var keadaan2 = prompt('Pagi/Malam?') // 2pagi - 5 pagi

var jenisKendaraan = prompt(`Menggunakan : 
1.Mobil\n
2.Motor`)
console.log(jenisKendaraan + 'diatas')

if(jenisKendaraan == 1){
    var mobilMas = parseInt(prompt(`Masuk Parkir Jam : (0-11)`))
    var keadaanMas = parseInt(prompt(`PM/AM
    1.AM
    2.PM`))
    var mobilKel = parseInt(prompt(`Keluar Parkir Jam : (0-11)`))
    var keadaanKel = parseInt(prompt(`PM/AM
    1.AM
    2.PM`))
    
    var  duaJamPertama = 5000;
    var setelahDuaJam = 2000;
        
        if(keadaanMas == keadaanKel){
            var lamaParkirMob = mobilKel - mobilMas // kalo masuk nya sama sama PM
        } else if (keadaanMas == 2 && keadaanKel == 1){ // kalo masuk PM keluarnya AM
            mobilKel +=12;
            var lamaParkirMob = mobilKel - mobilMas
            alert(`parkir selama  ${lamaParkirMob} Jam  `)
        } else if (keadaanMas == 1 && keadaanKel == 2 ){// kalo masuk AM keluarnya PM
            mobilKel +=12
            var lamaParkirMob = mobilKel - mobilMas
            alert(`parkir selama  ${lamaParkirMob} Jam  `)
        }else {
            alert('error pas di if pertama')
        }
        if(lamaParkirMob <=0){
            alert('error lama parkir')
        }else if (lamaParkirMob <=2 && lamaParkirMob >=1){
            var biayaParkirMob = lamaParkirMob * duaJamPertama
            alert(`biaya parkir anda ${biayaParkirMob}, anda parkir Mobil selama ${lamaParkirMob} Jam`)
        }else {
            var biayaParkirMob = (2*duaJamPertama) + (lamaParkirMob-2)*setelahDuaJam
            alert(`biaya parkir anda ${biayaParkirMob}, anda parkir Mobil selama ${lamaParkirMob}Jam`)
        }

} else if (jenisKendaraan == 2) {
    var motorMas = parseInt(prompt(`Masuk Parkir Jam : (0-11)`))
    var keadaanMasMot = parseInt(prompt(`PM/AM
    1.AM
    2.PM`))
    var motorKel = parseInt(prompt(`Keluar Parkir Jam : (0-11)`))
    var keadaanKelMot = parseInt(prompt(`PM/AM
    1.AM
    2.PM`))
    var  duaJamPertamaMot = 3000;
    var setelahDuaJamMot = 1000;

        if(keadaanMasMot == keadaanKelMot) {
            lamaParkirMot = motorKel - motorMas
            alert(`anda parkir selama ${lamaParkirMot} Jam`)
        }else if (keadaanMasMot == 2 && keadaanMasMot == 1){
            motorKel +=12;
              var lamaParkirMot = motorKel - motorMas
            alert(`anda parkir selama ${lamaParkirMot} Jam`)
        }else if (keadaanMasMot == 1 && keadaanMasMot == 2){
            motorKel +=12;
            var lamaParkirMot = motorKel - motorMas
        }else {
            alert('error pas di IF kedua')
        }

        if(lamaParkirMot <=0){
            alert('error pemilhan jam')
        }else if (lamaParkirMot<=2 && lamaParkirMot >=1){
            var biayaParkirMot = lamaParkirMot * duaJamPertamaMot
            alert(`anda parkir Motor selama  ${lamaParkirMot}, biaya ${biayaParkirMot}`)
        }else {
            var biayaParkirMot = (2*duaJamPertamaMot) + (lamaParkirMot-2) * setelahDuaJamMot
            alert(`anda Parkir Motor Selama ${lamaParkirMot}, biaya anda ${biayaParkirMot}`)
        }
}
console.log(jenisKendaraan + 'dibawah')

/*
if(kondisi1 !== kondisi2){
    keluarjam +=12
}else if ( keluarjam <= masukjam && kondisi1 = kodnisi2){
    keluarjam +=24
}
totalJam = keluarjam - masukjam
*/
