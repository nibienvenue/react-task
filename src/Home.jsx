export default function Home({ schoolName, className, onNavigate }) {
  return (
    <section>
      <h2>Welcome to Our Class Website</h2>
      <p>Welcome to {schoolName}.</p>
      <p>Class: {className}</p>
      <p>
        This website introduces our class, our students, and the subjects we
        learn in Software Development.
      </p>
      <h3>Explore our website</h3>
      <p>
        <button onClick={() => onNavigate("About")}>Learn About Our Class</button>{" "}
        <button onClick={() => onNavigate("Students")}>View Students</button>{" "}
        <button onClick={() => onNavigate("Contact")}>Contact the School</button>
      </p>
    </section>
  );
}
