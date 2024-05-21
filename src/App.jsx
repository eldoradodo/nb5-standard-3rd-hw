import React, { useState } from "react";
import FilterButtons from "./components/FilterButtons";
import StudentList from "./components/StudentList";


function App() {
  const initialStudents = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const [filteredStudents, setFilteredStudents] = useState(initialStudents);

  // 최소 나이 필터링
  const filterByAge = (minAge) => {
    const filtered = initialStudents.filter(student => student.age >= minAge);
    setFilteredStudents(filtered);
  };

  // 학점 필터링
  const filterByGrade = (grade) => {
    const filtered = initialStudents.filter(student => student.grade === grade);
    setFilteredStudents(filtered);
  };

  // 필터 초기화
  const resetFilter = () => {
    setFilteredStudents(initialStudents);
  };

  return (
    <div>
      <h1>학생 목록</h1>
      {/* FilterButtons 컴포넌트에 필요한 함수들을 props로 전달. */}
      <FilterButtons
        filterByAge={filterByAge}
        filterByGrade={filterByGrade}
        resetFilter={resetFilter}
      />

      {/* StudentList 컴포넌트에 필요한 props를 전달. */}
      <StudentList students={filteredStudents} />
    </div>
  );
}

export default App;
