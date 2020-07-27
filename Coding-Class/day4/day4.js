
var x ='';
for(i=0; i<5; i++){
    x += '*'
}
// console.log(x)
/*
i=0; -> i(0) <5= true -> execute code *-> i++
i=1; -> i(1) <5= true -> execute code *-> i++
i=2; -> i(2) <5= true -> execute code *-> i++
sampe 5
*/


var z = '';
for(i=0; i<5; i++){
    for(j=0; j<i; j++){
        z += '*'
    }
    z += '\n'
}
console.log('Solve it 16\n' + z)

var z1 = '';
for(i=0; i<=9; i++){
    for(j=0; j<=9; j++){
        z1 += '*'
        if((i==j)){
           break;
        }else if ((i+j)==8){
           break;
        }

    }
    z1 += '\n'
}

console.log(`solve it 17\n${z1}`)
*/


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















