 
import "./App.css";
import etudeImg from './assets/etude.jpg'
function App() {
  const prop = {
    Nom: "Yassine",
    Prénom: "Sioud",
    Email: "flavyousioud@gmail.com",
    Téléphone: "24000390",
    Filière: "GLSI2",
    Année: "2026/2027",
    Groupe: "D2",
    Ville: "Mahdia"
  };

  return (
    <div>
      <img src={etudeImg} alt="Photo de l'étudiant" className="student-image" />
      <h1>Fiche étudiant</h1>

      <p><strong>Nom :</strong> {prop.Nom}</p>
      <p><strong>Prénom :</strong> {prop.Prénom}</p>
      <p><strong>Email :</strong> {prop.Email}</p>
      <p><strong>Téléphone :</strong> {prop.Téléphone}</p>
      <p><strong>Filière :</strong> {prop.Filière}</p>
      <p><strong>Année d'étude :</strong> {prop.Année}</p>
      <p><strong>Groupe :</strong> {prop.Groupe}</p>
      <p><strong>Ville :</strong> {prop.Ville}</p>
    
<a href="mailto:flavyousioud@gmail.com" className="contact-button">
  Contacter
</a>

    </div>
    
  );
}

export default App;
