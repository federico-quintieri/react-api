import { useState, useEffect } from "react";
import { Input } from "./components/Input";

const oggettoPartenza = {
  titolo: "",
  prezzo: 0,
  immagine: "",
  contenuto: "",
  categoria: "default", // Categoria di default
  pubblicato: false, // Stato booleano per il checkbox
};

function App() {
  const [inputState, setInputState] = useState(oggettoPartenza);
  const [arrayState, setArrayState] = useState([]);

  useEffect(() => {
    // Codice da eseguire se variabile in dipendenza cambia
    if (inputState.pubblicato) alert("Stai per pubblicare il libro");
  }, [inputState.pubblicato]);

  const callBackSetInputState = (event) => {
    const { name, type, value, checked } = event.target;
    setInputState((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value, // Gestione checkbox
    }));
  };

  const callbackSettaOggettoState = (event) => {
    event.preventDefault(); // Previene il refresh della pagina

    if (inputState.pubblicato) {
      // Aggiungi una copia di inputState a arrayState
      setArrayState((prevState) => [...prevState, inputState]);
    }

    // Resetta lo stato del form
    setInputState(oggettoPartenza);
  };

  return (
    <>
      <h1>Form Articolo</h1>
      <form onSubmit={callbackSettaOggettoState}>
        {/* Input per il titolo */}
        <Input
          chiaveState="titolo"
          objState={inputState}
          callbackState={callBackSetInputState}
          tipoInput="text"
          labelText="Inserisci titolo libro"
        />

        {/* Input per il prezzo */}
        <Input
          chiaveState="prezzo"
          objState={inputState}
          callbackState={callBackSetInputState}
          tipoInput="number"
          labelText="Inserisci prezzo libro"
        />

        {/* Input per l'immagine */}
        <Input
          chiaveState="immagine"
          objState={inputState}
          callbackState={callBackSetInputState}
          tipoInput="text"
          labelText="Inserisci URL immagine copertina"
        />

        {/* Input per il contenuto */}
        <Input
          chiaveState="contenuto"
          objState={inputState}
          callbackState={callBackSetInputState}
          tipoInput="text"
          labelText="Inserisci descrizione libro"
        />

        {/* Select categoria */}
        <label htmlFor="categoria">Categoria:</label>
        <select
          name="categoria"
          id="categoria"
          value={inputState.categoria}
          onChange={callBackSetInputState}
        >
          <option value="default" disabled>
            Seleziona una categoria
          </option>
          <option value="romanzo">Romanzo</option>
          <option value="saggio">Saggio</option>
          <option value="poesia">Poesia</option>
        </select>

        {/* Checkbox pubblicazione */}
        <Input
          chiaveState="pubblicato"
          objState={inputState}
          callbackState={callBackSetInputState}
          tipoInput="checkbox"
          labelText="Pubblica articolo"
        />
        <button type="submit" className="btn btn-primary">
          Salva articolo
        </button>
      </form>

      {/* Card dinamiche */}
      <div className="card-container">
        {arrayState.map((currObject, index) => (
          <div key={index} className="card">
            <h3>{currObject.titolo}</h3>
            <p>Prezzo: €{currObject.prezzo}</p>
            <img
              src={currObject.immagine || "https://via.placeholder.com/150"}
              alt={`Copertina di ${currObject.titolo}`}
            />
            <p>{currObject.contenuto}</p>
            <p>Categoria: {currObject.categoria}</p>
            <p>
              Stato: {currObject.pubblicato ? "Pubblicato" : "Non pubblicato"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
