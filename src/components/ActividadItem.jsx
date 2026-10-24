import { useState } from 'react';

export default function ActividadItem({ nombreActividad, descripcion, onEstadoChange }) {
  const [completada, setCompletada] = useState(false);

  const toggleEstado = () => {
    const nuevoEstado = !completada;
    setCompletada(nuevoEstado);
    onEstadoChange(nuevoEstado);
  };

  return (
    <article className={`activity-item ${completada ? 'is-complete' : ''}`}>
      <span className="activity-check" aria-hidden="true">{completada ? '✓' : '→'}</span>
      <div className="activity-copy">
        <h3>{nombreActividad}</h3>
        <p>{descripcion}</p>
      </div>
      <button className="activity-button" onClick={toggleEstado} aria-pressed={completada}>
        {completada ? 'Completada' : 'Marcar lista'}
      </button>
    </article>
  );
}
