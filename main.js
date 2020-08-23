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
    /* kolicinaJelaPoVojniku: 0.3,
    kolicinaJelaSvega: 6.9, */
    termickaSredstvaIPosudjeZaPripremuJela: "1 x 10L",
    vremeObade: "05.00 - 05.30",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Sneki"
    },
    /* linija1Kolicina: "330g",
    linija1Osoblje: "Sneki", */
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Mile"
    }
    /* linija2Kolicina: "500g",
    linija2Osoblje: "Keba" */
  },
  {
    id: 2,
    vrstaJela: "Sunkarica",
    jedinicaMere: "kg",
    kolicinaJela: {
      poVojniku: 0.1,
      svega: 6.9
    },
    /* kolicinaJelaPoVojniku: 0.1,
    kolicinaJelaSvega: 6.9, */
    termickaSredstvaIPosudjeZaPripremuJela: "noz",
    vremeObade: "05.10 - 05.30",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Super Sneki"
    },
    /* linija1Kolicina: "300g",
    linija1Osoblje: "Ceki", */
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Mile Kitic"
    }
    /* linija2Kolicina: "500g",
    linija2Osoblje: "Mile" */
  },
  {
    id: 3,
    vrstaJela: "Sir topljeni",
    jedinicaMere: "kg",
    kolicinaJela: {
      poVojniku: 0.05,
      svega: 1.15
    },
    /* kolicinaJelaPoVojniku: 0.05,
    kolicinaJelaSvega: 1.15, */
    termickaSredstvaIPosudjeZaPripremuJela: " / ",
    vremeObade: "05:30 - 05:40",
    osobljeZaTermickuObradu: "Djuric Nenad",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Viki"
    },
    /* linija1Kolicina: "560g",
    linija1Osoblje: "Viki", */
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Tuki"
    }
    /* linija2Kolicina: "500g",
    linija2Osoblje: "Tuki" */
  },
  {
    id: 4,
    vrstaJela: "Jaje kuvano",
    jedinicaMere: "Kom",
    kolicinaJela: {
      poVojniku: 1,
      svega: 23
    },
    /* kolicinaJelaPoVojniku: 1,
    kolicinaJelaSvega: 23, */
    termickaSredstvaIPosudjeZaPripremuJela: "1 x 10L",
    vremeObade: "05.30 - 05.50",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Rasta"
    },
    /* linija1Kolicina: "50g",
    linija1Osoblje: "Sani", */
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Krasta"
    }
    /* linija2Kolicina: "150g",
    linija2Osoblje: "Baja" */
  }
]

// data ver2
let nizOpcijaKrace = [
  {
    id: 1,
    vrstaJela: "Caj",
    jedinicaMere: "L",
    kolicinaJelaPoVojniku: 0.3,
    kolicinaJelaSvega: 6.9,
    termickaSredstvaIPosudjeZaPripremuJela: "1 x 10L",
    vremeObade: "05.00 - 05.30",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1Kolicina: "330g",
    linija1Osoblje: "Sneki",
    linija2Kolicina: "500g",
    linija2Osoblje: "Keba"
  },
  {
    id: 2,
    vrstaJela: "Sunkarica",
    jedinicaMere: "kg",
    kolicinaJelaPoVojniku: 0.1,
    kolicinaJelaSvega: 6.9,
    termickaSredstvaIPosudjeZaPripremuJela: "noz",
    vremeObade: "05.10 - 05.30",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1Kolicina: "300g",
    linija1Osoblje: "Ceki",
    linija2Kolicina: "500g",
    linija2Osoblje: "Mile"
  },
  {
    id: 3,
    vrstaJela: "Sir topljeni",
    jedinicaMere: "kg",
    kolicinaJelaPoVojniku: 0.05,
    kolicinaJelaSvega: 1.15,
    termickaSredstvaIPosudjeZaPripremuJela: " / ",
    vremeObade: "05:30 - 05:40",
    osobljeZaTermickuObradu: "Djuric Nenad",
    linija1Kolicina: "560g",
    linija1Osoblje: "Viki",
    linija2Kolicina: "500g",
    linija2Osoblje: "Tuki"
  },
  {
    id: 4,
    vrstaJela: "Jaje kuvano",
    jedinicaMere: "Kom",
    kolicinaJelaPoVojniku: 1,
    kolicinaJelaSvega: 23,
    termickaSredstvaIPosudjeZaPripremuJela: "1 x 10L",
    vremeObade: "05.30 - 05.50",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1Kolicina: "50g",
    linija1Osoblje: "Sani",
    linija2Kolicina: "150g",
    linija2Osoblje: "Baja"
  }
]

// vars
const table = document.getElementsByTagName("table")
const data = document.getElementById("data-container")
const dorucak = document.getElementById("dorucak")

let opcijeObed = document.getElementsByName("obed")[0]
const opcije = document.getElementsByName("opcije")[0]

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
  const thead = document.getElementsByTagName("thead");

  if (opcijeObed.value === "dorucak" && opcije.value) {
    console.log(opcijeObed.value);
    console.log(table[opcijeObed.value]);

    table[opcijeObed.value].innerHTML +=
      "<tr><td>" + opcijeObed.value + "</td><td contenteditable>" +
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
      "<tr><td>" + opcijeObed.value + "</td><td>" +
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
      "<tr><td>" + opcijeObed.value + "</td><td>" +
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
      "<tr><td>" + opcijeObed.value + "</td><td>" +
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

  /* if (opcijeObed.value) {
    thead.style.display = "block";
  } */
}


function testInsert() {
  // GET TEST TABLE
  const testTabel = document.getElementsByClassName("test-table")
  const newRow = document.getElementsByClassName("tr")
  const newTable = testTabel[opcijeObed.value]
  const testRow = newTable.insertRow(-1)
  // SET VALUE FOR LOOP
  const vrednost = opcije.value - 1

  for (const prop in nizOpcijaKrace[vrednost]) {
    if (opcijeObed.value === "dorucak" && opcije.value) {
      //console.log(prop + " ---> " + nizOpcija[i][prop])
      testRow.innerHTML +=
        //"<td>" + prop + " ---> " + nizOpcija[vrednost][prop] + "</td>"
        "<tr><td>" + nizOpcija[vrednost][prop] + "</td></tr>"
    }
  }
}
