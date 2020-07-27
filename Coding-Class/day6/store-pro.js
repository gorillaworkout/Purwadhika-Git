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

// var listJual = ''
// var listJual2 = ''

var welcome = true;
var totalBuah = [] // buat banyaknya buah yang di beli pas di push

var welcome2 = parseInt(alert(`Selamat Datang di GorillaStore`))
while (welcome) {
   // pemilik toko  : 1.tambah buah, 2menghapus buah 3. exit
   //pembeli : 3.belanja, 4. list buah

   var login = parseInt(prompt(`Anda login Sebagai ?\n 1.Edit Toko\n2.Membeli\n3.EXIT`))
   // 1 : pemilik toko
   if (login == 1 || login == 2) {
      if (login == 1) {

         var choice = prompt(`Apa Yang Ingin Anda Lakukan: \n1.Tambah Buah: \n2.Kurang Buah\n3.Hapus Buah`)
         // console.log(choice)
         while (!(choice >= 1 && choice <= 3)) {
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

              console.log(deleteBuah + 'ini delete buah')
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
                            alert(`Anda Mengurangi Melebihi Stock Buah Yang Tersedia, stock buah ada ${stockBuah[i]}`)
                        }else {
                            alert('Tolong Masukan angka')
                            
                        }
                        // stockBuah.splice(i,1,hitung)
                    }
                  }


         } else { // 3. MENGHAPUS BUAH 
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
                   
               }
           }
  
           

         }


      } else { // 2.login
         //Masuk ke Store
         alert(`Anda Berhasil Masuk ke Gorilla-Store`)
         var menuBuyer = parseInt(prompt(`What Do You Want:\n1.List Buah\n2.Membeli Buah\n3.Total Belanja\n4.Bayar`))
         // console.log(menuBuyer)
         while (!(menuBuyer >= 1 && menuBuyer <= 4)) {
            menuBuyer = parseInt(prompt(`Wrong Answer!\n1.List Buah\n2.Membeli Buah\n3.Total Belanja`))
         }
         //Menu List Buah
         if (menuBuyer == 1) {
            // var  listBuah = alert(`List Buah\n ${namaBuah},${stockBuah},${hargaBuah}`)
            var listBuah = ''
            for (i = 0; i < namaBuah.length; i++) {
               // test += `nomor: ${i+1}  ${namaBuah[i] }`
               listBuah += 'No:' + (i + 1) + ' ' + namaBuah[i] + ' ' + 'stock : ' + stockBuah[i] + ' ' + 'Harga : ' + ' ' + hargaBuah[i] + '\n'

            }
            alert(listBuah)

               //Menu Beli Buah
         } else if (menuBuyer == 2) {
            var listJual = ''
               // masih bug pas beli buah kedua.
            for (i = 0; i < namaBuah.length; i++) {
               // test += `nomor: ${i+1}  ${namaBuah[i] }`
               listJual +=  (i + 1)+'.' + ' ' + namaBuah[i] + ' ' + 'stock : ' + stockBuah[i] + ', ' + 'Harga : ' + ' ' + hargaBuah[i] + '\n'
               
               
               
            }
            
            var belanjaan = prompt(listJual)
            console.log(belanjaan + ' ini hasil dari belanjaan') 
         // for(i=0; i<alphabet.length; i++){
         //    if(belanjaan == alphabet[i])
         // }
               buahBeli.push(belanjaan)
           
            console.log(belanjaan)
            // misal ambil apel = 1; 
            
            // ERROR LOOPING nama buah gak sesuai yg dibuah beli
            for (i = 0; i < buahBeli.length; i++) {
               if (belanjaan == buahBeli[i]) {
                  // var namaBuah = ['apple','grape','orange']
                  var daftarBelanja = parseInt(prompt('Anda Ingin Membeli ' + ' Berapa:' + (namaBuah[i]) + ':'))
                  totalBuah.push(daftarBelanja)
                 
             
                  
                  // console.log(cartBelanja)
                  // break;
               }

               console.log(namaBuah[i] + ' ini belanjaan '+ belanjaan)

            }
            
            // console.log(totalBuah) 
            // Total Belanja
         } else if (menuBuyer == 3) {
            var priceTot = 0;
            // for (i = 0; i < hargaBuah.length; i++) {
            for(i=0; i<buahBeli.length; i++){

               console.log(hargaBuah[i])
               // console.log(totalBuah + ' ini Total Buah')
               console.log(totalBuah[i])
               priceTot += parseInt(hargaBuah[i] * totalBuah[i])
               console.log(priceTot)

               // }

            }
            alert(`Total Belanjaan Anda Rp.${priceTot}, Kembali Ke Menu dan Pilih Pembayaran`)
            // console.log(priceTot)
            // menu Bayar
         } else {
            // alert('Anda Masuk Ke menu pembayaran')

            var uangCust = prompt(`Total Belanjaan Anda : ${priceTot}, Silahkan Masukan uang Anda:`)
              var kembalian = (uangCust - priceTot)
            if(uangCust<priceTot){
               uangCust=parseInt(prompt(`uang Anda Kurang, total Belanjaan ${priceTot}`))
            }else if (uangCust == priceTot){
               alert('Uang Anda Pas, Terimakasih Telah Berbelanja! Stay Health')
            }else {
               alert(`Terimakasih Telah Berbelanja, kembalian anda Rp.${kembalian}, total Belanjaan anda ${priceTot}`)
            }
            // var kembalian = (uangCust - priceTot)
            // for (i = 0; i < kembalian.length; i++) {
            //          if(uangCust<=kembalian[i])
            // }
            
         //   if(uangCust<=priceTot){
         //      alert('testing')
         //   }

         }

      }
   } else if (login == 3) {
      alert('Anda Telah Keluar Dari toko')
      welcome = false
   } else {
      alert('Wrong Input! Please Read The Information!! ')
   }

   //  var welcome =  parseInt(prompt(`Apakah Anda Ingin Belanja ? pilih\n 1.Belanja\n2.Tambah Buah\n3.Menghapus Buah\n4.List Buah\n5.exit!!!`))
   //  alert(`${welcome}`)



}