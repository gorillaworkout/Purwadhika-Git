var namaBuah=['apple','semangka']
var cartBuah=[]
var cartPrice=[500,500]
var price=[500,500]
var stokbuah=[1000,1000]
var choosenBuah=[]
var choosenPrice=[]
var displayFruits
var getIn = true
var condChoosenPrice

while(getIn) {
    var greet = alert('Selamat Datang di store kami!')
    var welcome = parseInt(prompt('Anda seorang?\n\n1.Pembeli\n2.Penjual\n3.Exit'))
    
    do {
        if(!(welcome>=1&&welcome<4)) {
            alert('Tidak ada di pilihan, mohon memilih menu yang tersedia')
        }
    } while (!(welcome>=1&&welcome<4))

    //kondisi masuk menu utama
    if(welcome == 2) {
        var chooseMenuJual = true
        while(chooseMenuJual) {
            do {
                var questionJual = parseInt(prompt('Apakah ingin?\n\n1.Lihat list Buah\n2.Tambah buah\n3.Hapus Buah\n4.Exit'))
                if(!(questionJual>=1&&questionJual<5)) {
                    alert('Tidak ada di pilihan, mohon memilih menu yang tersedia')
                }
            } while (!(questionJual>=1&&questionJual<6))

            //kondisi menu Penjual
            if (questionJual == 1) {
                var displayFruits=''
                for(let i=0; i<namaBuah.length; i++) {
                    displayFruits+=`${i+1} ${namaBuah[i]}: Rp.${price[i]} stok=${stokbuah[i]}\n`
                }
                alert(`Tersedia:\n\n${displayFruits}`)
            } else if (questionJual == 2) {
                var whatFruits = prompt(`Buah apa yang ingin di tambah: `)
                var priceFruits = parseInt(prompt(`Harga ${whatFruits} yang di jual: `))
                var stokFruits = parseInt(prompt(`Stok ${whatFruits} nya: `))

                namaBuah.push(whatFruits)
                price.push(priceFruits)
                stokbuah.push(stokFruits)

                var displayFruits=''
                for(let i=0; i<namaBuah.length; i++) {
                    displayFruits+=`${i+1} ${namaBuah[i]}: Rp.${price[i]} stok=${stokbuah[i]}\n`
                }
                alert(`Tersedia:\n\n${displayFruits}`)
                console.log(namaBuah)
                console.log(price)
                console.log(stokbuah)

            } else if (questionJual == 3) {
                var deleteBuah = parseInt(prompt(`${displayFruits}\nBuah apa yang ingin hapus dari menu: `))
                for(let j=0; j<=namaBuah.length-1; j++) {
                    if(j+1 == deleteBuah) {
                        namaBuah.splice(j, 1)
                        price.splice(j, 1)
                        stokbuah.splice(j, 1)
                    }
                }
                console.log(namaBuah)
                console.log(price)
                console.log(stokbuah)

                var displayFruits=''
                for(let i=0; i<namaBuah.length; i++) {
                    displayFruits+=`${i+1} ${namaBuah[i]}\n`
                }
                alert(`tampilan:\n${displayFruits}`)
                console.log(displayFruits)
            } else {
                chooseMenuJual = false
            }
        }
    } else if (welcome == 1) {
        var chooseMenuBeli = true
        while(chooseMenuBeli) {
            do {
                var questionBeli = parseInt(prompt('Apakah ingin?\n\n1.Lihat list Buah\n2.Beli buah\n3.Bayar\n4.Exit'))
                if(!(questionBeli>=1&&questionBeli<5)) {
                    alert('Tidak ada di pilihan, mohon memilih menu yang tersedia')
                }
            } while (!(questionBeli>=1&&questionBeli<5))
        
        //kondisi menu Pembeli
        if (questionBeli == 1) {
            var displayFruits=''
            for(let i=0; i<namaBuah.length; i++) {
                displayFruits+=`${i+1} ${namaBuah[i]}: Rp.${price[i]} stok=${stokbuah[i]}\n`
            }
            alert(`Tersedia:\n\n${displayFruits}`)
            console.log(displayFruits)
            
        } else if (questionBeli == 2) {
            var buyBuah = parseInt(prompt(`${displayFruits}\nBuah apa yang ingin dibeli: `))
            //compare angka pilih buah dengan index nama
            for(var j=0; j<namaBuah.length; j++) {
                if(j+1 == buyBuah) {
                    choosenBuah.push(namaBuah[j])
                    //compare index namaBuah dengan stokBuah
                    for(var k=0; k<stokbuah.length; k++) {
                        if(j == k) {
                            do {
                                //perhitungan ngurangin stok di array stokBuah serta nyimpan pilihan buah yang dibeli ke array cartBuah
                                var amountBuah = parseInt(prompt(`Masukkan jumlah ${namaBuah[j]} yang dibeli: `))
                                if(amountBuah<=stokbuah[k]) {
                                    cartBuah.push(amountBuah)
                                    stokbuah[k] = parseInt(stokbuah[k]) - parseInt(amountBuah)
                                    console.log(cartBuah)
                                } else if (amountBuah>stokbuah[k]) {
                                    alert(`Anda memasukkan jumlah ${namaBuah[j]} melebihi stok kami`)
                                }
                            } while (amountBuah>stokbuah[k]) 
                        }
                    } for(var l=0; l<price.length; l++) {
                        if(j == l) {
                            choosenPrice.push(parseInt(price[l]))
                            for(p=0; p<cartBuah.length; p++) {
                                cartPrice.push(parseInt(cartBuah[p]) * parseInt(price[l]))
                                condChoosenPrice = false
                            }
                        }
                    } console.log(cartPrice)
                } console.log(choosenBuah)
            } condChoosenPrice = true

        } else if(questionBeli == 3) {
            var choosenFruits = ''
            for(let m=0; m<choosenBuah.length; m++) {
                choosenFruits+=`${m+1}. ${choosenBuah[m]}: ${cartBuah[m]} X ${choosenPrice[m]} =${cartPrice[m]}\n`
            } 
        
            var totalBelanja = 0
            for(let n=0; n<cartPrice.length; n++) {
                totalBelanja += parseInt(cartPrice[n])
            } 

            alert(`Detail belanja:\n${choosenFruits}\nTotal belanja anda: ${totalBelanja}`)
            console.log(choosenFruits)
            console.log(totalBelanja)
            console.log(cartPrice)
        } else {
            chooseMenuBeli = false
        }
    } 
} else if (welcome == 3) {
    getIn = false
}  
}
