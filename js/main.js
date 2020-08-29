// DATA

const mealData = [
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

// VARIABLES
const table = document.getElementsByTagName("table")
const data = document.getElementById("data-container")
const breakfast = document.getElementById("breakfast")
const meal = document.getElementsByName("meal")[0]
const mealOptions = document.getElementsByName("mealOptions")[0]
const container = document.getElementById("display-container")
const ajaxTable = document.querySelector(".ajax-table")

//console.log(ajaxTable)
/***********************************************************************/

//const breakfast = document.getElementById("breakfast")
/* function novaCelija() {
  breakfast.insertCell(1).innerHTML = "Nova celija"
} */

//console.log(meal.value)

/* function novaCelija() {
  if (meal.value === "breakfast" && mealOptions.value) {
    mealData.forEach((element) => {
      for (const key in element) {
        if (element.hasOwnProperty(key)) {
          breakfast.insertCell(1).innerHTML = element[mealOptions.value]
        }
      }
    })
  }
} */

/***********************************************************************/

// ON CLICK F-N
function insertNewRow() {
  let vrednost = mealData[mealOptions.value - 1]

  if (meal.value === "breakfast" && mealOptions.value) {
    //console.log(meal.value);
    //console.log(table[meal.value]);
    table[meal.value].innerHTML +=
      "<tr><td contenteditable='true'>" +
      meal.value +
      "</td><td contenteditable='true'>" +
      vrednost.vrstaJela +
      "</td><td contenteditable='true'>" +
      vrednost.jedinicaMere +
      "</td><td contenteditable='true'>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td contenteditable='true'>" +
      vrednost.kolicinaJela.svega +
      "</td><td contenteditable='true'>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td contenteditable='true'>" +
      vrednost.vremeObade +
      "</td><td contenteditable='true'>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td contenteditable='true'>" +
      vrednost.linija1.kolicinaJela +
      "</td><td contenteditable='true'>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td contenteditable='true'>" +
      vrednost.linija2.kolicinaJela +
      "</td><td contenteditable='true'>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  } else if (meal.value === "snack" && mealOptions.value) {
    //console.log(meal.value);
    table[meal.value].innerHTML +=
      "<tr><td contenteditable='true'>" +
      meal.value +
      "</td><td contenteditable='true'>" +
      vrednost.vrstaJela +
      "</td><td contenteditable='true'>" +
      vrednost.jedinicaMere +
      "</td><td contenteditable='true'>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td contenteditable='true'>" +
      vrednost.kolicinaJela.svega +
      "</td><td contenteditable='true'>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td contenteditable='true'>" +
      vrednost.vremeObade +
      "</td><td contenteditable='true'>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td contenteditable='true'>" +
      vrednost.linija1.kolicinaJela +
      "</td><td contenteditable='true'>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td contenteditable='true'>" +
      vrednost.linija2.kolicinaJela +
      "</td><td contenteditable='true'>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  } else if (meal.value === "lunch" && mealOptions.value) {
    //console.log(meal.value);
    table[meal.value].innerHTML +=
      "<tr><td contenteditable='true'>" +
      meal.value +
      "</td><td contenteditable='true'>" +
      vrednost.vrstaJela +
      "</td><td contenteditable='true'>" +
      vrednost.jedinicaMere +
      "</td><td contenteditable='true'>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td contenteditable='true'>" +
      vrednost.kolicinaJela.svega +
      "</td><td contenteditable='true'>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td contenteditable='true'>" +
      vrednost.vremeObade +
      "</td><td contenteditable='true'>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td contenteditable='true'>" +
      vrednost.linija1.kolicinaJela +
      "</td><td contenteditable='true'>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td contenteditable='true'>" +
      vrednost.linija2.kolicinaJela +
      "</td><td contenteditable='true'>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  } else {
    //console.log(meal.value);
    table[meal.value].innerHTML +=
      "<tr><td contenteditable='true'>" +
      meal.value +
      "</td><td contenteditable='true'>" +
      vrednost.vrstaJela +
      "</td><td contenteditable='true'>" +
      vrednost.jedinicaMere +
      "</td><td contenteditable='true'>" +
      vrednost.kolicinaJela.poVojniku +
      "</td><td contenteditable='true'>" +
      vrednost.kolicinaJela.svega +
      "</td><td contenteditable='true'>" +
      vrednost.termickaSredstvaIPosudjeZaPripremuJela +
      "</td><td contenteditable='true'>" +
      vrednost.vremeObade +
      "</td><td contenteditable='true'>" +
      vrednost.osobljeZaTermickuObradu +
      "</td><td contenteditable='true'>" +
      vrednost.linija1.kolicinaJela +
      "</td><td contenteditable='true'>" +
      vrednost.linija1.osobljeZaPodelu +
      "</td><td contenteditable='true'>" +
      vrednost.linija2.kolicinaJela +
      "</td><td contenteditable='true'>" +
      vrednost.linija2.osobljeZaPodelu +
      "</td></tr>"
  }

  /* if (meal.value) {
    thead.style.display = "block";
  } */
}

function testInsert() {
  // GET TEST TABLE
  const testTabel = document.getElementsByClassName("test-table")
  const newTable = testTabel[meal.value]
  const testRow = newTable.insertRow(-1)
  // SET VALUE FOR LOOP
  const vrednost = mealOptions.value - 1

  for (const prop in mealDataV2[vrednost]) {
    if (meal.value === "breakfast" && mealOptions.value) {
      //console.log(prop + " ---> " + mealData[i][prop])
      testRow.innerHTML +=
        //"<td contenteditable='true'>" + prop + " ---> " + mealData[vrednost][prop] + "</td>"
        "<tr><td contenteditable='true'>" +
        mealData[vrednost][prop] +
        "</td></tr>"
    }
  }
}

// AJAX
function ajaxData() {
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText)
      for (let i = 0; i < data.length; i++) {
        ajaxTable.innerHTML +=
          "<tr><td contenteditable='true'>" +
          data[i].id +
          "</td><td contenteditable='true'>" +
          data[i].vrstaJela +
          "</td><td contenteditable='true'>" +
          data[i].jedinicaMere +
          "</td><td contenteditable='true'>" +
          data[i].kolicinaJela.poVojniku +
          "</td><td contenteditable='true'>" +
          data[i].kolicinaJela.svega +
          "</td><td contenteditable='true'>" +
          data[i].termickaSredstvaIPosudjeZaPripremuJela +
          "</td><td contenteditable='true'>" +
          data[i].vremeObade +
          "</td><td contenteditable='true'>" +
          data[i].osobljeZaTermickuObradu +
          "</td><td contenteditable='true'>" +
          data[i].linija1.kolicinaJela +
          "</td><td contenteditable='true'>" +
          data[i].linija1.osobljeZaPodelu +
          "</td><td contenteditable='true'>" +
          data[i].linija2.kolicinaJela +
          "</td><td contenteditable='true'>" +
          data[i].linija2.osobljeZaPodelu +
          "</td></tr>"
      }
    }
  }
  xhttp.open("GET", "./data/data.json", true)
  xhttp.send()
}

