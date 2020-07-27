var jenisKendaraan = parseInt(prompt(`Silahkan Masuk,Menggunakan : 
1.Mobil
2.Motor`))

if(jenisKendaraan = 1){
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
            alert('parkir selama' + lamaParkirMob)
        } else if (keadaanMas == 1 && keadaanKel == 2 ){// kalo masuk AM keluarnya PM
            mobilKel +=12
            alert('Parkir Selama' + lamaParkirMob)
        }else {
            alert('error pas di if pertama')
        }
        if(lamaParkirMob <=0){
            alert('error lama parkir')
        }else if (lamaParkirMob <=2 && lamaParkirMob >=1){
            var biayaParkirMob = lamaParkirMob * duaJamPertama
            alert(`biaya parkir anda ${biayaParkirMob}`)
        }else {
            var biayaParkirMob = (lamaParkirMob*duaJamPertama) + (lamaParkirMob-2)*setelahDuaJam
            alert(`biaya parkir anda ${biayaParkirMob}`)
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
            alert(`anda parkir selama ${lamaParkirMot}`)
        }else if (keadaanMasMot == 2 && keadaanMasMot == 1){
            motorKel +=12;
            var lamaParkirMot = motorKel - motorMas
            alert(`anda parkir selama ${lamaParkirMot}`)
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
            alert(`anda parkir selama ${lamaParkirMot}, biaya ${biayaParkirMot}`)
        }else {
            var biayaParkirMot = (lamaParkirMot*duaJamPertamaMot) + (lamaParkirMot-2) * setelahDuaJamMot
            alert(`anda Parkir Selama ${lamaParkirMot}, biaya anda ${biayaParkirMot}`)
        }
}