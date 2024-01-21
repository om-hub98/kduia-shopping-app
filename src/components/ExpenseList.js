import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    return(
        <div >
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Department</th>
                    <th scope="col">Allocated Budget</th>
                    <th scope="col">Increase by 10</th>
                    <th scope="col">Decrease by 10</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default ExpenseList;
