// while loop
// var angka = 1;
// while(angka<=10) {
//     document.write(`${angka}`)
//     angka++
// }

// do while loop
// document.write('<br>' + '<br>' + '<br>')
// var angka1 = 1;
// do{
//     document.write(`${angka1}`);
//     angka1++
// } while (angka1<=10)

// document.write('<br>' + '<br>' + '<br>')
// var x;
// for(x=1; x<=10; x++){
//    document.write(x)
// }

// solve it 13
// var noUrut = 'Nomor Urut'
// var urut = 10;
// for(i=0; i<=10; i+=2){
//     console.log(`${noUrut} ${i}`)
// }

// solve it 14

// var angka2 = 20;
// for(i=1; i<=angka2; i+=2){
//     console.log(`Nomor Urut ${i}`)
// }

// loop drawing 1
/*
let z = ''
for (let i=0; i<5; i++){
    z += ' * '
}
console.log(z)

let z1 = '';
for (let i=0; i<5; i++){
    z1 += `* \n`
}
console.log(z1)

let stars = '';
for (let i =0; i<=5; i++){
    stars += `Looping ke ${i}`
    for(let j = 0; j<5; j++){
        stars += ' * '
    }
    stars += '\n'
}

console.log(stars)

let stars2 = '';
for (let i =0; i<5; i++){
    stars2 += `Looping ke ${i}`
    for(let j = 0; j<5; j++){
        stars2 += ' * '
        if(i == j ){
            break; 
        }
    }
    stars2 += '\n'
}
console.log(stars2)

let stars3 = '';
for (let i =0; i<5; i++){
    stars3 += `Looping ke ${i}`
    for(let j = 0; j<5; j++){
        stars3 += ' * '
        if((i+j) ==4 ){
            break; 
        }
    }
    stars3 += '\n'
}
console.log('\n')
console.log(stars3)

let stars4 = '';
for (let i =0; i<9; i++){
    stars4 += `Looping ke ${i}`
    for(let j = 0; j<9; j++){
        stars4 += ' * '
        if((i==j) ){
            break; 
        } else if ((i+j) == 8){
            break;
        }
    }
    stars4 += '\n'
}

console.log(stars4)

// let stars5 = '';
// for (let i =0; i<9; i++){
//     stars5 += `Looping ke ${i}`
//     for(let j = 0; j<9; j++){
//         stars5 += ' * '
//         if((i%j)==0){
//             break; 
//         } 
//         // else if ((i+j) == 8){
//         //     break;
//         // }
//     }
//     stars5 += '\n'
// }

// console.log(stars5)

// solve it 16

let bintang =''

for (i=0; i<6; i++){
    for(j=0; j<6; j++){
        bintang += '* '
        if(i==j){
            break;
        }
    }
    bintang += '\n'
}
console.log(bintang)


//solve it 17
let bintang2 = '';

for(i=0; i<6; i++){
    for(j=0; j<6; j++){
        bintang2 += '* '
        if((i+j)==5){
            break;
        }
    }
    bintang2 += '\n'
}

console.log(bintang2)

// solve it 18

let bintang3 = '';
for(i=0; i<9; i++){
    for(j=0; j<5; j++){
        bintang3 += '* '
        if((i+j)==4){  
            break;
        }
        else if ((j+4)==i){
            break;
        }
    }
    bintang3 += '\n'
}
console.log(bintang3)

// let star3 = '';
// for(i=0;  i<=6; i++){
//     for(i=0; i<=i; i++){
//         star3 += '* '
//     }
//     star3 += '\n'
// }
// console.log(star3)



// solve it 19

let bintang4 = '';
for(i=0; i<10; i++){
    for(j=0; j<10; j++){
        bintang4 += ' * '
        // if((i+10)==j){
        //     break;
        // }
        // else if ((){
        //     break;
        // }
    }
    bintang4 += '\n'
}
console.log(bintang4)

// let bintang5 = '';
// for(i=1; i<=10; i++){
//     for(j=i; j<=10; j++){
//         bintang5 += (i-1)
//     }
//     // for(k=1; k<=i; k++){
//     //     bintang5 += '*'
//     // }
//     bintang5 += '\n'
// }

// console.log(bintang5)

// var soal1 = '';
// for(i=1; i<=5; i++){
//     soal1 += `Looping ke ${i} `
//     for(j=1; j<=i; j++){
//         soal1 += i
//     }
//     soal1 += '\n'
// }


// console.log(soal1) 

// var soal2 = '';
// for(i=1; i<=5; i++){
//     for(j=1; j<=i; j++){
//         soal2 += j
//     }
//     soal2 += '\n'
// }

// console.log(soal2)

// var soal3 = '';
// for(i=5; i>=1; i--){
//     for(j=5; j>=i; j--){
//         soal3 += j;
//     }
//     soal3 += '\n'
// }
// console.log(soal3)


/*
var namaBuah = ['Apple','Grape','Orange','Semangka']
console.log(namaBuah)
var kurangNamaBuah = 'Grape'
var kurangBuah = 3;
var stockBuah = [5,5,5]
for(i=0; i<=namaBuah.length; i++){
    // if (kurangBuah<=stockBuah[i]){
    //     // console.log(namaBuah[i])
    //     stockBuah[i] -= kurangBuah
  
    // //   console.log(stockBuah)
    // //   break;
    //   }else if (kurangBuah >= stockBuah){
    //     stockBuah.splice(i,1)
    //             //    console.log(stockBuah)
    //   }else{
    //     stockBuah[i] = 0;
    //             //    console.log(stockBuah[i])
    //   }
    //   if(kurangNamaBuah == namaBuah[i]){
    //     // console.log(namaBuah[i])
    //     namaBuah.splice(i,1)
    //     // console.log(namaBuah)
    // }
  
    // else{
    //     // console.log(namaBuah[i])
    //     console.log('error')
  
    // }
    //     break;
      // var testing = namaBuah
  if(kurangNamaBuah == namaBuah[i]){
    // console.log(namaBuah[i])
    namaBuah.splice(i,1)
    // console.log(namaBuah)
}

else{
    // console.log(namaBuah[i])
    console.log('error')

}
if (kurangBuah<=stockBuah[i]){
    // console.log(namaBuah[i])
    stockBuah[i] -= kurangBuah

//   console.log(stockBuah)
//   break;
  }else if (kurangBuah >= stockBuah){
    stockBuah.splice(i,1)
            //    console.log(stockBuah)
  }else{
    stockBuah[i] = 0;
            //    console.log(stockBuah[i])
  }
  break;
}
// console.log(namaBuah)
console.log(namaBuah)
console.log(stockBuah)
*/



