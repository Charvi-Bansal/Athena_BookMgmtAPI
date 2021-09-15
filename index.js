//Framework
const express = require("express");

//Database
const database = require("./database/index");

//Initialising express
const athena = express();

//configurations 
athena.use(express.json());


/* 
Route          /
Description    get all books
Access         PUBLIC
Parameters     NONE
Method         GET
*/
athena.get("/", (req,res) => {
    return res.json({books: database.books});
})


/* 
Route          /is 
Description    get specific book based on ISBN
Access         PUBLIC
Parameters     isbn
Method         GET
*/
athena.get("/is/:isbn", (req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if(getSpecificBook.length === 0){
        return res.json({error: `No specific book found for the ISBN ${req.params.isbn}`})
    }

    return res.json({book: getSpecificBook});

});


/* 
Route          /c
Description    get specific books based on category
Access         PUBLIC
Parameters     category
Method         GET
*/
athena.get("/c/:category", (req,res) => {
    const getSpecificBooks = database.books.filter(
        (book) => book.category.includes(req.params.category)
    );

    if(getSpecificBooks.length === 0){
        return res.json({error: `No books found for the category ${req.params.category}`})
    }

    return res.json({book: getSpecificBooks});
})


/* 
Route          /a
Description    get specific books based on authors
Access         PUBLIC
Parameters     authors
Method         GET
*/
athena.get("/a/:authors", (req,res) => {
    const getSpecificBooks = database.books.filter(
        (book) => book.authors.includes(parseInt(req.params.authors))
    );

    if(getSpecificBooks.length === 0){
        return res.json({error: `No books found for author ${req.params.authors}`})
    }

    return res.json({book: getSpecificBooks});
})


/* 
Route          /author
Description    get all authors
Access         PUBLIC
Parameters     NONE
Method         GET
*/
athena.get("/author", (req,res) => {
    return res.json({authors: database.authors});
})


/* 
Route          /authid 
Description    get specific author based on id
Access         PUBLIC
Parameters     id
Method         GET
*/
athena.get("/authid/:id", (req,res) => {
    const getSpecificAuthor = database.authors.filter(
        (author) => author.id == req.params.id
    );

    if(getSpecificAuthor.length === 0){
        return res.json({error: `No specific author found for the id ${req.params.id}`})
    }

    return res.json({author: getSpecificAuthor});

});


/* 
Route          /author
Description    get a list of authors based on a book's isbn
Access         PUBLIC
Parameters     isbn
Method         GET
*/
athena.get("/author/:isbn",(req,res) => {
    const getSpecificAuthors = database.authors.filter((author) => 
        author.books.includes(req.params.isbn)
    );

    if(getSpecificAuthors.length === 0){
        return res.json({error: `No authors found for book ${req.params.isbn}`})
    }

    return res.json({authors: getSpecificAuthors})
})

/* 
Route          /publications
Description    get all publications
Access         PUBLIC
Parameters     NONE
Method         GET
*/
athena.get("/publications", (req,res) => {
    return res.json({publications: database.publications});
})


/* 
Route          /pubid 
Description    get specific publication based on id
Access         PUBLIC
Parameters     id
Method         GET
*/
athena.get("/pubid/:id", (req,res) => {
    const getSpecificPublication = database.publications.filter(
        (publication) => publication.id == req.params.id
    );

    if(getSpecificPublication.length === 0){
        return res.json({error: `No specific publication found for the id ${req.params.id}`})
    }

    return res.json({author: getSpecificPublication});

});


/* 
Route          /publications
Description    get a list of publications based on a book's isbn
Access         PUBLIC
Parameters     isbn
Method         GET
*/
athena.get("/publications/:isbn",(req,res) => {
    const getSpecificPublications = database.authors.filter((publication) => 
    publication.books.includes(req.params.isbn)
    );

    if(getSpecificPublications.length === 0){
        return res.json({error: `No publications found for book ${req.params.isbn}`})
    }

    return res.json({publications: getSpecificPublications})
})


athena.listen(3000, () => console.log("Server running!"));
