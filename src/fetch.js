import axios from "axios";

/**
 * get all books
 * @returns array of objects - books
 */
const getAllBooks = async () => {
  let url = "http://localhost:3000/books";
  const books = await axios.get(url, {
    responseType: "json",
  });
  // console.log(books.data);
  return books.data;
};

const deleteABook = async (bookId) => {
  let url = `http://localhost:3000/books/${bookId}`;
  const bookDeleted = await axios.delete(url, {});
  // console.log(bookDeleted);
  return bookDeleted;
};

export { getAllBooks, deleteABook };
