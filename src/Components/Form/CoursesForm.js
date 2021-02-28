import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { FormContext } from '../Context/FormContext';
import { FormControl } from './FormControl';
import { GetString } from '../../helpers/getString';

export const CoursesForm = () => {
  const { setCourses, courses, setStrCourses, strCourses } = useContext(
    FormContext,
  );
  const [formValues, handleInputChange, reset] = useForm({
    idAsignatura: '',
    ciclo: '',
    calificacion: '',
    idTipoAsignatura: '',
    creditos: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const campos = [
      e.target.idAsignatura.value,
      e.target.ciclo.value,
      e.target.calificacion.value,
      e.target.idTipoAsignatura.value,
      e.target.creditos.value,
    ];
    const validar = campos.reduce((total, campo) => {
      return total * campo.length;
    });
    if (validar < 5) {
      return;
    }
    const str = new GetString([formValues]).getCoursesString();
    setStrCourses([...strCourses, str]);
    setCourses([...courses, { ...formValues, str }]);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-header text-center">Agregar asignaturas</h2>
      <div className="form-group">
        <FormControl
          data="idAsignatura"
          name="ID Asignatura"
          value={formValues.idAsignatura}
          change={handleInputChange}
        />
        <FormControl
          data="ciclo"
          name="Ciclo"
          value={formValues.ciclo}
          change={handleInputChange}
        />
        <FormControl
          data="calificacion"
          name="Calificación"
          value={formValues.calificacion}
          change={handleInputChange}
        />
        <FormControl
          data="idTipoAsignatura"
          name="ID Asignatura"
          value={formValues.idTipoAsignatura}
          change={handleInputChange}
        />
        <FormControl
          data="creditos"
          name="Créditos"
          value={formValues.creditos}
          change={handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="btn btn-secondary btn-rounded btn-block w95"
      >
        Agregar asignatura
      </button>
    </form>
  );
};
