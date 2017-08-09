function Kendaraan() {
    this.roda = "kendaraan memiliki roda";
    
    this.maju = function() {
        return "kendaraan berjalan";
    }
}

var obj = new Kendaraan();

function Motor() {
    Kendaraan.call(this);
    this.jumlahRoda = function() {
        // can't access priv
        return "memiliki 2 roda";
    };
}

function appendToResult(htmldata) {
    var e = document.createElement('div');
    e.innerHTML = htmldata;

    document.getElementById("result").appendChild(e);
}

var child = new Motor();
appendToResult("Variable roda 'kendaraan' dipanggil oleh objek 'kendaran' : " + obj.roda);
appendToResult("fungsi maju 'kendaraan' dipanggil oleh objek 'kendaran' : " + obj.maju());
appendToResult("Variable roda 'kendaraan' dipanggil oleh objek 'motor' : " + child.roda);
appendToResult("fungsi maju 'kendaraan' dipanggil oleh objek 'motor' : " + child.maju());
appendToResult("fungsi jumlahRoda 'motor' dipanggil oleh objek 'motor' : " + child.jumlahRoda());
