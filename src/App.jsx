
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const students = [
    {
      id: 1,
      Nom: "Sioud",
      Prénom: "Yassine",
      Email: "flavyousioud@gmail.com",
      Téléphone: "24000390",
      Filière: "GLSI2",
      Année: "2026/2027",
      Groupe: "D2",
      Ville: "Mahdia",
    },
    {
      id: 2,
      Nom: "Ben Ali",
      Prénom: "Amine",
      Email: "amine123@gmail.com",
      Téléphone: "20000001",
      Filière: "GLSI2",
      Année: "2026/2027",
      Groupe: "D1",
      Ville: "Sousse",
    },
    {
      id: 3,
      Nom: "Trabelsi",
      Prénom: "Sara",
      Email: "sara23@gmail.com",
      Téléphone: "20000002",
      Filière: "GLSI2",
      Année: "2026/2027",
      Groupe: "D2",
      Ville: "Tunis",
    },
  ];

  return (
    <div className="container" id="accueil">
      <Header />
      <Navbar />

      <main id="etudiants">
        <h2 className="section-title">
          Liste des étudiants
        </h2>

        <div className="student-list">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;