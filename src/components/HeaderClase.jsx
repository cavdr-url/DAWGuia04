export default function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <header className="hero-card">
      <div className="hero-glow" />
      <div className="hero-content">
        <p className="hero-kicker"><span className="live-dot" /> Clase en progreso</p>
        <h1>{tituloTema}</h1>
        <div className="class-meta">
          <p><span className="meta-icon">◉</span><strong>Docente</strong>{nombreDocente}</p>
          <p><span className="meta-icon">◷</span><strong>Horario</strong>{horario}</p>
        </div>
      </div>
      <div className="hero-orbit orbit-one" />
      <div className="hero-orbit orbit-two" />
      <div className="hero-accent" />
    </header>
  );
}
