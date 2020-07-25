class Book{

    constructor(title, author, year, gender){
        
        this.title = title;
        this.author = author;
        this.year = year;
        this.genre = genre;
    }

    getAuthor(){

        return this.author;
    }

    getGender(){

        return this.gender;
    }

    bookInfo(){

        return `El libro ${this.title} fue escrito por ${this.author} en el año ${this.year}. Pertenece al género de ${this.gender}.`
    }

}

let books = [];

while(books.length < 3){
    let title = prompt('Ingrese nombre del libro');
    let author = prompt('Ingrese autor del libro');
    let year = parseInt(prompt('Ingrese año del libro'));
    let gender = prompt('Ingrese género del libro').toLowerCase();

    if(title != '' && author != '' && !isNaN(year) && year.length == 4 && (gender == 'aventura' || gender == 'terror'
    || gender == 'fantasia')){

        books.push(new Book(title, author, year, gender));
    }
}

const showAllBooks = () => {

    console.log(books);
}

//showAllBooks();

const showAuthors = () =>{
    let authors = []; 
    for (const book of books){
        authors.push(book.getAuthor());
    }
    console.log(authors.sort());
}

const showGender = () => {

    const gender = prompt('Ingrese el género a buscar');

    for (const book of books){
        if(book.getGender() == gender){
            console.log(book.bookInfo());
        }
    }
}
