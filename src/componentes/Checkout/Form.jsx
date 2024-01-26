const Form = ({ datosForm, guardarDatosInput, enviarOrder }) => {
  return (
    <div>
      <h2>Porfavor complete con sus datos para seguir con la compra</h2>
      <form className="formulario" onSubmit={enviarOrder}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datosForm.nombre}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="telefono">Telefono</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={datosForm.telefono}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={datosForm.email}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="emailRepetido">Repetir Email</label>
        <input
          type="email"
          id="emailRepetido"
          name="emailRepetido"
          value={datosForm.emailRepetido}
          onChange={guardarDatosInput}
          required
        />

        <button type="submit">Enviar orden</button>
      </form>
    </div>
  );
};
export default Form;
