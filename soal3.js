var data = [
    {nama: "Putri", umur: 22, gender: "Perempuan", pekerjaan: "Analyst"},
    {nama: "Bayu", umur: 25, gender: "Laki-laki", pekerjaan: "Pemadam"},
    {nama: "Murni", umur: 20, gender: "Perempuan", pekerjaan: "Youtuber"},
    {nama: "Fata", umur: 32, gender: "Laki-laki", pekerjaan: "DJ"},
    {nama: "Bianca", umur: 23, gender: "Perempuan", pekerjaan: "DJ"},
    {nama: "Alex", umur: 18, gender: "Laki-laki", pekerjaan: "Pemadam"}
]
var work = ['All']

var workFn = () => {
    for (let i = 0; i < data.length; i++) {
        work[work.length] = data[i].pekerjaan
    }
    var x = work.reduce((a, b) => {
        if (a.indexOf(b) < 0) {
            a.push(b)
        }
        return a;
    }, []);
    var z = x.map((val) => val)
    return z
}

var show = () => {
    var x = []
    for (let i = 0; i < data.length; i++) {
        x[x.length] = `
        <tr>
            <td>${data[i].nama}</td>
            <td>${data[i].umur}</td>
            <td>${data[i].gender}</td>
            <td>${data[i].pekerjaan}</td>
        </tr>`
    }

    var y = []
    for (let j = 0; j < workFn().length; j++) {
        y[y.length] = `
        <option value="${workFn()[j]}">${workFn()[j]}</option>
        `
    }

    document.getElementById("kerja").innerHTML = y.join("")
    document.getElementById("body").innerHTML = x.join("")

}
show()

var input = () => {
    var dataBaru = {
        nama: document.getElementById("name").value,
        umur: document.getElementById("age").value,
        gender: document.querySelector("input[name=sex]:checked").value,
        pekerjaan: document.getElementById("job").value
    }
    data[data.length] = dataBaru

    if (!work.includes(dataBaru.pekerjaan)) {
        work[work.length] = dataBaru.pekerjaan
    }
    show()
    console.log(dataBaru.gender);
    
}

searchNama = () => {
    var filterNama, filter, table, tr
        filterNama = document.getElementById("nama");
        filter = filterNama.value.toUpperCase ();
        table = document.getElementById("tabelData");
        tr = table.getElementsByTagName("tr");
    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerText.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

searchUsia = () => {
    var table, tr, umur1, umur2
        table = document.getElementById("tabelData");
        tr = table.getElementsByTagName("tr");
        umur1 = document.getElementById("umur1").value;
        umur2 = document.getElementById("umur2").value;
    
    if (umur1 == "" || umur2 == "") {
        umur1 = 0;
        umur2 = 999;
    } 
    

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            if (parseInt(td.innerText) >= umur1 && parseInt(td.innerText) <= umur2) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

searchGender = () => {
    var filterGender, table, tr
        filterGender = document.querySelector("input[name=gender]:checked").value;
        table = document.getElementById("tabelData");
        tr = table.getElementsByTagName("tr");        

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerHTML == filterGender) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

searchKerja = () => {
    var filterKerja, table, tr
        filterKerja = document.getElementById("kerja").value;
        table = document.getElementById("tabelData");
        tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            if (td.innerHTML == filterKerja || filterKerja === "All") {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

fnSortNama = () => {
    let k = document.getElementById("sNama").value
    if (k == "ascending") {
        document.getElementById("sNama").value = "descending"
        var c = data.sort(function (d, e) {
            a = d.nama.toLowerCase();
            b = e.nama.toLowerCase();

            if (a < b) {
                return -1
            }
            if (a > b) {
                return 1                
            }
            return 0
        })
        show()
        return c

    } else if (k == "descending") {
        document.getElementById("sNama").value = "ascending"
        var c = data.sort(function (d, e) {
            a = d.nama.toLowerCase();
            b = e.nama.toLowerCase();

            if (a > b) {
                return -1
            }
            if (a < b) {
                return 1                
            }
            return 0
        })
        show()
        return c
    }
}

fnSortUmur = () => {
    let m = document.getElementById("sUmur").value
    if (m == "ascending") {
        document.getElementById("sUmur").value = "descending"
        var c = data.sort(function (a, b) {
            return a.umur - b.umur
        })
        show()
        return c

    } else if (m == "descending") {
        document.getElementById("sUmur").value = "ascending"
        var c = data.sort(function (a, b) {
            return b.umur - a.umur
        })
        show()
        return c
    }
}

fnSortGender = () => {
    let k = document.getElementById("sGender").value
    if (k == "ascending") {
        document.getElementById("sGender").value = "descending"
        var c = data.sort(function (d, e) {
            a = d.gender.toLowerCase();
            b = e.gender.toLowerCase();

            if (a < b) {
                return -1
            }
            if (a > b) {
                return 1                
            }
            return 0
        })
        show()
        return c

    } else if (k == "descending") {
        document.getElementById("sGender").value = "ascending"
        var c = data.sort(function (d, e) {
            a = d.gender.toLowerCase();
            b = e.gender.toLowerCase();

            if (a > b) {
                return -1
            }
            if (a < b) {
                return 1                
            }
            return 0
        })
        show()
        return c
    }
}

fnSortKerja = () => {
    let k = document.getElementById("sKerja").value
    if (k == "ascending") {
        document.getElementById("sKerja").value = "descending"
        var c = data.sort(function (d, e) {
            a = d.pekerjaan.toLowerCase();
            b = e.pekerjaan.toLowerCase();

            if (a < b) {
                return -1
            }
            if (a > b) {
                return 1                
            }
            return 0
        })
        show()
        return c

    } else if (k == "descending") {
        document.getElementById("sKerja").value = "ascending"
        var c = data.sort(function (d, e) {
            a = d.pekerjaan.toLowerCase();
            b = e.pekerjaan.toLowerCase();

            if (a > b) {
                return -1
            }
            if (a < b) {
                return 1                
            }
            return 0
        })
        show()
        return c
    }
}