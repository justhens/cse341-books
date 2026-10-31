import { getDb } from '../db/connect.js';

const getAllBooks = async () => {
  const database = getDb();
  const booksCollection = database.collection('books');
  const books = await booksCollection.find({}).toArray();

  return books;
};

export { getAllBooks };