bentuk = prompt (
    `Jenis Bangunan:
    1. Persegi
    2. Segitiga siku rata kiri
    3. Segitiga siku rata kanan`)
var x = parseInt(bentuk)

ukuran = prompt (
    `Ukuran:`
)
var y = parseInt(ukuran)

let o = '';
for (let i = 0; i < y; i++) {
    for (let k = 0; k < y; k++) {
        o += ' * '
    }
    o += ' * ' + '\n'
}

let q='';
for (let i=1; i<=y; i++){
    for (let j=1; j<=i ;j++){
        q += ' * '
    }
    q += '\n'
}

let r = '';
for (let i=1; i<=y; i++){
    for (let j=y; j>=i ;j--){
        r += '   '
    }
    for (let k=1; k<=i; k++) {
        r += ' * '
    }
    r += '\n'   
}

if (x == 1) {
    console.log(o);
} else if (x == 2) {
    console.log(q);
} else if (x == 3) {
    console.log(r);
} else {
    alert("Masukkan sesuai nomor jenis!")
}