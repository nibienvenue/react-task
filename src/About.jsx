export default function About({ schoolName }) {
  return (
    <section>
      <h2>About Our Class</h2>
      <p>
        The purpose of this website is to present information about our class,
        students, and the subjects we study.
      </p>
      <p>
        We study Software Development at {schoolName}. Software Development
        involves planning, creating, testing, and maintaining computer
        applications.
      </p>
      <h3>Subjects and skills we learn</h3>
      <ul>
        <li>Front-End Development with ReactJS</li>
        <li>HTML and JavaScript programming</li>
        <li>Database development and SQL</li>
        <li>Back-End Development</li>
        <li>Git and GitHub</li>
      </ul>
    </section>
  );
}