//  for(i=0; i<namaBuah.length; i++){
//     // test += `nomor: ${i+1}  ${namaBuah[i] }`
//     test += 'Nomor: ' + (i+1) + ' ' + namaBuah[i] + ' ' + 'stock : ' + stockBuah[i]+ ' ' +  'Harga : ' + ' ' +  hargaBuah[i] + '\n'
//  }
//  console.log(test)

//          var priceTot = 0;            
// for(i=0; i<hargaBuah.length;i++){
//     // if(totalBuah[i] == hargaBuah[i]){
//         // priceTot = totalBuah[i] * hargaBuah[i]
//         // console.log(hargaBuah + ' ini Harga Buah')
//         console.log(hargaBuah[i] )
//         // console.log(totalBuah + ' ini Total Buah')
//         console.log(totalBuah[i] )
//         priceTot += parseInt(hargaBuah[i] * totalBuah[i])
//     // }

// }
// console.log(priceTot)




// var arr = ['satu', 'dua', 'apel', 'empat', 'lima']; 
// arr.splice(2,1, 'tiga');

// var test
// var namaBuah = ['apple','grape','orange','semangka','duren']
// var deleteBuah = 1// di storeadvance hasil dari kurangBuah harus diganti jadi angka. ini adalah pas milih buah di jadiin nomor jadi bukan isi nama buah lagi
// var jumlahKurang =  // ini kalo pas prompt mau ngurangin berapa buah
//  var stockBuah = [5,10,20,21,30];
//  var welcoming = ['Pemilik','Pembeli','EXIT']
//  var hargaBuah = [10000,15000,7500,5000,10000]
//  var totalBuah = [3,2,6]
//  var angka = [0,1,2,3,4,5,6,7,8,9]
//  var welcome = true; 
// var test = []
// for(i=0; i<stockBuah.length; i++){
// // console.log(stockBuah[i])
// // console.log(stockBuah[i])
//     // console.log(i)
//     // test += stockBuah[i]
//     var kurangBuah = deleteBuah-1
//     if(kurangBuah === i){
//         var hitung = parseInt((stockBuah[i] - jumlahKurang))
//         stockBuah.splice(i,1,hitung)

