
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

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

  const containerStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      {/* Componente Header */}
      <HeaderClase 
        tituloTema={datosClase.tituloTema}
        nombreDocente={datosClase.nombreDocente}
        horario={datosClase.horario}
      />

      {/* Componente Metas / Objetivos */}
      <ObjetivosCard 
        competencia={datosClase.competencia}
        indicadorLogro={datosClase.indicadorLogro}
      />

      {/* Listado Dinámico de Actividades */}
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ color: '#0f172a', fontSize: '1.4rem', marginBottom: '16px' }}>
          Cronograma de Actividades
        </h2>
        {datosClase.actividades.map((actividad) => (
          <ActividadItem 
            key={actividad.id}
            nombreActividad={actividad.nombre}
            descripcion={actividad.descripcion}
          />
        ))}
      </div>
    </div>
  );
}
