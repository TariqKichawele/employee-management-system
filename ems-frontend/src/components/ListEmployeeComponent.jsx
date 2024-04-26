import { useEffect, useState } from "react"
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {
   const [ employees, setEmployees ] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
    listEmployees().then((res) => {
        setEmployees(res.data);
    }).catch(error => {
        console.error(error);
    })
   }, [])


   const removeEmployee = (id) => {
        deleteEmployee(id).then(() => {
            listEmployees().then((res) => {
                setEmployees(res.data);
            }).catch(error => {
                console.error(error);
            })
        }).catch(error => {
            console.error(error);
        })
   }


  return (
    <div className="container">
        <h2 className="text-center">List of Employees</h2>
        <button className="btn btn-primary" onClick={() => navigate('/add-employee')}>Add Employee</button>
        <table className="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => navigate(`/edit-employee/${employee.id}`)}>
                                    Update
                                </button>
                                <button className="btn btn-danger" onClick={() => removeEmployee(employee.id)} style={{ marginLeft: '12px' }}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent