/**
 * DATA OBJECTS
 */

// DATA OPTION 1

const mealData = [
  {
    id: 1,
    vrstaJela: "Caj",
    jedinicaMere: "L",
    kolicinaJela: {
      poVojniku: 0.3,
      svega: 6.9,
    },
    termickaSredstvaIPosudjeZaPripremuJela: "1 x 10L",
    vremeObade: "05.00 - 05.30",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Sneki",
    },
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Mile",
    },
  },
  {
    id: 2,
    vrstaJela: "Sunkarica",
    jedinicaMere: "kg",
    kolicinaJela: {
      poVojniku: 0.1,
      svega: 6.9,
    },
    termickaSredstvaIPosudjeZaPripremuJela: "noz",
    vremeObade: "05.10 - 05.30",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Super Sneki",
    },
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Mile Kitic",
    },
  },
  {
    id: 3,
    vrstaJela: "Sir topljeni",
    jedinicaMere: "kg",
    kolicinaJela: {
      poVojniku: 0.05,
      svega: 1.15,
    },
    termickaSredstvaIPosudjeZaPripremuJela: " / ",
    vremeObade: "05:30 - 05:40",
    osobljeZaTermickuObradu: "Djuric Nenad",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Viki",
    },
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Tuki",
    },
  },
  {
    id: 4,
    vrstaJela: "Jaje kuvano",
    jedinicaMere: "Kom",
    kolicinaJela: {
      poVojniku: 1,
      svega: 23,
    },
    termickaSredstvaIPosudjeZaPripremuJela: "1 x 10L",
    vremeObade: "05.30 - 05.50",
    osobljeZaTermickuObradu: "Radomirovic",
    linija1: {
      kolicinaJela: "300g",
      osobljeZaPodelu: "Rasta",
    },
    linija2: {
      kolicinaJela: "500g",
      osobljeZaPodelu: "Krasta",
    },
  },
];

// DATA OPTION 2

/*
const mealDataV2 = [
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
    linija2Osoblje: "Keba",
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
    linija2Osoblje: "Mile",
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
    linija2Osoblje: "Tuki",
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
    linija2Osoblje: "Baja",
  },
];
*/

// VARIABLES
const table = document.getElementsByTagName("table");
const data = document.getElementById("data-container");
const breakfast = document.getElementById("breakfast");
const meal = document.getElementsByName("meal")[0];
const mealOptions = document.getElementsByName("mealOptions")[0];

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
  let vrednost = mealData[mealOptions.value - 1];

  if (meal.value === "breakfast" && mealOptions.value) {
    //console.log(meal.value);
    //console.log(table[meal.value]);
    table[meal.value].innerHTML +=
      "<tr><td>" +
      meal.value +
      "</td><td contenteditable>" +
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
      "</td></tr>";
  } else if (meal.value === "snack" && mealOptions.value) {
    //console.log(meal.value);
    table[meal.value].innerHTML +=
      "<tr><td>" +
      meal.value +
      "</td><td>" +
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
      "</td></tr>";
  } else if (meal.value === "lunch" && mealOptions.value) {
    //console.log(meal.value);
    table[meal.value].innerHTML +=
      "<tr><td>" +
      meal.value +
      "</td><td>" +
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
      "</td></tr>";
  } else {
    //console.log(meal.value);
    table[meal.value].innerHTML +=
      "<tr><td>" +
      meal.value +
      "</td><td>" +
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
      "</td></tr>";
  }

  /* if (meal.value) {
    thead.style.display = "block";
  } */
}

function testInsert() {
  // GET TEST TABLE
  const testTabel = document.getElementsByClassName("test-table");
  const newTable = testTabel[meal.value];
  const testRow = newTable.insertRow(-1);
  // SET VALUE FOR LOOP
  const vrednost = mealOptions.value - 1;

  for (const prop in mealDataV2[vrednost]) {
    if (meal.value === "breakfast" && mealOptions.value) {
      //console.log(prop + " ---> " + mealData[i][prop])
      testRow.innerHTML +=
        //"<td>" + prop + " ---> " + mealData[vrednost][prop] + "</td>"
        "<tr><td>" + mealData[vrednost][prop] + "</td></tr>";
    }
  }
}

// AJAX
function ajaxData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const myObj = JSON.parse(this.responseText);
      console.log(myObj);
      //for (let i = 0; i < myObj.length; i++) {
      for (let key in myObj) {
        if (myObj.hasOwnProperty(key)) {
          document.getElementById("display-container").innerHTML +=
            "<ul>" + "<li>" + myObj[key] + "</li>" + "</ul>";
        }
      }
      //}
      //document.getElementById("display-container").innerHTML = this.responseText
    }
  };
  xhttp.open("GET", "./data.json", true);
  xhttp.send();
}
