import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Input from "./components/Input";
import { getAllBooks, deleteABook } from "./fetch";
import BooksList from "./components/BooksList";

function App() {
  const [books, setBooks] = useState([]);

  const onSubmit = (text) => {
    console.log(text);
  };

  const fetchData = async () => {
    const booksFromApi = await getAllBooks();
    return booksFromApi;
  };

  const deleteBook = async (id) => {
    const bookDeleted = await deleteABook(id);
    fetchData().then((books) => {
      setBooks(books);
    });
    return bookDeleted;
  };

  useEffect(() => {
    fetchData().then((books) => {
      setBooks(books);
      console.log(books);
    });
    //for testing purposes
    //let book = 17;
    //deleteBook(book).then((book) => console.log(book));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Input onSubmit={onSubmit}></Input>
      <BooksList onDelete={deleteBook}>{books}</BooksList>
    </div>
  );
}

export default App;
