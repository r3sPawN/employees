import React from 'react';
import "./Employees.css"

export class Employees extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => res.json())
    .then((result) => {this.setState({employees: result.data})})
    
  }

  render() {
    const { employees } = this.state
    return( 
      <div className='container'>
        {employees.map(employee => 
        <div className="employee-container" key={employee.id}>
        <div>
          <span>Emoloyee name: {employee.employee_name}</span>
        </div>
        <div>
        <span>Emoloyee salary: {employee.employee_salary} moneySS</span>
        </div>
        <div>
          <span>Emoloyee age: {employee.employee_age}</span>
        </div>
        </div>
        )}
      </div>
    )
  }
}