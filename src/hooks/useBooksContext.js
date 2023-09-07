import { useContext } from "react";
import BooksContext from "../context/BooksContext";

const useBooksContext = () => useContext(BooksContext);

export default useBooksContext;
