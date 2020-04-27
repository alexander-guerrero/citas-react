import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

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
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
