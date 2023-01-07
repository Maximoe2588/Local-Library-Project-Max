function findAuthorById(authors, id) {
  //return the author id that matches input id
  return authors.find((author) => id ===author.id);
}

function findBookById(books, id) {
  //return the book that matches input id
  return books.find((book) => id === book.id);
}

function partitionBooksByBorrowedStatus(books) {
    //create 2 arrays with let, books that are returned and not returned
  let isReturned = books.filter((book) => book.borrows[0].returned);
  let notReturned = books.filter((book) => !book.borrows[0].returned);
    //return arrays in border that test checks
  return [notReturned, isReturned];
}

function getBorrowersForBook(book, accounts) {
    //create empty array for borrow list
  let borrowList = [];
    //shorten book.borrows to borrows
  let borrows = book.borrows;
    //borrows for each
  borrows.forEach ((borrow) =>
    //accounts for each
  accounts.forEach ((account) => {
      //if account id matches borrow id
    if (account.id ===borrow.id) {
      //if account and borrow value match
      account.returned = borrow.returned;
      //push the account to the borrow list
      borrowList.push(account);
    }
  }));
  //return borrow list and slice top ten borrows
return borrowList.slice(0,10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
