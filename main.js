// data - fake JSON

let nizOpcija = [
  {
    id: 1,
    vrstaJela: "Caj",
    jedinicaMere: "L",
    kolicinaJela: {
      poVojniku: 0.3,
      svega: 6.9
    },
    termickaSredstvaIPosudjeZaPripremuJela: "1 x 10L",
    vremeObade: "05.00 - 05.30",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Sneki"
    },
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Mile"
    }
  },
  {
    id: 2,
    vrstaJela: "Sunkarica",
    jedinicaMere: "kg",
    kolicinaJela: {
      poVojniku: 0.1,
      svega: 6.9
    },
    termickaSredstvaIPosudjeZaPripremuJela: "noz",
    vremeObade: "05.10 - 05.30",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Super Sneki"
    },
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Mile Kitic"
    }
  },
  {
    id: 3,
    vrstaJela: "Sir topljeni",
    jedinicaMere: "kg",
    kolicinaJela: {
      poVojniku: 0.05,
      svega: 1.15
    },
    termickaSredstvaIPosudjeZaPripremuJela: " / ",
    vremeObade: "05:30 - 05:40",
    osobljeZaTermickuObradu: "Djuric Nenad",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Viki"
    },
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Tuki"
    }
  },
  {
    id: 4,
    vrstaJela: "Jaje kuvano",
    jedinicaMere: "Kom",
    kolicinaJela: {
      poVojniku: 1,
      svega: 23
    },
    termickaSredstvaIPosudjeZaPripremuJela: "1 x 10L",
    vremeObade: "05.30 - 05.50",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Rasta"
    },
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Krasta"
    }
  }
]

// vars
const table = document.getElementsByTagName("table")
const data = document.getElementById("data-container")
//const sortData = so
const dorucak = document.getElementById("dorucak")

let opcijeObed = document.getElementsByName("obed")[0]
const opcije = document.getElementsByName("opcije")[0]

console.log(nizOpcija[0].id)
console.log(table)

/* for (let i = 0; i < table.length; i++) {
  console.log(table[i])
} */

/* function izaberiObed() {
  let vrednost = nizOpcija[opcije.value - 1]

  if (opcijeObed.value === "dorucak" && opcije.value) {
    console.log(opcijeObed.value)

    data.innerHTML +=
      "<tr class='1'><td>" +
      vrednost.vrstaJela +
      "</td><td>" +
      vrednost.jedinicaMere +
      "</td><td>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td>" +
      vrednost.kolicinaJela.svega +
      "</td><td>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td>" +
      vrednost.vremeObade +
      "</td><td>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td>" +
      vrednost.linija1.kolicinaJela +
      "</td><td>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td>" +
      vrednost.linija2.kolicinaJela +
      "</td><td>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  } else if (opcijeObed.value === "uzina" && opcije.value) {
    console.log(opcijeObed.value)

    data.innerHTML +=
      "<tr class='2'><td>" +
      vrednost.vrstaJela +
      "</td><td>" +
      vrednost.jedinicaMere +
      "</td><td>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td>" +
      vrednost.kolicinaJela.svega +
      "</td><td>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td>" +
      vrednost.vremeObade +
      "</td><td>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td>" +
      vrednost.linija1.kolicinaJela +
      "</td><td>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td>" +
      vrednost.linija2.kolicinaJela +
      "</td><td>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  } else if (opcijeObed.value === "rucak" && opcije.value) {
    console.log(opcijeObed.value)

    data.innerHTML +=
      "<tr class='3'><td>" +
      vrednost.vrstaJela +
      "</td><td>" +
      vrednost.jedinicaMere +
      "</td><td>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td>" +
      vrednost.kolicinaJela.svega +
      "</td><td>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td>" +
      vrednost.vremeObade +
      "</td><td>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td>" +
      vrednost.linija1.kolicinaJela +
      "</td><td>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td>" +
      vrednost.linija2.kolicinaJela +
      "</td><td>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  } else {
    console.log(opcijeObed.value)

    data.innerHTML +=
      "<tr class='4'><td>" +
      vrednost.vrstaJela +
      "</td><td>" +
      vrednost.jedinicaMere +
      "</td><td>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td>" +
      vrednost.kolicinaJela.svega +
      "</td><td>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td>" +
      vrednost.vremeObade +
      "</td><td>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td>" +
      vrednost.linija1.kolicinaJela +
      "</td><td>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td>" +
      vrednost.linija2.kolicinaJela +
      "</td><td>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  }
} */

