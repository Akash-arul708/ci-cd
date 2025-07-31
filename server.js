const express = require('express');
const app = express();

app.use(express.json());

// Sample tasks
let tasks = [
  { id: 1, title: "Learn CI/CD", done: false },
  { id: 2, title: "Dockerize App", done: false }
];

// Home route
app.get('/', (req, res) => res.send('Node.js CI/CD App Running!'));

// Get all tasks
app.get('/tasks', (req, res) => res.json(tasks));

// Add new task
app.post('/tasks', (req, res) => {
  const newTask = { id: tasks.length + 1, title: req.body.title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
