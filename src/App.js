import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Crear State de Citas (Array)
  const [citas, setCitas] = useState([]);

  // Guardar Cita en el State de Citas
  const guardarCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  };

  // Eliminar Cita del State de Citas
  const eliminarCita = cita => {
    const citasTmp = citas.filter(c => c.id !== cita.id);
    setCitas(citasTmp);
  };


  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              guardarCita={guardarCita}
            />
          </div>
          <div className="one-half column">
            <h2>Administrar citas</h2>
            {citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
