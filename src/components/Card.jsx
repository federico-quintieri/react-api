export function Card({ titolo, immagine, contenuto, categoria, arrayTags, callbackCestina }) {
  // Devo fare un map di questo array tags craendo un array di span
  const arraySpanTags = arrayTags.map((currTag, currIndex) => (
    <span key={currIndex}>{currTag}</span>
  ));
  return (
    <div>
      <h2>{titolo}</h2>
      <img src={immagine} alt="" />
      <p>{contenuto}</p>
      <h4>{categoria}</h4>
      {arraySpanTags}
      <div>
        <button onClick={callbackCestina}>Cestina</button>
      </div>
    </div>
  );
}

