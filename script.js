function kirimData(){
    //event.preventDefault();
    var nama = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    const angkatan = document.getElementById('dropdown').value;
    var tanggal = document.getElementById('tanggal').value;
    var alamat = document.getElementById("alamat").value;

    alert(
        "Nama : " + nama + "\n" +
        "NIM : " + nim + "\n" +
        "Angkatan : " + angkatan + "\n" +
        "Tanggal Pendaftaran (YY-MM-DD): " + tanggal + "\n" +
        "Peminatan : " + peminatan + "\n" +
        "Alamat : " + alamat
    );
}