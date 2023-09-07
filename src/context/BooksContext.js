import { createContext } from "react";
import { useState } from "react";
import { getAllBooks, deleteABook, editABook, addABook } from "../fetch";

const BooksContext = createContext();

const State = ({ children }) => {
  let thingsToShare = "";

  const [books, setBooks] = useState([]);

  const fetchData = async () => {
    const booksFromApi = await getAllBooks();
    return booksFromApi;
  };

  const onSubmit = async (text) => {
    console.log(text);
    await addABook(text);
    fetchData().then((books) => {
      setBooks(books);
    });
  };

  const deleteBook = async (id) => {
    const bookDeleted = await deleteABook(id);
    fetchData().then((books) => {
      setBooks(books);
    });
    return bookDeleted;
  };

  const editBook = async (id, editedBook) => {
    //console.log(id, editedBook);
    const response = await editABook(id, editedBook);
    fetchData().then((books) => {
      setBooks(books);
    });
    return response;
  };

  thingsToShare = { books, setBooks, deleteBook, fetchData, editBook, onSubmit };

  return (
    <BooksContext.Provider value={thingsToShare}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
export { State };
