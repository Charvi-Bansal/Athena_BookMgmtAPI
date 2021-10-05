let books = [
    {
        ISBN: "12345ONE",
        title: "Getting started with MERN",
        authors: [1,2],
        language: "en",
        pubDate: "2021-09-13",
        numOfPage: 225,
        category: ["fiction", "programming", "tech","web dev"],
        publication: 1
    },
    {
        ISBN: "12345Two",
        title: "Getting started with C++",
        authors: [1],
        language: "en",
        pubDate: "2021-09-13",
        numOfPage: 225,
        category: ["fiction", "programming", "tech","web dev"],
        publication: 1
    },
];

let authors = [
    {
        id: 1,
        name: "charvi",
        books: ["12345ONE","12345Two"]
    },
    {
        id: 2,
        name: "astha",
        books: ["12345ONE"]
    }
];
let publications = [
    {
        id: 1,
        name: "Chakra",
        books: ["12345ONE"]
    },
    {
        id: 2,
        name: "Britannica",
        books: ["12345ONE","12345Two"]
    }
];


module.exports = {books, authors, publications};