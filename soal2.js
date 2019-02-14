var y = []
var k = 0

do {
    x = parseInt(prompt("Silahkan masukkan angka yang anda inginkan"))
    if (Number.isInteger(x)) {
        y[y.length] = parseInt(x)
    } else {
        break;
    }    
} while (true);

for (let i = 0; i < y.length; i++) {
    if (y[i] > k) {
        var k = y[i]
    }
}

var j = y[0]
for (let m = 0; m < y.length; m++) {
    if (y[m] < j) {
        var j = y[m]
    }
}

console.log(`Array Sort: ${y.sort((a, b) => a - b)}

Nilai Tertinggi = ${k}

Nilai Terendah = ${j}`);
