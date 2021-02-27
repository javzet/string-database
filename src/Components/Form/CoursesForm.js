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
    console.log(formValues);
    const str = new GetString([formValues]).getCoursesString();
    setStrCourses([...strCourses, str]);
    setCourses([...courses, { ...formValues, str }]);
    sessionStorage.setItem('courses', JSON.stringify(courses));
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
