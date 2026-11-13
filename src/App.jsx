
import { useState } from "react";
import "./App.css";

import Header from "./conponents/Header.jsx";
import Navbar from "./conponents/Navbar.jsx";
import StudentCard from "./conponents/StudentCard.jsx";
import Footer from "./conponents/Footer.jsx";

import etude from "./assets/etude.jpg";
import amine from "./assets/amine.jpg";
import sara from "./assets/sara.jpg";
import alissa from "./assets/alissa.jpg";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      Nom: "bbj",
      Prénom: "klay",
      Email: "klaybbj@gmail.com",
      Téléphone: "200000390",
      Filière: "GLSI2",
      Année: "2026/2027",
      Groupe: "D2",
      Ville: "Mahdia",
      image: etude,
    },
    {
      id: 2,
      Nom: "Ben Ali",
      Prénom: "zine_el_abedine",
      Email: "zinbenali@gmail.com",
      Téléphone: "20000001",
      Filière: "GLSI2",
      Année: "2026/2027",
      Groupe: "D1",
      Ville: "Sousse",
      image: amine,
    },
    {
      id: 3,
      Nom: "slimaane",
      Prénom: "azza",
      Email: "azza23@gmail.com",
      Téléphone: "20000002",
      Filière: "GLSI2",
      Année: "2026/2027",
      Groupe: "D2",
      Ville: "Tunis",
      image: sara,
    },
  ]);

  function addstudent() {
    const newstudent = {
      id: 4,
      Nom: "saied",
      Prénom: "kais",
      Email: "kaissaied@gmail.com",
      Téléphone: "25000390",
      Filière: "GLSI2",
      Année: "2026/2027",
      Groupe: "A1",
      Ville: "Nabeul",
      image: alissa,
    };

    setStudents([...students, newstudent]);
  }
  function supprimerEtudiant(id) {
    setStudents(
        students.filter((student) => student.id !== id)
    );
}
  return (
    <div className="container" id="accueil">
      <Header />
      <Navbar />
      <div className="add-bar">
      <button className="btn btn-primary" onClick={addstudent}>
      Ajouter un étudiant
      </button>
      </div>



      <main id="etudiants">
        <h2 className="section-title">
          Liste des étudiants
        </h2>

        <div className="student-list">
          {students.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onSupprimer={supprimerEtudiant}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;




