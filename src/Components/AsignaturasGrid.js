import { useContext } from 'react';
import { FormContext } from './Context/FormContext';

export const AsignaturasGrid = () => {
  const { courses } = useContext(FormContext);
  return (
    <div className="asignaturas-grid">
      <div className="asignatura asignatura-header">
        <span>ID Asignatura</span>
        <span>Ciclo</span>
        <span>Calificación</span>
        <span>ID Tipo asignatura</span>
        <span>Créditos</span>
      </div>
      {courses.length === 0 && (
        <div className="sin-asignatura asignatura">
          <span>Aún no ha agregado asignaturas</span>
        </div>
      )}
      {courses.map((course, i) => (
        <div className="asignatura" key={i}>
          <span>{course.idAsignatura}</span>
          <span>{course.ciclo}</span>
          <span>{course.calificacion}</span>
          <span>{course.idTipoAsignatura}</span>
          <span>{course.creditos}</span>
        </div>
      ))}
    </div>
  );
};

export const CadenasGrid = () => {
  const { courses } = useContext(FormContext);
  return (
    <div className="asignaturas-grid">
      <div className="asignatura asignatura-header">
        <span>Cadenas generadas</span>
      </div>
      {courses.length === 0 && (
        <div className="sin-asignatura asignatura">
          <span>Aún no ha agregado asignaturas</span>
        </div>
      )}
      {courses.map((course, i) => (
        <div className="asignatura" key={i}>
          <span className="str">{course.str}</span>
        </div>
      ))}
    </div>
  );
};
