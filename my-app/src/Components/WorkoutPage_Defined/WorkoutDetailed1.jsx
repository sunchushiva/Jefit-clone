import styles from "../Styles/WorkoutPage_Defined.module.css";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
export default function WorkoutDetailed1() {
  const { login } = useContext(AuthContext);
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const request = await fetch(
      `https://mock-server-cs1k.onrender.com/workout/${id}`
    );
    const response = await request.json();
    setData(response);
  };
  if (data.name) {
    return (
      <div className={styles.Detailed1}>
        <h1>{data.name}</h1>
        <div className={styles.Description}>
          <p>
            <b>Type :-</b> {data.type}
          </p>
          <p>
            <b>Difficulty :-</b> {data.difficulty}
          </p>
          <p>
            <b>Description :-</b> {data.description}
          </p>
          <p>
            <b>Completed :-</b>{" "}
            {login ? (
              data.completed ? (
                "Completed"
              ) : (
                <button>Done</button>
              )
            ) : (
              <Link to="/login">Login first</Link>
            )}
          </p>
        </div>
        <div className={styles.Workouts}>
          {data.workouts.map((el) => {
            for (let x in el) {
              return (
                <div>
                  <h2>{x}</h2>
                  <p>
                    <b>Name :-</b> {el.Name}
                  </p>
                  <p>
                    <b>Muscle :-</b> {el.Muscle}
                  </p>
                  <p>
                    <b>Timer :-</b> {el.Timer}
                  </p>
                  <p>
                    <b>Sets :-</b> {el.Sets}
                  </p>
                  <p>
                    <b>Completed :-</b>{" "}
                    {login ? (
                      data.completed ? (
                        "Completed"
                      ) : (
                        <button>Done</button>
                      )
                    ) : (
                      <Link to="/login">Login first</Link>
                    )}
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
