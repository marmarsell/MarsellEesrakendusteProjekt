console.warn("ERROR:100\nSCRIPT_IS_IN_FACT_ACTIVE_OWO");

let allBooks = [];

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

    let newBook = {
        bookName: fieldName,
        bookMark: 0,
        bookRead: false
    }

    allBooks.push(newBook);
    localStorage.setItem("book", JSON.stringify(allBooks));
    loadFromDatabase();
}

function ListBooks() {
    $("#booklist").html("");
    for(let i = 0; i < allBooks.length; i++) {
            
        $("#booklist").append(
            "<div class='readout'>" +
            
                "<div style='width:20vw'>"
                    + allBooks[i].bookName + 
                "</div>" + 

                "<div>"
                    + "PG: <input type='number' id='bookmarker" 
                        + i + 
                    "' value='" 
                        + allBooks[i].bookMark + 
                    "' onchange='SavePageEdits(" 
                        + i + 
                    ")' />" +
                "</div>" +

                "<button onclick='RmBook(" 
                    + i + 
                ")'> X </button>" +

                "<div>" 
                    + "ID: " + i + 
                "</div>" +

            "</div><hr/>" 
        );

    }
}

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

loadFromDatabase();