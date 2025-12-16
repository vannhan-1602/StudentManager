const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Dữ liệu giả lập chi tiết hơn
const students = [
    { id: 1, name: "Nguyen Van An", major: "Cong Nghe Thong Tin", gpa: 3.8, status: "Dang hoc" },
    { id: 2, name: "Tran Thi Binh", major: "Marketing", gpa: 3.5, status: "Bao luu" },
    { id: 3, name: "Le Van Cuong", major: "Khoa Hoc Du Lieu", gpa: 4.0, status: "Tot nghiep" },
    { id: 4, name: "Pham Thi Dung", major: "Thiet Ke Do Hoa", gpa: 3.2, status: "Dang hoc" },
    { id: 5, name: "Hoang Van Em", major: "Ngon Ngu Anh", gpa: 3.6, status: "Dang hoc" }
];

app.get('/api/students', (req, res) => {
    // Giả lập độ trễ mạng (500ms) để thấy hiệu ứng Loading ở Frontend
    setTimeout(() => {
        res.json(students);
    }, 500);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});