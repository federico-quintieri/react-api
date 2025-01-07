export function Input({ proprieta, callbackSync }) {
  return (
    <div>
      <label htmlFor={proprieta}>
        Inserisci {proprieta}
        <input
          id={proprieta}
          type={tipoInput}
          name={proprieta}
          value={oggettoInpState[proprieta]}
          onChange={callbackSync}
          required
        />

      </label>
    </div>
  );
}
