import express from 'express';
const app = express();
app.use(express.json());

//app.get("/books", (req, res) => res.send("Get list of books"));
//app.post("/books", (req, res) => res.send("Add a new book"));

const books = [
    { id: 1, title: "The Hobbit", category: "fantasy" },
    { id: 2, title: "1984", category: "dystopia" },
    { id: 3, title: "Brave New World", category: "dystopia" },
    { id: 4, title: "The name of the wind", category: "fantasy" },
    { id: 5, title: "Clean code", category: "programming" },
    { id: 6, title: "the Progmatic programmer", category: "programming" }
]

app.get("/search/:category", (req, res) => {
    const { category } = req.params;
    const matches = books.filter((b) => b.category === category);
    res.json({ total: matches.length, books: matches });
});

app.post("/books", (req, res) => {
    const { title, category } = req.body;
    books.push({ id: books.length + 1, title, category });
    res.json({books},{ message: "Book added", book: { id: books.length, title, category } });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});