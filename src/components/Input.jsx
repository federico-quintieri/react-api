// Faccio component per inserire input
export function Input({
  chiaveState,
  objState,
  callbackState,
  tipoInput,
  labelText,
}) {
  return (
    <>
      <label htmlFor={`inp-${chiaveState}`}>{labelText}</label>
      <input
        name={chiaveState}
        id={`inp-${chiaveState}`}
        type={tipoInput}
        value={objState[chiaveState]}
        onChange={callbackState}
        required
      />
    </>
  );
}
