import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  // Crear State de Citas (Array)
  const [citas, setCitas] = useState([]);

  // Se ejecuta inmediatamente después de que se monta la componente (primer renderizado)
  // Se ejecuta posteriormente después de cada actualización de la componente
  // Equivale a componentDidMount() y componentDidUpdate() de un Class Component
  useEffect(() => {
    console.log('Listo o Actualizado :D');
  }, [citas]);

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

  // Mensaje condicional
  const tituloLista = citas.length > 0 ? 'Administrar citas' : 'No hay citas';

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
            <h2>{tituloLista}</h2>
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
