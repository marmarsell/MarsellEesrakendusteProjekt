
// TEHISINTELLEKTI KASUTATUD > EI OLE < ÜLDSE!!!
// seda peab vist välja tooma eraldi, kuna mulle punkte oli maha võetud niisama

// ÜLESANNE TEGEMISEL KASUTASIN SÕNADEMÄNGU TUNDIÜLESANDED REFERENSIKS
// AEG AJALT VAATASIN W3 SCHOOLS (https://https://www.w3schools.com/)
// KORRA PIILUSIN ONE COMPILERI PEALE (https://onecompiler.com/)

console.warn("ERROR:100\nSCRIPT_IS_IN_FACT_ACTIVE_OWO");

let allBooks = [];

let specialGlyphs = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~]/;

function loadFromDatabase() {

    allBooks = JSON.parse(localStorage.getItem("book"));
    if(allBooks == null) {
        allBooks = [];
    }
    console.log(allBooks);
    ListBooks();

}

function ClickAddBook() {

    console.log("TRIGGERED_BUTTON_ADD_BOOK");
    
    let fieldName = document.getElementById("book-name-field").value;

    if(
        fieldName == null || 
        fieldName == undefined ||
        fieldName == "" ||
        fieldName == " " ||
        fieldName == "  " ||
        fieldName == "   " ||
        fieldName == "    " ||
        fieldName == "     " ||
        fieldName == "      " ||
        fieldName == "       " ||
        fieldName == "        " ||
        fieldName == "         " ||
        fieldName == "          "
    ) {
        
        alert(":(\nEnter the name of a book first!");
    
    } 
    else if(fieldName.length >= 50) {

        alert(":(\nName cannot be longer than 50 glyphs!");

    }
    else if(specialGlyphs.test(fieldName) == true) {

        alert(":(\nName cannot contain special glyphs!");
        
    }
    else {

        let newBook = {
            bookName: fieldName,
            bookMark: 0,
            bookRead: false
        }

        allBooks.push(newBook);
        localStorage.setItem("book", JSON.stringify(allBooks));
        loadFromDatabase();

    }
}

function ListBooks() {

    $("#booklist").html("");
    $("#deprecatedBooklist").html("");

    for(let i = 0; i < allBooks.length; i++) {

        let visualID = i;
        if(i < 10) {
            visualID = "0" + i;
        }

        if(allBooks[i].bookRead == false) {

            $("#booklist").append(
                "<div class='readout'>" +
            
                    // Raamatu nimi
                    "<div style='width:20vw'>"
                        + allBooks[i].bookName + 
                    "</div>" + 

                    // Raamatu leheküljejärelhoidjanumbri vahetaja
                    "<div>"
                        + "PG: <input type='number' id='bookmarker" 
                            + i + 
                        "' value='" 
                            + allBooks[i].bookMark + 
                        "' onchange='SavePageEdits(" 
                            + i + 
                        ")' />" +
                    "</div>" +

                    // Loetud raamatute toggle
                    "<button onclick='BookReadToggleDeprecate(" 
                        + i + 
                    ")'> ▼ </button>" +

                    // DELETUS
                    "<div>&nbsp&nbsp</div>" +

                    // ID näidik, raamatute eraldamise jaoks
                    "<div>" 
                        + "ID: " + visualID + 
                    "</div>" +

                "</div><hr/>" 
            );
        }
        else {

            $("#deprecatedBooklist").append(
                "<div class='readout'>" +
            
                    // Raamatu nimi
                    "<div style='width:20vw'>"
                        + allBooks[i].bookName + 
                    "</div>" + 

                    // Raamatu leheküljejärelhoidjanumbri vahetaja
                    "<div>"
                        + "PG: <input type='number' id='bookmarker" 
                            + i + 
                        "' value='" 
                            + allBooks[i].bookMark + 
                        "' onchange='SavePageEdits(" 
                            + i + 
                        ")' />" +
                    "</div>" +

                    // Loetud raamatute toggle
                    "<button onclick='BookReadToggleRevive(" 
                        + i + 
                    ")'> ▲ </button>" +

                    // DELETUS
                    "<button onclick='RmBook(" 
                        + i + 
                    ")'> ⚠ </button>" +

                    // ID näidik, raamatute eraldamise jaoks
                    "<div>" 
                        + "ID: " + visualID + 
                    "</div>" +

                "</div><hr/>" 
            );
        }
    }
}

// Nuppude funktsioonid
function RmBook(entry) {

    console.log("TRIGGERED_BUTTON_REMOVE_BOOK_ID: " + entry);

    allBooks.splice(entry, 1);
    localStorage.setItem("book", JSON.stringify(allBooks));
    loadFromDatabase();

}

function SavePageEdits(entry) {

    console.log("TRIGGERED_PAGE_EDIT_BY_ID: " + entry);

    allBooks[entry].bookMark = document.getElementById("bookmarker" + entry).value;
    localStorage.setItem("book", JSON.stringify(allBooks));
    loadFromDatabase();

}

function BookReadToggleDeprecate(entry) {

    console.log("TRIGGERED_DEPRECATE_BY_ID: " + entry)

    allBooks[entry].bookRead = true;
    localStorage.setItem("book", JSON.stringify(allBooks));
    loadFromDatabase();

}

function BookReadToggleRevive(entry) {

    console.log("TRIGGERED_REVIVE_BY_ID: " + entry)

    allBooks[entry].bookRead = false;
    localStorage.setItem("book", JSON.stringify(allBooks));
    loadFromDatabase();

}

// Programmi initsiaalse oleku initsieerimine
loadFromDatabase();