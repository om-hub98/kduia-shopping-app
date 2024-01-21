import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {

  const [ budget, setBudget ] = useState(2000);
  const [ spendSoFar, setSpentSoFar ] = useState(960);

  const handleBudgetChange=(event)=>{
    const budget=event.target.value;
    if(budget <= 20000 && budget >= spendSoFar){
      setBudget(budget);
    }
    
  }

  return (
    <div className="App" style={{disply:"flex", width:"100%",justifyContent:"center"}}>
      <h1>Company's Budget Allocation </h1>
      <div className="container text-center">
        <div className="row">
            <div className="col">
              Budget: £ <input type="number" value={budget} onChange={handleBudgetChange} />
            </div>
            <div className="col">
              Remaining: £{budget-spendSoFar}
            </div>
            <div className="col">
              Spent so far: £{spendSoFar}
            </div>
            <div className="col">
              <div className="dropdown-center">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Centered dropdown
                </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Action two</a></li>
                      <li><a className="dropdown-item" href="#">Action three</a></li>
                    </ul>
              </div>
            </div>
        </div>
      </div>
      <div style={{justifyContent:"center", width:"80%"}}>
        <h3>Allocation</h3>
        <ExpenseList />
      </div>   
    </div>
  );
}

export default App;
