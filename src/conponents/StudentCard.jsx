function StudentCard({ student, onSupprimer }) {
  return (
    <article className="student-card">
      <img
        src={student.image}
        alt={`${student.Prénom} ${student.Nom}`}
        className="student-photo"
      />

      <div className="student-info">
        <h3>
          {student.Prénom} {student.Nom}
        </h3>
        <p>{student.Email}</p>
        <p>Tél : {student.Téléphone}</p>
        <p>
          {student.Filière} · Groupe {student.Groupe}
        </p>
        <p>
          {student.Ville} · {student.Année}
        </p>
      </div>

      <button
        className="btn btn-danger"
        onClick={() => onSupprimer(student.id)}
      >
        Supprimer
      </button>
    </article>
  );
}

export default StudentCard;
