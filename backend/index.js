const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Mock Data (Thay thế bằng query DB thật nếu đã kết nối)
const students = [
    { id: 1, name: "Nguyen Van A", major: "IT" },
    { id: 2, name: "Le Thi B", major: "Marketing" }
];

app.get('/api/students', (req, res) => {
    res.json(students);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});