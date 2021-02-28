import { useContext } from 'react';
import { GetString } from '../../helpers/getString';
import { useForm } from '../../hooks/useForm';
import { FormContext } from '../Context/FormContext';
import { FormSection } from './FormSection';
export const GeneralForm = () => {
  const { setGeneralData, setStr } = useContext(FormContext);
  const [formValues, handleInputChange, reset] = useForm({
    version: '2.0',
    tipoCertificado: '5',
    idNombreInstitucion: '',
    idCampus: '',
    idEntidadFederativa: '',
    curp: '',
    idCargo: '',
    numero: '',
    fechaExpedicion: '',
    idCarrera: '',
    idTipoPeriodo: '',
    clavePlan: '',
    idNivelEstudios: '',
    calificacionMinima: '',
    calificacionMaxima: '',
    calificacionMinimaAprobatoria: '',
    numeroControl: '',
    nombre: '',
    primerApellido: '',
    segundoApellido: '',
    idGenero: '',
    fechaNacimiento: '',
    foto: '',
    firmaAutografa: '',
    idTipoCertificacion: '',
    fecha: '',
    idLugarExpedicion: '',
    total: '',
    asignaturas: '',
    promedio: '',
    totalCreditos: '',
    creditosObtenidos: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setGeneralData(formValues);
    const fnS = new GetString([formValues]).getGeneralString();
    setStr(fnS);
    reset();
  };
  const camposSec8 = [
    {
      name: 'Total',
      data: 'total',
      value: formValues.total,
      change: handleInputChange,
    },
    {
      name: 'Asignaturas',
      data: 'asignaturas',
      value: formValues.asignaturas,
      change: handleInputChange,
    },
    {
      name: 'Promedio',
      data: 'promedio',
      value: formValues.promedio,
      change: handleInputChange,
    },
    {
      name: 'Total créditos',
      data: 'totalCreditos',
      value: formValues.totalCreditos,
      change: handleInputChange,
    },
    {
      name: 'Creditos obtenidos',
      data: 'creditosObtenidos',
      value: formValues.creditosObtenidos,
      change: handleInputChange,
    },
  ];
  const camposSec7 = [
    {
      name: 'ID Tipo de certificación',
      data: 'idTipoCertificacion',
      value: formValues.idTipoCertificacion,
      change: handleInputChange,
    },
    {
      name: 'Fecha',
      data: 'fecha',
      value: formValues.fecha,
      change: handleInputChange,
    },
    {
      name: 'ID Lugar Expedición',
      data: 'idLugarExpedicion',
      value: formValues.idLugarExpedicion,
      change: handleInputChange,
    },
  ];
  const camposSec6 = [
    {
      name: 'Número de Control',
      data: 'numeroControl',
      value: formValues.numeroControl,
      change: handleInputChange,
    },
    {
      name: 'Nombre',
      data: 'nombre',
      value: formValues.nombre,
      change: handleInputChange,
    },
    {
      name: 'Primer Apellido',
      data: 'primerApellido',
      value: formValues.primerApellido,
      change: handleInputChange,
    },
    {
      name: 'Segundo Apellido',
      data: 'segundoApellido',
      value: formValues.segundoApellido,
      change: handleInputChange,
    },
    {
      name: 'ID Género',
      data: 'idGenero',
      value: formValues.idGenero,
      change: handleInputChange,
    },
    {
      name: 'Fecha de Nacimiento',
      data: 'fechaNacimiento',
      value: formValues.fechaNacimiento,
      change: handleInputChange,
    },
    {
      name: 'Foto',
      data: 'foto',
      value: formValues.foto,
      change: handleInputChange,
    },
    {
      name: 'Firma Autógrama',
      data: 'firmaAutografa',
      value: formValues.firmaAutografa,
      change: handleInputChange,
    },
  ];
  const camposSec5 = [
    {
      name: 'ID Carrera',
      data: 'idCarrera',
      value: formValues.idCarrera,
      change: handleInputChange,
    },
    {
      name: 'ID Tipo de Periodo',
      data: 'idTipoPeriodo',
      value: formValues.idTipoPeriodo,
      change: handleInputChange,
    },
    {
      name: 'Clave Plan',
      data: 'clavePlan',
      value: formValues.clavePlan,
      change: handleInputChange,
    },
    {
      name: 'ID Nivel de Estudios',
      data: 'idNivelEstudios',
      value: formValues.idNivelEstudios,
      change: handleInputChange,
    },
    {
      name: 'Calificación Mínima',
      data: 'calificacionMinima',
      value: formValues.calificacionMinima,
      change: handleInputChange,
    },
    {
      name: 'Calificaión Máxima',
      data: 'calificacionMaxima',
      value: formValues.calificacionMaxima,
      change: handleInputChange,
    },
    {
      name: 'Calificación Mínima Aprobatoria',
      data: 'calificacionMinimaAprobatoria',
      value: formValues.calificacionMinimaAprobatoria,
      change: handleInputChange,
    },
  ];
  const camposSec4 = [
    {
      name: 'Número',
      data: 'numero',
      value: formValues.numero,
      change: handleInputChange,
    },
    {
      name: 'Fecha de Expedición',
      data: 'fechaExpedicion',
      value: formValues.fechaExpedicion,
      change: handleInputChange,
    },
  ];
  const camposSec3 = [
    {
      name: 'CURP',
      data: 'curp',
      value: formValues.curp,
      change: handleInputChange,
    },
    {
      name: 'ID Cargo',
      data: 'idCargo',
      value: formValues.idCargo,
      change: handleInputChange,
    },
  ];
  const camposSec2 = [
    {
      name: 'ID nombre de la institución',
      data: 'idNombreInstitucion',
      value: formValues.idNombreInstitucion,
      change: handleInputChange,
    },
    {
      name: 'ID campus',
      data: 'idCampus',
      value: formValues.idCampus,
      change: handleInputChange,
    },
    {
      name: 'ID Entidad Federativa',
      data: 'idEntidadFederativa',
      value: formValues.idEntidadFederativa,
      change: handleInputChange,
    },
  ];
  const camposSec1 = [
    {
      name: 'Versión',
      data: 'version',
      value: formValues.version,
      change: handleInputChange,
    },
    {
      name: 'Tipo de certificado',
      data: 'tipoCertificado',
      value: formValues.tipoCertificado,
      change: handleInputChange,
    },
  ];
  const secciones = [
    { nombre: 'Información del nodo DEC', campos: camposSec1 },
    { nombre: 'Información del nodo Ipes', campos: camposSec2 },
    { nombre: 'Información del nodo Responsable', campos: camposSec3 },
    { nombre: 'Información del nodo Rvoe', campos: camposSec4 },
    { nombre: 'Información del nodo Carrera', campos: camposSec5 },
    { nombre: 'Información del nodo Alumno', campos: camposSec6 },
    { nombre: 'Información del nodo Expedición', campos: camposSec7 },
    { nombre: 'Información del nodo Asignaturas', campos: camposSec8 },
  ];
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="form-header">Información general</h2>
      <div className="form-content">
        {secciones.map((seccion, i) => (
          <FormSection name={seccion.nombre} campos={seccion.campos} key={i} />
        ))}
      </div>
      <button
        type="submit"
        className="btn btn-secondary btn-rounded btn-block w95"
      >
        Usar datos
      </button>
    </form>
  );
};
