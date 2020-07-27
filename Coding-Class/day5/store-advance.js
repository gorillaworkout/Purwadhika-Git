// let x = [40,100,1,5,25,10];
// x.sort(function(a,b){
//     return a-b
// })
// console.log(x)

// var number = [2,3,59,10,3,5]
// var simpan = 0
// for(let i = 0; i<number.length; i++){
//     simpan += number[i]
//     // console.log(number[i])
// }

// console.log(simpan)

// var buah =['anggur','apel','semangka'];
// for(var i=0; i<buah.length; i++){
//   var namabuah = buah

// }
// // console.log(buah)
// console.log(namabuah)

var namaBuah = ['apple','grape','orange']
var buahBeli = []
// var buahconcate = []
var stockBuah = [5,5,5];
var welcoming = ['Pemilik', 'Pembeli', 'EXIT']
var hargaBuah = [5000,7500,10000]
var angka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
console.log(alphabet)
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
         console.log(choice)
         while (!(choice >= 1 && choice <= 3)) {
            choice = parseInt(prompt(`Wrong Answer!,Apa Yang Ingin Anda Lakukan: \n1.Tambah Buah: \n2.Kurang Buah`))
            console.log(choice)
         }
         if (choice == 1) {
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

            
            var kurangNamaBuah = prompt(`Anda Ingin Mengurangi Buah apa ? `)
            var kurangBuah = parseInt(prompt(`Anda Ingin Mengurangi Berapa Buah:`))


            // namaBuah.pop(kurangNamaBuah)
            for (i = 0; i <= namaBuah.length; i++) {
               // var testing = namaBuah
               if (kurangNamaBuah == namaBuah[i]) { // Ngurangin Buah
                  console.log(namaBuah[i])
                  namaBuah.splice(i, 1)
                  console.log(namaBuah)
               } 
      
            } // ngurangin stock buah
            if (kurangNamaBuah == 'apple') { // masih bug
               stockBuah[0] = stockBuah[0] - kurangBuah
               console.log(stockBuah)
            } else if (kurangNamaBuah == 'grape') {
               stockBuah[1] = stockBuah[1] - kurangBuah
               console.log(stockBuah)
            } else if (kurangNamaBuah == 'orange') {
               stockBuah[2] = stockBuah[2] - kurangBuah
               console.log(stockBuah)
            } else {
               console.log('error pas di kurang buah')
            }


         } else {
            alert('anda berhasil Masuk ke Hapus buah')
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
         //    var listJual = ''

         //    for (i = 0; i < namaBuah.length; i++) {
         //       // test += `nomor: ${i+1}  ${namaBuah[i] }`
         //       listJual +=  (i + 1)+'.' + ' ' + namaBuah[i] + ' ' + 'stock : ' + stockBuah[i] + ', ' + 'Harga : ' + ' ' + hargaBuah[i] + '\n'
               
         //    }
            

         //    var belanjaan = prompt(listJual)
         // // for(i=0; i<alphabet.length; i++){
         // //    if(belanjaan == alphabet[i])
         // // }
         //       buahBeli.push(belanjaan)
           
         //    console.log(belanjaan)
         //    // misal ambil apel = 1; 
         //    var brpBuah = parseInt(prompt(`Anda Ingin Membeli Berapa Buah ${namaBuah[(belanjaan-1)]}`))
         var listBuah = ''
           
         for(i=0; i<namaBuah.length; i++){
             listBuah += `${(i+1)}. ${namaBuah[i]} | Stock: ${stockBuah[i]} | Harga: ${hargaBuah[i]}\n `
             // perkiraanBuah = namaBuah[i]
         }
             // console.log(listBuah)
             var buahApa = parseInt(prompt('Stock Buah Yang Tersedia\n' + listBuah))
             console.log(buahApa) // buahApa adalah prompt untuk nanya amu beli buah apa

             buahBeli.push(buahApa) // buahBeli adalah array untuk menyimpan hasil dari listBuah yaitu angka. di push dari hasil buahApa
             console.log(buahBeli)


         

             var brpBuah = parseInt(prompt(`Anda Ingin Membeli Berapa Buah ${namaBuah[(buahApa-1)]}`))
         3
            
      
            // Total Belanja
         } else if (menuBuyer == 3) {
            var priceTot = 0;
            // for (i = 0; i < hargaBuah.length; i++) {
            for(i=0; i<buahBeli.length; i++){

            
            
               // if(totalBuah[i] == hargaBuah[i]){
               // priceTot = totalBuah[i] * hargaBuah[i]
               // console.log(hargaBuah + ' ini Harga Buah')
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


/*
yang blm :
1.bikin daftar buah di dalam Pembeli : isi daftar buah itu ada:
   1.1 nama Buah | jumlah Buah | harga buah
   1.2 kembali ke menu Pembeli

   untuk pembeli : dibikin pilihan, jadi gak harus beli semua buah

   next : dibuat versi HTML
*/
