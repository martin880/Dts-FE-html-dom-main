const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");

const outputTitle = document.getElementById("outputTitle");
const outputText = document.getElementById("outputText");

var hasil;

const hitungLuas = () => {
    hasil = 0.5 * alas.value * tinggi.value;

    outputTitle.innerHTML = "Hasil";
    outputText.innerHTML = "Luas: " + hasil + " cm <sup>2</sup>";

}

const hapus = () => {
    outputTitle.innerHTML = "";
    outputText.innerHTML = "";

    alas.value = "";
    tinggi.value = "";
}