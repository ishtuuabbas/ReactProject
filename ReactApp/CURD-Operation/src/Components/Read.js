// Read.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [tabledark, setTableDark] = useState("");
  const localStorageKey = "crudData";
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  }, [data]);

  const handleDelete = (id) => {
    const updatedList = data.filter((val) => val.id !== id);
    setData(updatedList);
  };

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") {
              setTableDark("");
            } else {
              setTableDark("table-dark");
            }
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>
      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => (
            <tr key={eachData.id}>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn-success"
                    onClick={() =>
                      localStorage.setItem(
                        "updateData",
                        JSON.stringify({
                          id: eachData.id,
                          name: eachData.name,
                          email: eachData.email,
                        })
                      )
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
