export default function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <section className="goals-card" aria-labelledby="goals-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Antes de comenzar</p>
          <h2 id="goals-title">Metas de la sesión</h2>
        </div>
        <span className="goal-icon" aria-hidden="true">✦</span>
      </div>
      <div className="goal-grid">
        <article className="goal-item">
          <span className="goal-number">01</span>
          <div><h3>Competencia</h3><p>{competencia}</p></div>
        </article>
        <article className="goal-item">
          <span className="goal-number">02</span>
          <div><h3>Indicador de logro</h3><p>{indicadorLogro}</p></div>
        </article>
      </div>
    </section>
  );
}
