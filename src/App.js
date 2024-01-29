/** @format */

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppProvider } from "./context/AppContext";
import CartValue from "./components/CartValue";
import ExpenseList from "./components/ExpenseList";
import ItemSelected from "./components/ItemSelected";
import Location from "./components/Location";
import { DropdownButton } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import "./App.css";

function App() {
  const [budget, setBudget] = useState(2000);
  const [spentSoFar, setSpentSoFar] = useState(960);
  const [currency, setCurrency] = useState("£ Pound");
  const [currencySymbol, setCurrencySymbol] = useState("£");
  const [remainingFund, setRemainingFund] = useState(0);

  const handleBudgetChange = (event) => {
    const budget = event.target.value;
    if(budget < spentSoFar){
      alert("Budget cannot be less than spent so far !!!!")
    }
    if(budget > 20000){
      alert("Budget cannot be exceed £ 20000 !!!!")
    }
    if (budget <= 20000 && budget >= spentSoFar) {
      setBudget(budget);
    }
  };
  const handleDropDown = (eventKey,event) => {
    console.log(event.target.text);
    setCurrency(event.target.text);
    setCurrencySymbol(eventKey)
  };
  return (
    <div className="App" style={{ disply: "flex", justifyContent: "center" }}>
      <h1>Company's Budget Allocation </h1>
      <div
        className="container text-center"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          className="col"
          style={{
            padding: "0.6rem 0.3rem 0.6rem 1.8rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginRight: "20px",
            backgroundColor: "lightgray",
            borderRadius: "0.3rem",
          }}
        >
          <span
            style={{ display: "flex", flexDirection: "row", width: "5rem" }}
          >
            Budget: {currencySymbol}
          </span>
          <input
            type="number"
            value={budget}
            onChange={handleBudgetChange}
            step="10"
          />
        </div>
        <div
          className="col"
          style={{
            padding: "0.7rem",
            marginRight: "1rem",
            borderRadius: "0.3rem",
            backgroundColor: "lightgreen",
            color: "darkgreen",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          Remaining: {currencySymbol}{(budget - spentSoFar) <= 0 ? alert("Spending cannot exceed the remaining value") : budget - spentSoFar}
        </div>
        <div
          className="col"
          style={{
            padding: "0.7rem",
            marginRight: "1rem",
            borderRadius: "0.3rem",
            backgroundColor: "lightblue",
            color: "blue",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          Spent so far: {currencySymbol}{spentSoFar}
        </div>
        <div className="col">
          <DropdownButton
            id="dropdown-button-dark-example2"
            variant="secondary"
            title={`Currency(${currency})`}
            className="currency"
            style={{
              backgroundColor: "lightgreen",
              border: "none",
              padding: "0.07rem",
              borderRadius: "0.3rem",
            }}
            onSelect={handleDropDown}
          >
            <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
            <Dropdown.Item eventKey="€">€ Euro</Dropdown.Item>
            <Dropdown.Item eventKey="₹">₹ Ruppee</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div style={{ justifyContent: "center", width: "80%" }}>
        <h3 style={{ margin: "3rem 3rem 1rem 3rem" }}>Allocation</h3>
        <ExpenseList 
          setSpentSoFar={setSpentSoFar} 
          spentSoFar={spentSoFar}
          currencySymbol={currencySymbol}
         />
      </div>
      <div
        style={{ marginLeft: "3rem", marginBottom: "1rem", marginTop: "2rem" }}
      >
        <h3>Change Allocation</h3>
        <div
          style={{ display: "flex", justifyContent: "left", marginTop: "1rem" }}
        >
          <div
            style={{
              marginRight: "2rem",
              backgroundColor: "#E3E3E3",
              paddingLeft: "1rem",
              borderTopLeftRadius: "0.3rem",
              borderBottomLeftRadius: "0.3rem",
            }}
          >
            <label for="budget" style={{ marginRight: "1rem" }}>
              Department{" "}
            </label>
            <select name="budget" id="budget">
              <option value="choose">Choose...</option>
              <option value="IT">IT</option>
              <option value="HR">Human Resource</option>
              <option value="sales">Sales</option>
            </select>
          </div>
          <div
            style={{
              marginRight: "2rem",
              backgroundColor: "#E3E3E3",
              paddingLeft: "1rem",
              borderTopLeftRadius: "0.3rem",
              borderBottomLeftRadius: "0.3rem",
            }}
          >
            <label for="allocation" style={{ marginRight: "1rem" }}>
              Allocation{" "}
            </label>
            <select name="allocation" id="allocation">
              <option value="add">Add</option>
              <option value="subtract">Subtract</option>
            </select>
          </div>
          <div style={{ marginRight: "2rem" }}>
            {currencySymbol} <input />
          </div>
          <div style={{ marginRight: "2rem" }}>
            <button
              style={{
                backgroundColor: "#318CE7",
                border: "none",
                borderTopRightRadius: "0.3rem",
                borderBottomRightRadius: "0.3rem",
              }}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
