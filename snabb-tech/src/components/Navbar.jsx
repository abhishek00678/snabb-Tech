import React from "react";
import exportToCSV from "./CsvExports";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers, searchUsers } from "../redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const handleSearch = (searchTerm) => {
    dispatch(searchUsers({ searchTerm, gender: null }));
  };

  const handleGender = (selectedGender) => {
    dispatch(searchUsers({ searchTerm: null, gender: selectedGender }));
  };

  const handleDownload = () => {
    exportToCSV(users);
    alert("downloading");
  };

  return (
    <nav
      style={{
        backgroundColor: "#f2f2f2",
        color: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <div style={{ fontSize: "1.5rem", fontWeight: "bold", order: 0 }}>
        SNABB TECH
      </div>

      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <h3>select gender</h3>
      <select onChange={(e) => handleGender(e.target.value)}>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="">all</option>
      </select>

      <button
        style={{
          backgroundColor: "black",
          border: "none",
          color: "white",
          padding: "0.75rem 1.5rem",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "1rem",

          cursor: "pointer",
          transition: "background-color 0.3s ease",
          order: 2,
        }}
        onClick={handleDownload}
        onMouseOver={(e) => (
          (e.target.style.backgroundColor = "#f5f5f5"),
          (e.target.style.color = "black")
        )}
        onMouseOut={(e) => (
          (e.target.style.backgroundColor = "black"),
          (e.target.style.color = "white")
        )}
      >
        Download CSV
      </button>
    </nav>
  );
};

export default Navbar;
