import React, { Fragment } from 'react';

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Cita</h2>
      <form>
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
        />
        <label>Nombre dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
        />
        <input
          type="submit"
          value="Agregar cita"
          className="u-full-width button-primary"
        />
      </form>
    </Fragment>
  );
}

export default Formulario;