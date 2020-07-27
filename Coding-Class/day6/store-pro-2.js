var namaBuah = ['apple', 'grape', 'orange']
var totalBuah = [] // tempat nyimpen hasil dari brp buah yang dibeli line 29
var deleteBuah
var daftarBuahBaru = ''
// var buahconcate = []
var jumlahKurang
var stockBuah = [5, 5, 5];
var welcoming = ['Pemilik', 'Pembeli', 'EXIT']
var hargaBuah = [5000, 7500, 10000]
var angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var welcome = true;

var welcome2 = parseInt(alert(`Selamat Datang di GorillaStore`))
// var login = parseInt(prompt(`Anda login Sebagai ?\n 1.Pemilik Toko\n2.Customer\n3.EXIT`))
while (welcome) {
    var login = parseInt(prompt(`Anda login Sebagai:\n 1.Pemilik Toko\n2.Customer\n3.EXIT`))
    // 1 : pemilik toko
    if (login == 1) {
        var choice = prompt(`Apa Yang Ingin Anda Lakukan: \n1.Tambah Buah: \n2.Kurang Buah\n3.Hapus Buah\n4.List Buah\n5.EXIT`)
        while (!(choice >= 1 && choice <= 5)) {
            choice = parseInt(prompt(`Wrong Answer!,Apa Yang Ingin Anda Lakukan: \n1.Tambah Buah: \n2.Kurang Buah\n3.Hapus Buah`))
            console.log(choice)
         }
         if (choice == 1) {
            // untuk Nambah Buah
            var tambahNamaBuah = prompt(`Anda Ingin Menambahkan Buah apa ? `).toLocaleLowerCase()

            namaBuah.push(tambahNamaBuah)


            var tambahBuah = parseInt(prompt(`Anda Ingin Menambahkan Berapa buah:`))
            // while(tambahBuah !== angka[i]){
            //    tambahBuah = parseInt(prompt(`Harus Input Angka, nda Ingin Menambahkan Berapa buah:`))
            // }
            stockBuah.push(tambahBuah)

            var hargaTambahBuah = parseInt(prompt(`Berapa harga Buah: ${tambahNamaBuah}:`))
            hargaBuah.push(hargaTambahBuah)
            alert(`Anda Berhasil Menambahkan ${tambahBuah} ${tambahNamaBuah} : Rp ${hargaTambahBuah}`)
            console.log(namaBuah, stockBuah, hargaBuah)
         } else  if ( choice == 2) { 
            // untuk ngurangin Buah
               //bikin list nama Buah
               var listJual2 = ''
            for (i = 0; i < namaBuah.length; i++) {
                // test += `nomor: ${i+1}  ${namaBuah[i] }`
                listJual2 +=  (i + 1)+'.' + ' ' + namaBuah[i] + ' ' + 'stock : ' + stockBuah[i] + ', ' + 'Harga : ' + ' ' + hargaBuah[i] + '\n'
                
             }
            //  daftarBuahBaru.push(listJual2)
              deleteBuah = prompt(listJual2)
            jumlahKurang =parseInt(prompt(`Anda Ingin Mengurangi Berapa Buah:`))

            //   console.log(deleteBuah + 'ini delete buah')
              for(i=0; i<stockBuah.length; i++){
                // console.log(stockBuah[i])
                // console.log(stockBuah[i])
                    // console.log(i)
                    // test += stockBuah[i]
                    var kurangBuah = deleteBuah-1
                    if(kurangBuah === i){
                        var hitung = parseInt((stockBuah[i] - jumlahKurang))
                        stockBuah.splice(i,1,hitung)
                        
                        // alert(stockBuah + namaBuah)

                        console.log(hitung + ' ini hasil hitung')
                        console.log(stockBuah)
                        
                        if(jumlahKurang >= stockBuah[i]){
                            alert(`Anda berhasil Mengurangi  sekarang stock buah ada ${stockBuah[i]}`)
                        }else {
                            alert('Tolong Masukan angka')
                            
                        }
                        // stockBuah.splice(i,1,hitung)
                    }
                  }


         } else if (choice == 3 ){ // 3. MENGHAPUS BUAH 
            // untuk ngehapus buah, kalo ngehapus buah berarti jg ngehapus stock buah dan harga buah
            // alert('anda berhasil Masuk ke Hapus buah')
            var namaBuahHapus = []
            for(i=0; i<namaBuah.length; i++){
               // namaBuahHapus += namaBuah[i] + ' '
               namaBuahHapus += ` ${(i+1)}. ${namaBuah[i]}`
           }

             var deleteBuah2 = prompt(`Anda Ingin Menghapus Buah apa ?\n${namaBuahHapus} `)
             console.log(hapusBuah)
              // // namaBuah.pop(kurangNamaBuah)
              for(i=0; i<stockBuah.length; i++){
                var hapusBuah = deleteBuah2-1
               if(hapusBuah === i){
                  var menghapusBuah = namaBuah.splice(i,1)
                  var menghapus = stockBuah.splice(i,1)
                  var menghapusUang = hargaBuah.splice(i,1) 
                   console.log(namaBuah)
                   console.log(stockBuah)
                   console.log(hargaBuah)
                   console.log(hapusBuah)
                   alert(`Anda Berhasil Menghapus`)
                   
               }
           }
  
           

         }else if (choice == 4){
             // List Buah
            var listBuah = ''
            for (i = 0; i < namaBuah.length; i++) {
               // test += `nomor: ${i+1}  ${namaBuah[i] }`
               listBuah += 'No:' + (i + 1) + ' ' + namaBuah[i] + ' ' + 'stock : ' + stockBuah[i] + ' ' + 'Harga : ' + ' ' + hargaBuah[i] + '\n'

            }
            alert(listBuah)
           

         }else{
            // welcome = false
            alert(`Anda Memilih Keluar Dari Toko`)
            welcome = false
        }



    } else if (login == 2) {
        // MASUK KE STORE
        alert(`Anda Berhasil Masuk ke Gorilla-Store`)
        var menuBuyer = parseInt(prompt(`What Do You Want:\n1.List Buah\n2.Membeli Buah\n3.Total Belanja\n4.Bayar\n5.Exit`))
        while (!(menuBuyer >= 1 && menuBuyer <= 5)) {
            
            menuBuyer = parseInt(prompt(`What Do You Want:\n1.List Buah\n2.Membeli Buah\n3.Total Belanja\n4.Bayar\n5.Exit`))
            console.log(menuBuyer)

        }
        if (menuBuyer == 1) {
            // menu List Buah
            var listBuah = ''
            for (i = 0; i < namaBuah.length; i++) {
               // test += `nomor: ${i+1}  ${namaBuah[i] }`
               listBuah += 'No:' + (i + 1) + ' ' + namaBuah[i] + ' ' + 'stock : ' + stockBuah[i] + ' ' + 'Harga : ' + ' ' + hargaBuah[i] + '\n'

            }
            alert(listBuah)

        } else if (menuBuyer == 2) {
            // Menu Beli Buah
            var listBuah = ''

            for (i = 0; i < namaBuah.length; i++) {
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
            alert(`Anda berhasil Menambahkan ${namaBuah[(buahApa-1)]} ke Cart,`)
            stockBuah[(buahApa-1)]-=brpBuah
            console.log(stockBuah[(buahApa-1)])
            // login = 2

        } else if (menuBuyer == 3) {
            // Menu TOTAL BELANJA
            var priceTot = 0;
            // for (i = 0; i < hargaBuah.length; i++) {
            for (i = 0; i < totalBuah.length; i++) {
                console.log(hargaBuah[i] + ' Harga Buah')
                // console.log(totalBuah + ' ini Total Buah')
                console.log(totalBuah[i] + ' Total Buah')
                priceTot += parseInt(hargaBuah[i] * totalBuah[i])
                console.log(priceTot)

            }
            console.log(hargaBuah[i] + ' Harga Buah')
            alert(`Total Belanjaan Anda Rp.${priceTot}, Kembali Ke Menu dan Pilih Pembayaran`)
        } else if(menuBuyer == 4 ){
            // MENU PEMBAYARAN
            priceTot = 0
            for (i = 0; i < totalBuah.length; i++) {
                console.log(hargaBuah[i] + ' Harga Buah')
                // console.log(totalBuah + ' ini Total Buah')
                console.log(totalBuah[i] + ' Total Buah')
                priceTot += parseInt(hargaBuah[i] * totalBuah[i])
                console.log(priceTot)

            }

            var uangCust = prompt(`Total Belanjaan Anda : ${priceTot}, Silahkan Masukan uang Anda:`)
                var kembalian = (uangCust - priceTot)
                if(uangCust<priceTot){
                    uangCust2 = parseInt(prompt(`uang Anda Kurang, Total Belanjaan ${priceTot}`))
                    while(uangCust2<priceTot){
                        uangCust2 = parseInt(prompt(`uang Anda Kurang, Total Belanjaan ${priceTot}, Kembali Ke Menu`))
                    }
               
                }else if (uangCust == priceTot){
                    alert('Uang anda Pas, Terimakasih Telah Berbelanja! Stay Health!')
                }else {
                    alert(`Terimakasih Telah berbelanja\n 
                    kembalian anda Rp.${kembalian}, total Belanjaan Anda Rp.${priceTot}`)
                }

        }else if(menuBuyer == 5 ){
            // MENU EXIT
            alert(`Anda Memilih Keluar Dari Toko`)
            welcome = false
        }


    } else if (login == 3) {
        alert('Anda Memilih Keluar Dari Toko')
        welcome = false
    } else {
        alert('Wrong Input!, Please Read The Information')
    }

}

/*
update ditambah confirm. 
bikin looping lagi pas di cart buah. misal udh nambah buah apel, trus masuk ke beli buah trus pilih apel lagi. nanti yg muncul di list tetap apel hanya 1 tapi total buah yg dibeli nambah 
for(let j=0; j<namaBuah.length; j++){
    if(stockBuah[j]==namaBuah[pilihanBelanja-1]){
        indexcart = j
    }
}
*/
