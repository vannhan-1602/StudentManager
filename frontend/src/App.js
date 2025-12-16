import React, { useEffect, useState } from 'react';

function App() {
  const [students, setStudents] = useState([]);
  // URL Backend sau khi deploy trên Render
  const API_URL = process.env.REACT_APP_API_URL || "https://studentmanager-lklo.onrender.com/api/students";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <div>
      <h1>Danh sách sinh viên</h1>
      <ul>
        {students.map(s => <li key={s.id}>{s.name} - {s.major}</li>)}
      </ul>
    </div>
  );
}
export default App;