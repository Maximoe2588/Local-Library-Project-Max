function getTotalBooksCount(books) {
  //return the length of the array of books
return books.length;
}

function getTotalAccountsCount(accounts) {
  //return the length of the array of accounts
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //establish a variable for borrowed with let and add up using reduce
  let borrowedBooks = books.reduce ((acc, book) => {
    return (acc +(!book.borrows[0].returned));
  }, 0);
  //return the list of borrowed books
  return borrowedBooks;
}

function getMostCommonGenres(books) {
  //establish variable using map on book array for genre
  const allGenres = books.map(book => book.genre);
  //establish empty result
  let result = [];
  allGenres.forEach(element => {
    let answer = result.find(res => res.name === element);
    if (answer !=null){
      answer.count++;
    }
    //push element and counter
    result.push({name:element, count: 1});
  });
  //return result
  return result.sort((a, b) => b.count-a.count).slice(0,5);
}
function sortTheBooks (bookA, bookB){
  //establish helper function subtracting bookB and bookA
  return bookB.count - bookA.count;
}

function getMostPopularBooks(books) {
//map the books
  return books.map(book => {
      //return title and length of the borrows for specific book
    return {
      name: book.title,
      count: book.borrows.length
    }
  }).sort(sortTheBooks).splice(0,5)
  
}

function getMostPopularAuthors(books, authors) {
  //establish empty array 
  let authorsResult = [];
  //find top author by matching id and also most borrowed book by borrows.length.
  let popularAuthor = books.filter((book) => authors.find((author) => author.id === book.authorId));
      popularAuthor.forEach((book) => {

        let author = authors.find((author) => author.id === book.authorId);
          //push the full name and count to the result array
        authorsResult.push( {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length})
      });

      return (authorsResult.sort((countA, countB) => countA.count < countB.count ? 1: -1)).slice(0, 5);

      }


module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
