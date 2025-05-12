console.warn("ERROR:100\nSCRIPT_IS_IN_FACT_ACTIVE_UWU");

allBooks = [];

class Books {

    constructor() {
        this.bookName = String,
        this.bookMark = 0,
        this.bookRead = false
    }

}

function loadFromDatabase() {
    $.get("database.txt", (data) => {
        let content = JSON.parse(data).content;
        allBooks = content;
    });
}

loadFromDatabase();
console.log(allBooks)