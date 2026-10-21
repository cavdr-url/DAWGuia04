import React from 'react';

export default function HeaderClase({ tituloTema, nombreDocente, horario }) {
  // Estilos en línea para mantenerlo limpio y autocontenido
  const headerStyle = {
    backgroundColor: '#1e293b',
    color: '#ffffff',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    marginBottom: '20px',
    position: 'relative',
    overflow: 'hidden'
  };

  // Detalle visual: Barra por degradado
  const customDetailStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '6px',
    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)'
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ margin: '0 0 12px 0', fontSize: '1.8rem', color: '#3b82f6' }}>
        {tituloTema}
      </h1>
      <div style={{ display: 'flex', gap: '20px', fontSize: '0.95rem', opacity: 0.9 }}>
        <p style={{ margin: 0 }}><strong>Docente:</strong> {nombreDocente}</p>
        <p style={{ margin: 0 }}><strong>Horario:</strong> {horario}</p>
      </div>
      {/* Detalle visual propio */}
      <div style={customDetailStyle} />
    </header>
  );
}
