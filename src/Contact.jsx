export default function Contact({ schoolName, onNavigate }) {
  return (
    <section>
      <h2>Contact Us</h2>
      <p>School: {schoolName}</p>
      <p>Location: Rwanda (replace with your school's location)</p>
      <p>
        Email: <a href="mailto:your-school@example.com">your-school@example.com</a>
      </p>
      <button onClick={() => onNavigate("Home")}>Return to Home</button>
    </section>
  );
}
