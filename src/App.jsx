export default function App() {
  const students = [
    { name: "Alice", age: 17, grade: "A" },
    { name: "Bob", age: 18, grade: "B" },
    { name: "Charlie", age: 16, grade: "C" },
    { name: "Diana", age: 19, grade: "D" },
  ];

  const filteredStudents = students.filter( student => student.age >= 18 ); 
  const click = (student) => { 
    alert (`${student.name}, ${student.age}, ${student.grade} `)
  };
  return (
    <div>
      <h1>학생 목록</h1>
      <ul>
        {filteredStudents.map(student => (
          <li key={student.name}>
            <button onClick={() => click(student)}>
              {student.name}
            </button>
          </li>
        )) }
        </ul>
    </div>
  );
};