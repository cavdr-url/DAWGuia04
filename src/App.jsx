
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';
import { useState } from 'react';

export default function App() {
  // Datos simulados de un Plan de Clase Digital Real
  const datosClase = {
    tituloTema: "Introducción a React y Arquitectura de Componentes",
    nombreDocente: "Mgtr. Kevin Estuardo Brolo Torre",
    horario: "Sábado - 07:00 a 09:20",
    competencia: "Aplica los principios de la programación declarativa y la arquitectura basada en componentes para construir interfaces de usuario web dinámicas, modulares y eficientes.",
    indicadorLogro: "Crea, compone y renderiza componentes funcionales independientes en React utilizando props para la transferencia de datos y useState para el manejo del estado local.",
    actividades: [
      {
        id: 1,
        nombre: "Configuración del entorno con Vite",
        descripcion: "Inicializar el proyecto, instalar dependencias y limpiar la estructura por defecto."
      },
      {
        id: 2,
        nombre: "Maquetación de Componentes Estáticos",
        descripcion: "Diseñar las interfaces de HeaderClase y ObjetivosCard usando Props reactivas."
      },
      {
        id: 3,
        nombre: "Implementación de Estado Local",
        descripcion: "Desarrollar la interactividad del botón en ActividadItem mediante el hook useState."
      }
    ]
  };

  const [actividadesCompletadas, setActividadesCompletadas] = useState(0);
  const progreso = Math.round((actividadesCompletadas / datosClase.actividades.length) * 100);

  return (
    <main className="app-shell">
      <HeaderClase 
        tituloTema={datosClase.tituloTema}
        nombreDocente={datosClase.nombreDocente}
        horario={datosClase.horario}
      />

      <ObjetivosCard 
        competencia={datosClase.competencia}
        indicadorLogro={datosClase.indicadorLogro}
      />

      <section className="activities-section" aria-labelledby="activities-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Ruta de aprendizaje</p>
            <h2 id="activities-title">Cronograma de actividades</h2>
          </div>
          <div className="progress-summary">
            <strong>{progreso}%</strong>
            <span>completado</span>
          </div>
        </div>
        <div className="progress-track" aria-label={`${progreso}% de actividades completadas`}>
          <span style={{ width: `${progreso}%` }} />
        </div>
        {datosClase.actividades.map((actividad) => (
          <ActividadItem 
            key={actividad.id}
            nombreActividad={actividad.nombre}
            descripcion={actividad.descripcion}
            onEstadoChange={(completada) => setActividadesCompletadas((actual) => actual + (completada ? 1 : -1))}
          />
        ))}
      </section>
      <footer className="app-footer">
        <span className="footer-mark">✦</span>
        Aprende haciendo, construye con intención.
      </footer>
    </main>
  );
}
