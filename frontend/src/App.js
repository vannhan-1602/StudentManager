import React, { useEffect, useState } from 'react';
import './App.css'; // Import file CSS làm đẹp

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // THAY LINK BACKEND RENDER CỦA BẠN VÀO ĐÂY:
  const API_URL = "https://studentmanager-lklo.onrender.com/api/students"; 

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Loi:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>🎓 Quản Lý Sinh Viên</h1>
        <p>Hệ thống quản lý hồ sơ sinh viên trực tuyến</p>
      </header>

      {loading ? (
        <div className="loading">⏳ Đang tải dữ liệu...</div>
      ) : (
        <div className="table-container">
          <table className="student-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Họ và Tên</th>
                <th>Chuyên Ngành</th>
                <th>GPA</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.id}>
                  <td>#{s.id}</td>
                  <td className="name">{s.name}</td>
                  <td>{s.major}</td>
                  <td>
                    <span className={`gpa ${s.gpa >= 3.6 ? 'high' : 'normal'}`}>
                      {s.gpa}
                    </span>
                  </td>
                  <td>
                    <span className={`status ${s.status === 'Dang hoc' ? 'active' : 'inactive'}`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <footer className="footer">
        <p>Deployed by <b>GitHub Actions</b> & <b>Render/Vercel</b></p>
      </footer>
    </div>
  );
}

export default App;