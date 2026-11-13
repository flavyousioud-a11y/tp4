

import etudeImg from "../assets/etude.jpg";
import amine from "../assets/amine.jpg";
import sara from "../assets/sara.jpg";

function StudentCard({ student }) {
  let photo = etudeImg;

  if (student.id === 2) {
    photo = amine;
  } else if (student.id === 3) {
    photo = sara;
  }

  return (
    <div className="student-card">
      <img
        src={photo}
        alt={`Photo de ${student.Prénom}`}
        className="student-image"
      />

      <h2>
        {student.Prénom} {student.Nom}
      </h2>

      <p><strong>Email :</strong> {student.Email}</p>
      <p><strong>Téléphone :</strong> {student.Téléphone}</p>
      <p><strong>Filière :</strong> {student.Filière}</p>
      <p><strong>Année :</strong> {student.Année}</p>
      <p><strong>Groupe :</strong> {student.Groupe}</p>
      <p><strong>Ville :</strong> {student.Ville}</p>

      <a
        href={`mailto:${student.Email}`}
        className="contact-button"
      >
        Contacter
      </a>
    </div>
  );
}

export default StudentCard;