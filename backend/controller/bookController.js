import Book from '../models/bookModel.js';

// Obtener todos los libros
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find(); // Encuentra todos los documentos en la colección "books"
    res.status(200).json(books); // Respuesta en formato JSON
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los libros', error: error.message });
  }
};

// Obtener un libro por ID
export const getBooksById = async (req, res) => {
  const { id } = req.params; // Obtener el ID de los parámetros de la ruta

  try {
    const book = await Book.findById(id); // Buscar el libro por su ID

    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' }); // Si no existe, responder con un 404
    }

    res.status(200).json(book); // Respuesta con el libro encontrado
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el libro', error: error.message });
  }
};