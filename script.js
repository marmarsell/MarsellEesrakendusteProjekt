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

    let newBook = {
        bookName: "test book",
        bookMark: allBooks.length,
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

                + allBooks[i].bookName + "</div><div style='width:20vw'>"
                + allBooks[i].bookMark + "</div><div style='width:20vw'>"
                + allBooks[i].bookRead + "</div>" +

                "<button onclick='RmBook(" + i + ")'> X </button>" + 

            "</div><hr/>" 
        );

    }
}

function RmBook(entry) {
    console.log("TRIGGERED_BUTTON_REMOVE_BOOK: " + entry);

    allBooks.splice(entry, 1);
    localStorage.setItem("book", JSON.stringify(allBooks));
    loadFromDatabase();
}

loadFromDatabase();