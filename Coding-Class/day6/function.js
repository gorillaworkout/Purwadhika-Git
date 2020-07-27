function myFun(){
    console.log('dunia halo')
}
// myFun()

var test=(nama)=>{
    console.log('aja aja hello' + nama)
    return nama
}

// test('karina')

// var simpenfunc = test('bayu')
// console.log(simpenfunc)

let jumlahkan=(arr)=>{
    var total=0;
    for(let i=0; i<arr.length; i++){
        total+=arr[i]
    }
    return total
}

// jumlahkan(5,5,5)
// console.log(jumlahkan([1,2,3]))

// function kali(x){
//     return  x < 2 ? 1 : x*3() 
//     /*
//     // cara bacanya jika x kurang dari 2, MAKA 1 kalau bukan berarti  x*tiga()
//     // sama kaya if(x<2){
//       //  return 1
//       */
    

// }

// function tiga(){
//     return 3
// }
// console.log(kali(3))
// console.log(jumlahkan([1,2,3]))


var b  = 5;
var c = b%2==1 ? 'ganjil':'genap'

var d = b || 'belum bayar'

// console.log(d)

// var set = setInterval(waktu,5000)

// function waktu(){
//     console.log('Sudah 5 detik')
//     clearInterval(set)
// }


// bikin timer
var angka=0;
var y = setInterval(itung,1000)
function itung(){
    angka++
    if(angka>5){
        console.log('udahan')
        clearInterval(y)
    }else{
        console.log(angka)
    }
}

var dataBayu = {
    nama:'Bayu Darmawan',
    umur:23,
    pekerjaan: 'Hampir Programmer'
}
console.log(dataBayu.pekerjaan) // cara 1
console.log(dataBayu['nama'])


/*
PR
bikin function pas dimasukin itu huruf nya kecil
pas di return udah jadi huruf kapital

terus dibalik. pas masukin huruf besar outputnya jadi kecil

PR looping : halo dunia
misal pas di looping huruf H berarti yang keluar K
kenapa K , karna H - > I J K 
3 huruf setelah huruf H

*/


/* soal codeWARS

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

kerjakan di function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
}


sample test var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];
              
Test.expect(countSheeps(array1) == 17, "There are 17 sheeps in total")


*/
