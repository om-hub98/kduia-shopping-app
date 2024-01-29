/** @format */

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseList = ({spentSoFar, setSpentSoFar, currencySymbol}) => {

    const handlePlusIcon = () => {
        setSpentSoFar(spentSoFar+10);
    }
    const handleMinusIcon = () => {
        setSpentSoFar(spentSoFar-10);
    }
    
  return (
    <div>
      <table class="table">
        <thead style={{textAlign:"center"}}>
          <tr>
            <th scope="col">Department</th>
            <th scope="col">Allocated Budget</th>
            <th scope="col">Increase by 10</th>
            <th scope="col">Decrease by 10</th>
          </tr>
        </thead>
        <tbody style={{textAlign:"center"}}>
          <tr>
            <th style={{fontWeight:"normal"}}>Marketing</th>
            <td>{currencySymbol} 50</td>
            <td>
              <svg  
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#6AC36A"
                class="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
                onClick={handlePlusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#C30D30"
                class="bi bi-dash-circle-fill"
                viewBox="0 0 16 16"
                onClick={handleMinusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
              </svg>
            </td>
          </tr>
          <tr>
            <th style={{fontWeight:"normal"}}>Finance</th>
            <td>{currencySymbol} 300</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#6AC36A"
                class="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
                onClick={handlePlusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#C30D30"
                class="bi bi-dash-circle-fill"
                viewBox="0 0 16 16"
                onClick={handleMinusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
              </svg>
            </td>
          </tr>
          <tr>
            <th style={{fontWeight:"normal"}}>Sales</th>
            <td>{currencySymbol} 70</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#6AC36A"
                class="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
                onClick={handlePlusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#C30D30"
                class="bi bi-dash-circle-fill"
                viewBox="0 0 16 16"
                onClick={handleMinusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
              </svg>
            </td>
          </tr>
          <tr>
            <th style={{fontWeight:"normal"}}>Human Resource</th>
            <td>{currencySymbol} 40</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#6AC36A"
                class="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
                onClick={handlePlusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#C30D30"
                class="bi bi-dash-circle-fill"
                viewBox="0 0 16 16"
                onClick={handleMinusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
              </svg>
            </td>
          </tr>
          <tr>
            <th style={{fontWeight:"normal"}}>IT</th>
            <td>{currencySymbol} 500</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#6AC36A"
                class="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
                onClick={handlePlusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="#C30D30"
                class="bi bi-dash-circle-fill"
                viewBox="0 0 16 16"
                onClick={handleMinusIcon}
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
