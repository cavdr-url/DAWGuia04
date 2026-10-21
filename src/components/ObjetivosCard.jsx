import React from 'react';

export default function ObjetivosCard({ competencia, indicadorLogro }) {
  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    padding: '20px',
    boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
    marginBottom: '20px'
  };

  const paragraphStyle = {
    color: '#334155',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    marginBottom: '12px',
    textAlign: 'justify'
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ color: '#0f172a', fontSize: '1.4rem', marginTop: 0, marginBottom: '16px' }}>
        Metas de la Sesión
      </h2>
      <div style={{ marginBottom: '12px' }}>
        <h4 style={{ color: '#64748b', margin: '0 0 4px 0', textTransform: 'uppercase', fontSize: '0.75rem' }}>
          Competencia
        </h4>
        <p style={paragraphStyle}>
          {competencia}
        </p>
      </div>
      <div>
        <h4 style={{ color: '#64748b', margin: '0 0 4px 0', textTransform: 'uppercase', fontSize: '0.75rem' }}>
          Indicador de Logro
        </h4>
        <p style={paragraphStyle}>
          {indicadorLogro}
        </p>
      </div>
    </div>
  );
}