//         console.log(hitung + ' ini hasil hitung')
//         console.log(stockBuah)
        
//     }
// }
// console.log(stockBuah[i])
// console.log(deleteBuah)
/* 
25 july 2020
update, mau dibikin kurang buah atau hapus buah
di store-advance


var namaBuah = ['apple','grape','orange','semangka','duren']
console.log(namaBuah)
var deleteBuah = 3// di storeadvance hasil dari kurangBuah harus diganti jadi angka.
var jumlahKurang = 19
 var stockBuah = [5,10,20,21,30];
 var welcoming = ['Pemilik','Pembeli','EXIT']
 var hargaBuah = [10000,15000,7500,5000,10000]
 var totalBuah = [3,2,6]
 var angka = [0,1,2,3,4,5,6,7,8,9]
 var welcome = true; 
var test = []

// var hapusBuah = 1;

var deleteBuah2 = 1
// console.log(stockBuah)
// console.log(hargaBuah)
var namaBuahHapus = []
for(i=0; i<namaBuah.length; i++){
    // namaBuahHapus += namaBuah[i] + ' '
    namaBuahHapus += ` ${(i+1)}. ${namaBuah[i]}`
}
// 0 ; namabuahHapus = namaBuahHapus+ apel
// 1; namabuahhapus + grape

console.log(namaBuahHapus)
var pertanyaan = prompt(`mau beli buah apa?  ${namaBuahHapus}`)




for(i=0; i<stockBuah.length; i++){
    var hapusBuah = deleteBuah2-1
    if(hapusBuah === i){
        var menghapusBuah = namaBuah.splice(i,1)
        var menghapus = stockBuah.splice(i,1)
        var menghapusUang = hargaBuah.splice(i,1)
    }
}

// console.log(hapusBuah) 
//
// console.log(menghapus)
// console.log(namaBuah)
// console.log(stockBuah)
// console.log(menghapusUang)
// console.log(hargaBuah)
*/

var namaBuah = ['apple','grape','orange']
var buahBeli = []
var deleteBuah
var daftarBuahBaru=''
// var buahconcate = []
var jumlahKurang
var stockBuah = [5,5,5];
var welcoming = ['Pemilik', 'Pembeli', 'EXIT']
var hargaBuah = [5000,7500,10000]
var angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var jawaban = 'apple'

// jawaban.split('-')
var alphabetLoop = []
var jawaban2 = jawaban.split('')

// console.log(jawaban2)
for(i=0; i<alphabet.length; i++){
    alphabetLoop += alphabet[i] + ' '
    // console.log(alphabet[i] + ' ini alphabet')
    // console.log(i + ' ini angka')
    if(jawaban2 === alphabet[i]){
        // console.log(jawaban2 + 'dalam looping ')
           console.log(alphabet[i] + ' ini alphabet')
        // console.log(i + ' ini angka')
        console.log(jawaban2)
        
    }
    else{
        console.log('masukan huruf')
    }
}
// console.log(alphabetLoop)
console.log(jawaban2)
console.log(alphabet[i] + 'alphabet')
console.log(alphabetLoop)


// =====================================================
var listBuah = ''
           
for(i=0; i<namaBuah.length; i++){
    listBuah += `${(i+1)}. ${namaBuah[i]} | Stock: ${stockBuah[i]} | Harga: ${hargaBuah[i]}\n `
    // perkiraanBuah = namaBuah[i]
}
    // console.log(listBuah)
    var buahApa = parseInt(prompt('Stock Buah Yang Tersedia\n' + listBuah))
    // console.log(buahApa) // buahApa adalah prompt untuk nanya amu beli buah apa

    // buahBeli.push(buahApa) // buahBeli adalah array untuk menyimpan hasil dari listBuah yaitu angka. di push dari hasil buahApa
    // console.log(buahBeli)




    var brpBuah = parseInt(prompt(`Anda Ingin Membeli Berapa Buah ${namaBuah[(buahApa-1)]}`))
    totalBuah.push(brpBuah)
    console.log(totalBuah)
    // ===============================================