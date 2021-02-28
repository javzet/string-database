import { useEffect, useState } from 'react';
import { AsignaturasGrid, CadenasGrid } from './Components/AsignaturasGrid';
import { CadenaGenerada } from './Components/CadenaGenerada';
import { FormContext as DataContext } from './Components/Context/FormContext';
import { CoursesForm } from './Components/Form/CoursesForm';
import { GeneralForm } from './Components/Form/GeneralForm';
import { GetString } from './helpers/getString';
import { sendData } from './helpers/sendData';
export const App = () => {
  const [courses, setCourses] = useState([]);
  const [generalData, setGeneralData] = useState([]);
  const [strCourses, setStrCourses] = useState([]);
  const [str, setStr] = useState('');
  const [viewStrs, setViewStrs] = useState(false);
  const [fullStr, setFullStr] = useState('');
  const getDataFromStorage = () => {
    setCourses(JSON.parse(localStorage.getItem('courses')) || []);
    setGeneralData(JSON.parse(sessionStorage.getItem('generalData')) || []);
  };

  const [resp, setResp] = useState({});

  const handleSend = async () => {
    getDataFromStorage();
    if (generalData.length < 1) {
      console.log('Por favor agrege datos primero');
      return;
    }
    const nuevoStr = new GetString([generalData]).getGeneralString();
    const fullStrC = new GetString().getCompleteString(courses, nuevoStr);
    setFullStr(fullStrC);
    const cour = JSON.stringify(courses);
    const completeData = { ...generalData, courses: cour, cadena: fullStrC };
    console.log(completeData);
    const resp = await sendData(completeData);
    setResp(resp);
  };
  useEffect(() => {
    getDataFromStorage();
  }, []);
  useEffect(() => {
    sessionStorage.setItem('generalData', JSON.stringify(generalData));
  }, [generalData]);
  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);
  return (
    <>
      <header>
        <div className="header-contaniner">
          <img src="/logo.svg" alt="Logo" />
          <h1>Generador de cadena original</h1>
        </div>
      </header>
      <div className="container">
        <DataContext.Provider
          value={{
            courses,
            setCourses,
            generalData,
            setGeneralData,
            strCourses,
            setStrCourses,
            str,
            setStr,
          }}
        >
          <GeneralForm />
          <div className="asignaturas">
            <CoursesForm />
            <div className="asignaturas-agregadas">
              <h2
                className="text-center form-header cursor-pointer"
                onClick={() => setViewStrs(!viewStrs)}
              >
                {!viewStrs ? 'Asignaturas agregadas' : 'Cadenas agregadas'}
              </h2>
              {!viewStrs ? <AsignaturasGrid /> : <CadenasGrid />}
            </div>
          </div>
          {fullStr !== '' && (
            <CadenaGenerada fullStr={fullStr} resp={resp} setResp={setResp} />
          )}
          <button
            className="btn btn-primary btn-rounded btn-block w95"
            onClick={handleSend}
          >
            Enviar datos
          </button>
        </DataContext.Provider>
      </div>
    </>
  );
};
