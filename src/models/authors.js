import { getDb } from '../db/connect.js';

const getAllAuthors = async () => {
  const database = getDb();
  const authorsCollection = database.collection('authors');
  const authors = await authorsCollection.find({}).toArray();

  return authors;
};

const getAuthorById = async (id) => {
  const database = getDb();
  const authorsCollection = database.collection('authors');
  const author = await authorsCollection.findOne({ id });

  return author;
};

const createAuthor = async (author) => {
  const database = getDb();
  const authorsCollection = database.collection('authors');
  await authorsCollection.insertOne(author);

  return author;
};

const updateAuthor = async (id, author) => {
  const database = getDb();
  const authorsCollection = database.collection('authors');
  await authorsCollection.updateOne({ id }, { $set: author });

  return { id, ...author };
};

const deleteAuthor = async (id) => {
  const database = getDb();
  const authorsCollection = database.collection('authors');
  const result = await authorsCollection.deleteOne({ id });

  return result;
};

const authorHasBooks = async (id) => {
  const database = getDb();
  const booksCollection = database.collection('books');
  const bookCount = await booksCollection.countDocuments({ authorId: id });

  return bookCount > 0;
};

export {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
  authorHasBooks
};