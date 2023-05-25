function hitungLuas(){
    var sisi = document.getElementById("sisi-luas").value
    var luas = document.getElementById("output-luas")
    var hasil = sisi * sisi

    luas.innerHTML ="L = S x S<br>L = "+sisi+" x "+sisi+"<br>L = "+hasil;
}

function resetLuas(){
    var sisi = document.getElementById("sisi-luas").value
    var luas = document.getElementById("output-luas")
    var hasil = sisi * sisi

    luas.innerHTML =""
}

function hitungKeliling(){
    var sisi = document.getElementById("sisi-keliling").value
    var keliling = document.getElementById("output-keliling")
    var hasil = 4 * sisi

    keliling.innerHTML ="K = 4 x S<br>K = "+4+" x "+sisi+"<br>K = "+hasil;
}

function resetKeliling(){
    var sisi = document.getElementById("sisi-keliling").value
    var keliling = document.getElementById("output-keliling")
    var hasil = 4 * sisi

    keliling.innerHTML =""
}