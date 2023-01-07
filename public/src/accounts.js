function findAccountById(accounts, id) {
  //create constant and use .find to stop when id matches
  const idFinder = accounts.find((account) => account.id ===id);
  //return the .find array
  return idFinder;

}

function sortAccountsByLastName(accounts) {
    //return sort statement
  return accounts.sort((nameA, nameB) => (nameA.name.last > nameB.name.last) ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  //establish variable to count/add every time ID matches
  let counter = 0;

  const accountInfo = account.id;
  //using forEach to loop through and check IDs
  books.forEach((book) => book.borrows.forEach((isBorrowed) => (accountInfo === isBorrowed.id) && counter ++));
  //return counter to see number of times account was used for borrows
return counter; 

}

function getBooksPossessedByAccount(account, books, authors) {
    //create variable for account id
  const accountInfo = account.id;
  //find books that are possessed

  let booksPossessed = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id);
   //get details of book including author
  let bookDetails = booksPossessed.map((detail) => ({
    ...detail, author: authors.find((author) => author.id === detail.authorId)
  }));
    //return object
  return bookDetails;

}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
