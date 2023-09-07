import "./App.css";
import Header from "./components/Header";
import { useEffect } from "react";
import Input from "./components/Input";
import BooksList from "./components/BooksList";
import useBooksContext from "./hooks/useBooksContext";

function App() {
  const { books, fetchData, setBooks } = useBooksContext();

  useEffect(() => {
    fetchData().then((books) => {
      setBooks(books);
      console.log(books);
    });
    //for testing purposes
    // editBook(10, {
    //   title: "Peas",
    //   author: "Leo Tolstoy",
    //   id: 10,
    // });
    //let book = 17;
    //deleteBook(book).then((book) => console.log(book));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Input></Input>
      <BooksList>{books}</BooksList>
    </div>
  );
}

export default App;