// f-n za sortiranje
/* function sortTable(data) {
  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < data.length; j++) {
      if (
        parseInt(parse.data[i].firstElementChild.className) <
        parseInt(data[j].firstElementChild.className)
      ) {
        let pom = data[i]
        data[i] = data[j]
        data[j] = pom
      }
    }
  }
  return data
} */

//console.log(data.firstElementChild.className)

/************************************/

//const dorucak = document.getElementById("dorucak")
/* function novaCelija() {
  dorucak.insertCell(1).innerHTML = "Nova celija"
} */

//console.log(opcijeObed.value)

/* function novaCelija() {
  if (opcijeObed.value === "dorucak" && opcije.value) {
    nizOpcija.forEach((element) => {
      for (const key in element) {
        if (element.hasOwnProperty(key)) {
          dorucak.insertCell(1).innerHTML = element[opcije.value]
        }
      }
    })
  }
} */

function insertNewRow() {
  let vrednost = nizOpcija[opcije.value - 1]

  if (opcijeObed.value === "dorucak" && opcije.value) {
    console.log(opcijeObed.value)
    console.log(table)

    table[opcijeObed.value].innerHTML +=
      "<tr><td contenteditable>" +
      vrednost.vrstaJela +
      "</td><td>" +
      vrednost.jedinicaMere +
      "</td><td>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td>" +
      vrednost.kolicinaJela.svega +
      "</td><td>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td>" +
      vrednost.vremeObade +
      "</td><td>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td>" +
      vrednost.linija1.kolicinaJela +
      "</td><td>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td>" +
      vrednost.linija2.kolicinaJela +
      "</td><td>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  } else if (opcijeObed.value === "uzina" && opcije.value) {
    console.log(opcijeObed.value)

    table[opcijeObed.value].innerHTML +=
      "<tr><td>" +
      vrednost.vrstaJela +
      "</td><td>" +
      vrednost.jedinicaMere +
      "</td><td>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td>" +
      vrednost.kolicinaJela.svega +
      "</td><td>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td>" +
      vrednost.vremeObade +
      "</td><td>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td>" +
      vrednost.linija1.kolicinaJela +
      "</td><td>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td>" +
      vrednost.linija2.kolicinaJela +
      "</td><td>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  } else if (opcijeObed.value === "rucak" && opcije.value) {
    console.log(opcijeObed.value)

    table[opcijeObed.value].innerHTML +=
      "<tr><td>" +
      vrednost.vrstaJela +
      "</td><td>" +
      vrednost.jedinicaMere +
      "</td><td>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td>" +
      vrednost.kolicinaJela.svega +
      "</td><td>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td>" +
      vrednost.vremeObade +
      "</td><td>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td>" +
      vrednost.linija1.kolicinaJela +
      "</td><td>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td>" +
      vrednost.linija2.kolicinaJela +
      "</td><td>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  } else {
    console.log(opcijeObed.value)

    table[opcijeObed.value].innerHTML +=
      "<tr><td>" +
      vrednost.vrstaJela +
      "</td><td>" +
      vrednost.jedinicaMere +
      "</td><td>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td>" +
      vrednost.kolicinaJela.svega +
      "</td><td>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td>" +
      vrednost.vremeObade +
      "</td><td>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td>" +
      vrednost.linija1.kolicinaJela +
      "</td><td>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td>" +
      vrednost.linija2.kolicinaJela +
      "</td><td>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  }
}

function testInsert() {
  // GET TEST TABLE
  const testTabel = document.getElementById("test-table")
  // GET ROW IN TEST TABLE
  //const testRow = document.getElementById("test-row")
  const testRow = testTabel.insertRow(-1)
  // SET VALUE FOR LOOP
  const vrednost = opcije.value - 1

  if (opcijeObed.value === "dorucak" && opcije.value) {
    //for (i = 0; i < nizOpcija.length; i++) {
    //console.log(nizOpcija[i])
    console.log(opcije.value)
    for (const prop in nizOpcija[vrednost]) {
      //console.log(prop + " ---> " + nizOpcija[i][prop])
      testRow.innerHTML +=
        "<td>" + prop + " ---> " + nizOpcija[vrednost][prop] + "</td>"
    }
    //}
  }
}
