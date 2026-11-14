import { getDb } from '../db/connect.js';

const getAllBooks = async () => {
  const database = getDb();
  const booksCollection = database.collection('books');
  const books = await booksCollection.find({}).toArray();

  return books;
};
const getBookById = async (bookId) => {
  const database = getDb();
  const booksCollection = database.collection('books');
  const book = await booksCollection.findOne({ id: bookId });

  return book;
};
const createBook = async (book) => {
  const database = getDb();
  const booksCollection = database.collection('books');
  await booksCollection.insertOne(book);

  return book;
};

const updateBook = async (id, book) => {
  const database = getDb();
  const booksCollection = database.collection('books');
  await booksCollection.updateOne({ id }, { $set: book });

  return { id, ...book };
};

const deleteBook = async (id) => {
  const database = getDb();
  const booksCollection = database.collection('books');
  const result = await booksCollection.deleteOne({ id });

  return result;
};

const authorExists = async (authorId) => {
  const database = getDb();
  const authorsCollection = database.collection('authors');
  const author = await authorsCollection.findOne({ id: authorId });

  return author !== null;
};
export { getAllBooks, getBookById , createBook, updateBook, deleteBook, authorExists };