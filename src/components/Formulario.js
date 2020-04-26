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

  // Crear State de validación
  const [error, setError] = useState(false);

  // Capturar los valores ingresados por el usuario (en cada cambio)
  const actualizarState = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  // Extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // Al hacer click en "Agregar cita" (envío del formulario)
  const enviarCita = e => {
    e.preventDefault();
    // Validar
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      setError(true);
      return;
    }
    
    // Asignar un ID

    // Crear la cita

    // Reiniciar el form
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      {error
        ?
        <p className="alerta-error">Todos los campos son obligatorios</p>
        :
        null}

      <form
        onSubmit={enviarCita}
      >
        <label>Nombre mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de la mascota"
          onChange={actualizarState}
          value={mascota}
        />
        <label>Nombre dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del propietario"
          onChange={actualizarState}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarState}
          value={hora}
        />
        <label>Síntomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
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