import React, { useState } from 'react';

export default function ActividadItem({ nombreActividad, descripcion }) {
  // Hook useState para controlar el estado de la actividad
  const [completada, setCompletada] = useState(false);

  const toggleEstado = () => {
    setCompletada(!completada);
  };

  const itemStyle = {
    backgroundColor: completada ? '#f0fdf4' : '#f8fafc',
    border: completada ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '12px',
    display: 'flex',
    justifyContent: '20px',
    alignItems: 'center',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    backgroundColor: completada ? '#22c55e' : '#64748b',
    color: '#ffffff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
  };

  return (
    <div style={itemStyle}>
      <div style={{ flex: 1, paddingRight: '16px' }}>
        <h3 style={{ 
          margin: '0 0 4px 0', 
          fontSize: '1.1rem',
          color: completada ? '#166534' : '#1e293b',
          textDecoration: completada ? 'line-through' : 'none' 
        }}>
          {nombreActividad}
        </h3>
        <p style={{ 
          margin: 0, 
          fontSize: '0.9rem', 
          color: completada ? '#166534' : '#64748b',
          opacity: completada ? 0.7 : 1,
          textDecoration: completada ? 'line-through' : 'none'
        }}>
          {descripcion}
        </p>
      </div>
      <button onClick={toggleEstado} style={buttonStyle}>
        {completada ? 'Completada' : 'Pendiente'}
      </button>
    </div>
  );
}
