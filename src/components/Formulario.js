import React, { Fragment, useState } from 'react';

const Formulario = () => {

  // Crear State de Citas
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  // Capturar los valores ingresados por el usuario (en cada cambio)
  const actualizarState = () => {
    console.log('onChange :D');
  };

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
          onChange={actualizarState}
        />
        <label>Nombre dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
          onChange={actualizarState}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
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