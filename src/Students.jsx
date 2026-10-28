const students = [
  { id: "ST001", name: "Student One", trade: "Software Development" },
  { id: "ST002", name: "Student Two", trade: "Software Development" },
  { id: "ST003", name: "Student Three", trade: "Software Development" },
  { id: "ST004", name: "Student Four", trade: "Software Development" },
  { id: "ST005", name: "Student Five", trade: "Software Development" }
];

export default function Students() {
  return (
    <section>
      <h2>Our Students</h2>
      <p>Replace the sample names below with the real names of your classmates.</p>
      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Name</th>
            <th>Trade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.trade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
