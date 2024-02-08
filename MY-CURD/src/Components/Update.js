// Update.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const updateData = JSON.parse(localStorage.getItem("updateData")) || {};
    setId(updateData.id || 0);
    setName(updateData.name || "");
    setEmail(updateData.email || "");
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("crudData")) || [];
    const indexToUpdate = storedData.findIndex((item) => item.id === parseInt(id, 10));

    storedData[indexToUpdate] = {
      id: parseInt(id, 10),
      name: name,
      email: email,
    };

    localStorage.setItem("crudData", JSON.stringify(storedData));

    navigate("/read");
  };

  return (
    <>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/read">
          <button className="btn btn-secondary mx-2"> Back </button>
        </Link>
      </form>
    </>
  );
};

export default Update;
