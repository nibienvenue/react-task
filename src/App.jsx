import { useState } from "react";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Students from "./Students.jsx";
import Contact from "./Contact.jsx";

const schoolName = "Your School Name";
const className = "TVET Certificate IV - Software Development";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const [clickCount, setClickCount] = useState(0);

  function goToPage(page) {
    setCurrentPage(page);
  }

  return (
    <main>
      <header>
        <h1>{schoolName}</h1>
        <p>{className}</p>
        <nav aria-label="Main navigation">
          <button onClick={() => goToPage("Home")}>Home</button>{" "}
          <button onClick={() => goToPage("About")}>About</button>{" "}
          <button onClick={() => goToPage("Students")}>Students</button>{" "}
          <button onClick={() => goToPage("Contact")}>Contact</button>
        </nav>
      </header>

      <hr />

      {currentPage === "Home" && (
        <Home schoolName={schoolName} className={className} onNavigate={goToPage} />
      )}
      {currentPage === "About" && <About schoolName={schoolName} />}
      {currentPage === "Students" && <Students />}
      {currentPage === "Contact" && (
        <Contact schoolName={schoolName} onNavigate={goToPage} />
      )}

      <hr />
      <section>
        <h2>React Click Counter</h2>
        <p>You have clicked the button {clickCount} time(s).</p>
        <button onClick={() => setClickCount(clickCount + 1)}>Click me</button>{" "}
        <button onClick={() => setClickCount(0)}>Reset counter</button>
      </section>

      <footer>
        <p>Class Website | ReactJS Practical Assessment</p>
      </footer>
    </main>
  );
}
