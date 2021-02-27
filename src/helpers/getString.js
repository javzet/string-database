class GetString {
  constructor(data) {
    this.data = data;
  }

  getCoursesString() {
    const strGen = this.data.map((element) => {
      let str = [
        element.idAsignatura,
        element.ciclo,
        element.calificacion,
        element.idTipoAsignatura,
        element.creditos,
      ];
      return str.join('|');
    });
    return strGen.join();
  }

  getGeneralString() {
    const strGen = this.data.map((element) => {
      let str = [
        element.version,
        element.tipoCertificado,
        element.idNombreInstitucion,
        element.idCampus,
        element.idEntidadFederativa,
        element.curp,
        element.idCargo,
        element.numero,
        element.fechaExpedicion,
        element.idCarrera,
        element.idTipoPeriodo,
        element.clavePlan,
        element.idNivelEstudios,
        element.calificacionMinima,
        element.calificacionMaxima,
        element.calificacionMinimaAprobatoria,
        element.numeroControl,
        element.nombre,
        element.primerApellido,
        element.segundoApellido,
        element.idGenero,
        element.fechaNacimiento,
        element.foto,
        element.idTipoCertificacion,
        element.fecha,
        element.idLugarExpedicion,
        element.total,
        element.asignaturas,
        element.promedio,
        element.totalCreditos,
        element.creditosObtenidos,
      ];
      this.generalStr = str;
      return str.join('|');
    });
    return strGen.join();
  }

  getCompleteString(courses, generalStr) {
    let cour = [];
    courses.forEach((course) => {
      cour = [...cour, course.str];
    });
    let str = `||${generalStr}|${cour.join('|')}||`;
    return str;
  }
}

module.exports = { GetString };
