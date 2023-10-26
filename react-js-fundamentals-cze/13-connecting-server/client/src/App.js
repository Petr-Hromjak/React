import "./App.css";
import ClassroomInfo from "./bricks/ClassroomInfo";
import StudentList from "./bricks/StudentList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiLoading } from "@mdi/js";
import styles from "./css/classroom.module.css";

const CallState = {
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error',
};

function App() {
  const [classroomLoadCall, setClassroomLoadCall] = useState({
    state: CallState.PENDING,
  });

  useEffect(() => {
    fetch(`http://localhost:3000/classroom/load?id=${"f780b198cf290778"}`, {
      method: "GET",
    }).then(async (response) => {
      const responseJson = await response.json();
      if (response.status >= 400) {
        setClassroomLoadCall({ state: CallState.ERROR, error: responseJson });
      } else {
        setClassroomLoadCall({ state: CallState.SUCCESS, data: responseJson });
      }
    });
  }, []);

  function getChild() {
    switch (classroomLoadCall.state) {
      case CallState.PENDING:
        return (
            <div className={styles.loading}>
              <Icon size={2} path={mdiLoading} spin={true}/>
            </div>
        );
      case CallState.SUCCESS:
        return (
            <>
              <ClassroomInfo classroom={classroomLoadCall.data}/>
              <StudentList classroom={classroomLoadCall.data}/>
            </>
        );
      case CallState.ERROR:
        return (
            <div className={styles.error}>
              <div>Nepodařilo se načíst data o třídě.</div>
              <br/>
              <pre>{JSON.stringify(classroomLoadCall.error, null, 2)}</pre>
            </div>
        );
      default:
        return null;
    }
  }

  return (
      <div className="App">
        {getChild()}
      </div>
  );
}

export default App;
