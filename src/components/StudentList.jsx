// TODO: StudentList 컴포넌트를 작성하세요. props로 학생 목록을 받아와서 표시해야 합니다.
// eslint-disable-next-line react/prop-types
function StudentList({ students }) {
  return (
    <ul>
      {/* 학생 목록을 순회하면서 각 학생의 정보를 출력합니다. */}
      {students.map((student, index) => (
        <li key={index}>
          {student.name} ({student.age}세) - {student.grade}등급
        </li>
      ))}
    </ul>
  );
}

export default StudentList;