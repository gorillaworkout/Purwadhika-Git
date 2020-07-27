// do {
//     var welcome = parseInt(alert(`Selamat Datang di GorillaStore`))
//     var welcome2 = parseInt(prompt(`Anda Ingin Membeli:\n 1.Yes\n2.No`))
//     if(!(welcome2 ==1 || welcome2 ==2)){
//         alert('Pilih Yes / No, Ketik dalam Angka')
//     }
// }while(welcome2 ==1 || welcome2 == 2){

//     var apple = prompt('Masukan Jumlah Apple');
//     var grape = prompt('Masukan Jumlah Grape');
//     var orange = prompt('Masukan Jumlah Orange');
    
//     var stockApple = 3;
//     var stockGrape = 10;
//     var stockOrange = 10;  

// }

var welcome2 = true;
while(welcome2){
    var welcome = parseInt(alert(`Selamat Datang di GorillaStore`))
    var welcome2 = parseInt(prompt(`Apakah Anda Ingin Belanja ?\n 1.Yes\n2.No`))

  
    
    var stockApple = 5;
    var stockGrape = 5;
    var stockOrange = 5;     

    if(welcome2 % 2 ===1){
        alert(`Anda Berhasil Masuk ke store`)
        var apple = prompt('Masukan Jumlah Apple');
        // if(apple>=stockApple){
        //     apple = prompt('Masukan Jumlah Apple')
        //     console.log(apple)
        // }
        while(apple >= stockApple){
            apple = prompt(`Anda Memasukan ${apple} Melebihi Kapasitas Toko, toko Hanya mempunyai ${stockApple}`)
        }
        var  grape = prompt('Masukan Jumlah Grape');
        while(grape>=stockGrape){
            grape = prompt(`Anda Memasukan ${grape} Melebihi Kapasitas Toko, toko Hanya mempunyai ${stockGrape}`)
        }
        var orange = prompt('Masukan Jumlah Orange')
        while(orange>=stockOrange){
            var orange = prompt(`Anda Memasukan ${orange} Melebihi Kapasitas Toko, toko Hanya mempunyai ${stockOrange}`);
        }
        var hargaAp = parseInt(apple * 10000)
        var hargaGr = parseInt(grape * 15000)
        var hargaOr = parseInt(orange * 7500); 
        var totalBelanja = hargaAp + hargaGr + hargaOr   
       
        var uangCust = parseInt(prompt(`Masukan Uang Anda:`))
        var kembalian = uangCust - totalBelanja 
            if(uangCust<=totalBelanja){
                uangCust=parseInt(prompt(`uang Anda Kurang, total Belanjaan ${totalBelanja}`))
            }else if (uangCust ==totalBelanja){
                alert('Uang Anda Pas, Terimakasih Telah Berbelanja! Stay Healt')
            }else{
                alert(`Terimakasih Telah Berbelanja! Anda membeli\n 
                ${apple} Apple = ${apple} x 10.000
                ${grape} Grape = ${grape} x 15.000
                ${orange} Orange = ${orange} x 7500
                Total Belanjaan anda : ${totalBelanja}
                Kembalian anda ${kembalian}`)
            }
           

    }
    else{
        // alert(`Anda Tidak Jadi Belanja`)
        welcome2 = confirm(`Anda Tidak Jadi Belanja`)
        // welcome2 = confirm ('Apakah Anda ingin Belanja Lagi?')
        welcome2 = false;
        
    }
    // welcome2 = confirm ('Apakah Anda ingin Belanja Lagi?')
    // console.log(welcome2)
}

// var lagi = true;
// while(lagi){
//     var welcome = parseInt(alert(`Selamat Datang di GorillaStore`))
   
//     var lagi = parseInt(prompt(`Apakah Anda Ingin Membeli ?\n 1.Yes\n2.No`))
    
//         // var angka = prompt('masukan angka:')
//         if( lagi % 2=== 0 ){ // 1
//             alert(lagi + ' adalah angka genap') // 2
//      //        lagi = confirm('coba lagi') // 3
//      //        var angka = prompt('masukan angka:') // 4
            
            
//         }else { // 2
//             alert(lagi + ' adalah angka ganjil')
//      //        lagi = confirm('coba lagi')
//      //        var angka = prompt('masukan angka:')
//         }
       
//         lagi = confirm ('coba lagi' );
//      //    var angka = prompt('masukan angka:')
     
//      }
// console.log(lagi)

var namaBuah = ['apple','grape','orange']
 var stockBuah = [5,5,5];
 var welcoming = ['Pemilik','Pembeli','EXIT']
 var hargaBuah = [10000,15000,7500]
 var angka = [0,1,2,3,4,5,6,7,8,9]
 var welcome = true; 
var test = ''
 for(i=0; i<namaBuah.length; i++){
    // test += `nomor: ${i+1}  ${namaBuah[i] }`
    test += 'Nomor:' + (i+1) + namaBuah[i]+'\n'
 }
 console.log(test)