/**
 * TEST TABLE
 */

const testTable = document.getElementById("test-table")
console.log(testTable)
const ajaxBtn = document.getElementById("ajaxBtn")
console.log(ajaxBtn)

ajaxBtn.addEventListener("click", testTableAjaxData)

function testTableAjaxData() {
  const xhttp = new XMLHttpRequest()
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText)
      for (let i = 0; i < data.length; i++) {
        testTable.innerHTML +=
          "<td contenteditable='true'>" +
          data[i].id +
          "</td><td contenteditable='true'>" +
          data[i].vrstaJela +
          "</td><td contenteditable='true'>" +
          data[i].jedinicaMere +
          "</td><td contenteditable='true'>" +
          data[i].kolicinaJela.poVojniku +
          "</td><td contenteditable='true'>" +
          data[i].kolicinaJela.svega +
          "</td><td contenteditable='true'>" +
          data[i].termickaSredstvaIPosudjeZaPripremuJela +
          "</td><td contenteditable='true'>" +
          data[i].vremeObade +
          "</td><td contenteditable='true'>" +
          data[i].osobljeZaTermickuObradu +
          "</td><td contenteditable='true'>" +
          data[i].linija1.kolicinaJela +
          "</td><td contenteditable='true'>" +
          data[i].linija1.osobljeZaPodelu +
          "</td><td contenteditable='true'>" +
          data[i].linija2.kolicinaJela +
          "</td><td contenteditable='true'>" +
          data[i].linija2.osobljeZaPodelu +
          "</td>"
      }
    }
  }
  xhttp.open("GET", "./data/data.json", true)
  xhttp.send()
}
