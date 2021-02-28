export const CadenaGenerada = ({ resp, fullStr, setResp }) => {
  const handleClick = () => {
    setResp({});
  };
  return (
    <div className="datos-generados">
      <p className="full-string text-center">
        <span>Cadena generada:</span> {fullStr}
      </p>
      {resp.ok ? (
        <p className="use-reg text-center">
          <span>Datos registrados correctamente</span>
          <small>
            Puede descargar el archivo '.txt' generado haciendo click
            <a
              href={`http://localhost:5500/${resp.path.pathTxt}`}
              download={resp.file.fileTxt}
              onClick={handleClick}
            >
              aquí.
            </a>
          </small>
          {'  '}
          <small>
            Puede descargar el archivo '.xml' generado haciendo click
            <a
              href={`http://localhost:5500/${resp.path.pathXml}`}
              download={resp.file.fileXml}
              onClick={handleClick}
            >
              aquí.
            </a>
          </small>
        </p>
      ) : (
        <p className="reg-err text-center">
          <span>
            Ocurrió un error al guardar en la base de datos o al generar el
            archivo, por favor revise la información en intente de nuevo.
          </span>
        </p>
      )}
    </div>
  );
};
