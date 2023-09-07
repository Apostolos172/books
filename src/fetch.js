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

const editABook = async (bookId, editedBook) => {
  let url = `http://localhost:3000/books/${bookId}`;
  console.log(bookId, editedBook, url);
//   console.log(10, {
//     title: "Peac",
//     author: "Leo Tolstoy",
//     id: 10,
//   });
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await axios.put(url, editedBook, { headers });
  console.log(response);
  return response;
};

export { getAllBooks, deleteABook, editABook };
